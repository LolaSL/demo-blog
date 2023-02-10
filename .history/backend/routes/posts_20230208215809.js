import express from 'express';
import  { getPosts, getPostById }  from '../controllers/post.js';

const postRouter = express.Router();

postRouter.get('/test', getO)

module.exports = postRouter;