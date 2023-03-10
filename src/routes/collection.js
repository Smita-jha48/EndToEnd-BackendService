const router = require('express').Router();

const { collectionController } = require('../controllers');

router.route('/collections')
  .get(collectionController.allCollections);

module.exports = router;
