const router = require('express').Router();

const { contentController } = require('../controllers');

router.route('/save')
  .post(contentController.createContent);

router.route('/editname')
  .post(contentController.editContentName);

router.route('/addfield')
  .post(contentController.addField);

router.route('/editfield')
  .post(contentController.editField);

router.route('/deletefield')
  .post(contentController.deleteField);

module.exports = router;