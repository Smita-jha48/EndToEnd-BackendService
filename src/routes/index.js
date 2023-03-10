const router = require('express').Router();
const contentRoute = require('./content');
const entryRoute = require('./entry');

router.use('/content',contentRoute);
router.use('/entry',entryRoute);

module.exports = router;