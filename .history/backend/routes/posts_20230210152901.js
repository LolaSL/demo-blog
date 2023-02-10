const express = require('express');
const { getPosts }  = require('../controllers/post.js');

const postRouter = express.Router();

postRouter.get('/', getPosts);
// postRouter.get('/:id', getPostById);


module.exports = postRouter;