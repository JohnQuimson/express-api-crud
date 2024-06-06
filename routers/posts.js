const express = require('express');
const router = express.Router();
const {
  store, // create
  index,
  show, // read
  update, // update
  destroy, // delete
} = require('../controllers/posts.js');

router.post('/', store);

module.exports = router;
