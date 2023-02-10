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
  const { title, description, img, slug, uid } = req.body;
  pool.query('INSERT INTO posts(title, description, img, slug,  uid ) VALUES( $1, $2, $3, $4, $5)', [title, description, img, slug, uid], (error, results) => {

    if (error) throw error;
    res.status(201).json('Post has just createted successfully!');
  });
}

const deletePostById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  pool.query('SELECT * FROM posts WHERE id = $1;',
    [id], (error, results) => { 
           const noPostFound = !results.rows.length;

      if (noPostFound) {
        res.send('Post does not exist!');
      }
    }
  pool.query('DELETE FROM posts WHERE id = $1;',
    [id], (error, results) => {
 

      if (error) throw error;
      res.status(200).send('Post has removed successfully!');
    })
}



module.exports = {
  getPosts,
  getPostById,
  createPost,
  deletePostById
};