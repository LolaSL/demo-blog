const { pool } = require('../db');

const getPosts = async (req, res) => {
  pool.query('SELECT * FROM posts', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getPostById = async (req, res) => {
const id = 
  console.log(req.params.id);

  try {
    const text = 'SELECT * FROM products WHERE id = $1;';
    const inputs = [req.params.id];
    const result = await pool.query(text, inputs);
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
}


module.exports = { getPosts, getPostById };