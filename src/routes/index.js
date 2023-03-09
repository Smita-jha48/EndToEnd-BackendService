const router = require('express').Router();
const contentRoute = require('./content');

router.use('/content',contentRoute);

module.exports = router;