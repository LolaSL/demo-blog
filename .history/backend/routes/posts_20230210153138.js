const {Router} = require('express');
const { getPosts }  = require('../controllers/post.js');

const postRouter = Router();

postRouter.get('/', post.getPosts);
// postRouter.get('/:id', getPostById);


module.exports = postRouter;