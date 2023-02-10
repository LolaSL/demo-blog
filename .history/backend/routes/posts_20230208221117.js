const express = require('express');
const { getPosts, getPostById }  =require('../controllers/post.js');

const postRouter = express.Router();

postRouter.get('/test', getPosts)

module.exports = postRouter;