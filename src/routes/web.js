const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs');
});

router.get('/abc', (req, res) => {
    res.send('ABC');
});

router.get('/html', (req, res) => {
    res.send('<h1>Hoi dan it hihi </h1>');
});

module.exports = router;