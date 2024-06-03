const express = require('express');
const router = express.Router();

const userPostController = require('../controllers/userPostsController');

router.post('/', userPostController.addPost);

router.get('/', userPostController.getPost);

module.exports = router;