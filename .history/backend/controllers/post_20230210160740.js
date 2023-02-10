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
  pool.guery('INSERT INTO posts(title, description, img, slug, uid_idx,  uid ) VALUES( $1, $2, $3, $4, $5, $6)', [title, description, img, slug, uid_idx, uid], (error, results) => {
  
});
if (error) throw error;
res.status(200).json(results.rows[0]);
}



module.exports = {
  getPosts,
  getPostById,
 createPost
};