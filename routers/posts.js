const express = require('express');
const router = express.Router();
const {
  store, // create
  show, // read
  index, // index
  update, // update
  destroy, // delete
} = require('../controllers/posts.js');

router.post('/', store);
router.get('/:slug', show);
router.get('/', index);

module.exports = router;
