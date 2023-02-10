import express from 'express';
const { getPosts, getPostById }  =requite('../controllers/post.js');

const postRouter = express.Router();

postRouter.get('/test', getPosts)

module.exports = postRouter;