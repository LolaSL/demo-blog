const express = require('express');
const { getPosts, getPostB } = require ('../controllers/post.js');

const postRouter = express.Router();

postRouter.get('/test', addPost)

module.exports = postRouter;