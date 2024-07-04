const express = require('express');
const router = express.Router();
const { getHomepage, getAbc, getHtml } = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/abc', getAbc);

router.get('/html', getHtml);

module.exports = router;