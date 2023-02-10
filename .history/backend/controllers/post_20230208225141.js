const {pool}  = require ('../db/index.js');

const getPosts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC', []);
    console.log(result);
    return result.rows;
} catch (err) {
    throw err.stack;
}
}
};
  
const getPostById = async (req, res) => {

    console.log(req.params.id);
    try {

      const post = await pool.query(
        "select * from posts where id = $1",
        [req.params.id]
      );
      console.log(post);
  
      res.status(200).json({
        status: "succes",
        data: {
         post: post.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  module.exports = { getPosts, getPostById };