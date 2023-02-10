const { pool } = require('../db/index.js');

const getPosts = async (req, res) => {
  try {
    const text = "select * from places;";
    const inputs = req.body;
    const result = await pool.query(text, inputs);
    return result.rows;
  } catch (err) {
    console.log(err);
  }
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