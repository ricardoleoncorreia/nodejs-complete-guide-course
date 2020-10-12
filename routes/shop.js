const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    const templatePath = path.join(rootDir, 'views', 'shop.html');
    res.sendFile(templatePath);
});

module.exports = router;