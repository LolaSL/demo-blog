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

  const result = pool.query('SELECT * FROM products WHERE id = $1;', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
 
 

}


module.exports = { getPosts, getPostById };