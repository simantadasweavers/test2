const express = require('express');
const router = express.Router();
const user = require('./users');
const pages = require('./pages');

router.use(user);
router.use(pages);

module.exports = router;