const express = require('express');
const router = express.Router();


router.use('/food', require('./food'));
router.use('/ingredient', require('./ingredient'));

module.exports = router;
