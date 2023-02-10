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

const addPost

module.exports = {
  getPosts,
  getPostById,
  addPost
};