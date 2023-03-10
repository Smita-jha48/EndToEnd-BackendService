const router = require('express').Router();

const { entryController } = require('../controllers');

router.route('/add')
  .post(entryController.addEntries);

router.route('/entries')
  .post(entryController.getEntries);

router.route('/edit')
  .put(entryController.editEntry);

router.route('/delete')
  .delete(entryController.deleteEntry);


module.exports = router;