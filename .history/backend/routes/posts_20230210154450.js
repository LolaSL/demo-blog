const {Router} = require('express');
const { getPosts, getPostById }  = require('../controllers/post.js');

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.get('/:id', getPostById);


module.exports = postRouter;