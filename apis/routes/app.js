const express = require('express');
const router = express.Router();
const Mongo = require('../database/mongoose');
const appSchema = require('../schemas/App');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });


router.post('/app/submit_app', upload.fields([{ name: 'apk_file', maxCount: 1 }, { name: 'apk_icon', maxCount: 1 }]), async (req, res) => {
    try {
        const mongo = await Mongo();
        const App = await mongo.model("App", appSchema);
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
            if (decoded['id']) {
                const app = new App({
                    app_name: req.body.app_name,
                    google_play_url: req.body.google_play_url,
                    apk_file: req.files['apk_file'][0].filename,
                    apk_image: req.files['apk_icon'][0].filename,
                    additional_info: req.body.additional_info,
                    date: req.body.date,
                    user_id: decoded['id'],
                });
                await app.save();
                res.status(201).send({ "status": "success", "result": "App record saved successfully", "app": app });
            }

        } else {
            res.status(401).send({ "status": "failed", "result": "provide the token" });
        }
    } catch (err) {
        res.status(500).send({ "status": "failed", "result": err });
    }
});

module.exports = router;