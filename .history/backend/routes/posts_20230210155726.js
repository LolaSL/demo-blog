const {Router} = require('express');
const { getPosts, getPostById, addPost }  = require('../controllers/post.js');

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/:id', createPost);
postRouter.get('/:id', getPostById);


module.exports = postRouter;