const express = require('express');
const router = express.Router();

const covid = require('./covid_19');

router.get('/covid_19', covid);

router.get('*', (req, res) => {
    res.json({
        error: 'Invalid path.'
    });
});

module.exports = router;