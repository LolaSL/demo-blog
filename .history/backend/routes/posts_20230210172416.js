const {Router} = require('express');
const { getPosts, getPostById, createPost }  = require('../controllers/post.js');

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/', createPost);
postRouter.get('/:id', getPostById);
postRouter.del('/:id', getPostById);

module.exports = postRouter;