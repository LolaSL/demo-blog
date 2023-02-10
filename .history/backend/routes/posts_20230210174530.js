const {Router} = require('express');
const { getPosts, getPostById, createPost,  deletePostById }  = require('../controllers/post.js');

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', createPost);
postRouter.get('/:id', getPostById);
postRouter.get('/:id', getPostById);
postRouter.delete('/:id', deletePostById);

module.exports = postRouter;