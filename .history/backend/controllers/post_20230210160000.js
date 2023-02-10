const { pool } = require('../db');

const getPosts = async (req, res) => {
  pool.query('SELECT * FROM posts', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getPostById = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  pool.query('SELECT * FROM posts WHERE id = $1;',
    [id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows[0]);
    })
}

const createPost = (req, res) => {
const { title, description, img, slug, uid_idx,  uid } = req.body;
pool.guery('INSERT INTO posts(title, description, img, slug, uid_idx,  uid ) VALUES( $1, $2, $3, $4 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'first-post', 1, 1);)
}

module.exports = {
  getPosts,
  getPostById,
 createPost
};