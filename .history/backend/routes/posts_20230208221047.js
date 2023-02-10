import express from 'express';
const { getPosts, getPostById }  from '../controllers/post.js';

const postRouter = express.Router();

postRouter.get('/test', getPosts)

module.exports = postRouter;