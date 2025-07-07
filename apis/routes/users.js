const express = require('express');
const router = express.Router();
const multer = require('multer');
const Mongo = require('../database/mongoose');
const userSchema = require('../schemas/UserSchema');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.BYCRYPT_SALT_ROUNDS);
const jwt = require('jsonwebtoken');


router.post('/user/register', async (req, res) => {
    try {
        const mongo = await Mongo();
        const User = await mongo.model("User", userSchema);
        const result = await User.findOne({ "email": req.body.email }).exec();

        if (result == null) {
            bcrypt.hash(req.body.password, saltRounds, function (err, hashedPassword) {
                try {
                    const user = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hashedPassword,
                        phone: req.body.phone,
                        loc: req.body.loc,
                    });
                    user.save();

                    let access_token = jwt.sign({ email: user.email, id: user._id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                    let refresh_token = jwt.sign({ email: user.email, id: user._id }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                    res.status(201).send({ "status": "success", "result": user, "access_token": access_token, "refresh_token": refresh_token });
                } catch (err) {
                    res.status(400).send({ "status": "failed", "result": err });
                }
            });
        } else {
            res.status(409).send({ "status": "failed", "result": "email already exist" });
        }

    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.post('/user/login', async (req, res) => {
    try {
        const mongo = await Mongo();
        const User = await mongo.model("User", userSchema);
        const result = await User.findOne({ "email": req.body.email }).exec();

        if (result) {
            bcrypt.compare(req.body.password, result.password, function (err, isPasswordMatched) {
                if (isPasswordMatched) {
                    let access_token = jwt.sign({ email: result.email, id: result._id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                    let refresh_token = jwt.sign({ email: result.email, id: result._id }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                    res.status(201).send({ "status": "success", "result": result, "access_token": access_token, "refresh_token": refresh_token });
                } else {
                    res.status(401).send({ "status": "failed", "result": "password not match" });
                }
            });
        } else {
            res.status(409).send({ "status": "failed", "result": "email does not exist" });
        }

    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.post('/user/update', async (req, res) => {
    try {
        const mongo = await Mongo();
        const User = await mongo.model("User", userSchema);
        const token = req.headers.authorization.split(' ')[1];
        let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
        let user = await User.find({ _id: decoded['id'] }).exec();
        if (token) {
            await User.findByIdAndUpdate(decoded.id, {
                first_name: req.body.first_name ? req.body.first_name : user.first_name,
                last_name: req.body.last_name ? req.body.last_name : user.last_name,
                email: req.body.email ? req.body.email : user.email,
                phone: req.body.phone ? req.body.phone : user.phone,
                loc: req.body.loc ? req.body.loc : user.loc
            }, { new: true })
                .then(updatedUser => {
                    if (updatedUser) {
                        res.status(201).send({ "status": "success", "message": 'User updated successfully'})
                    } else {
                        res.status(301).send({ "status": "failed", "result": 'User not found' })
                    }
                })
                .catch(error => {
                    res.status(501).send({ "status": "failed", "result": error })
                });
        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});


router.post('/user/refresh-token', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            let decoded = jwt.verify(token, process.env.REFRESH_TOKEN_PRIVATE_KEY);
            if (decoded['email']) {
                let access_token = jwt.sign({ email: decoded['email'], id: decoded['id'] }, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
                let refresh_token = jwt.sign({ email: decoded['email'], id: decoded['id'] }, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
                res.status(201).send({ "status": "success", "access_token": access_token, "refresh_token": refresh_token });
            }
        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});



module.exports = router;