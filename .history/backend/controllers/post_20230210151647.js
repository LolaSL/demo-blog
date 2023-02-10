const { pool } = require('../db/index.js');

const getPosts = async (req, res) => {
pool.
};

const getPostById = async (req, res) => {

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