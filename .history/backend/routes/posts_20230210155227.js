const {Router} = require('express');
const { getPosts, getPostById }  = require('../controllers/post.js');

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.post('/:id', addPost);
postRouter.get('/:id', getPostById);


module.exports = postRouter;