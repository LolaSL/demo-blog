const {pool}  = require ('../db/index.js');

const getPosts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY id ASC', []);
    console.log(result);
    return result.rows;
} catch (err) {
   console.log(err);
}
}

  
const getPostById = async (req, res) => {

    console.log(req.params.id);

      try {
        const text = 'SELECT * FROM products WHERE id = $1;';
        const inputs = [data];
        const result = await pool.query(text, inputs);
        return result.rows[0];
    } catch (err) {
        throw err.stack;
    }
}


  module.exports = { getPosts, getPostById };