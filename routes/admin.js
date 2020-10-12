const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    const templatePath = path.join(rootDir, 'views', 'add-product.html');
    res.sendFile(templatePath);
});

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;
