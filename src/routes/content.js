const router = require('express').Router();

const { contentController } = require('../controllers');

router.route('/save')
    .post(contentController.createContent);

module.exports = router;