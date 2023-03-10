const router = require('express').Router();
const contentRoute = require('./content');
const entryRoute = require('./entry');
const collectionRoute = require('./collection');

router.use('/content',contentRoute);
router.use('/entry',entryRoute);
router.use('/collection',collectionRoute);

module.exports = router;