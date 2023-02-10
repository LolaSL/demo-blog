const {pool}  = require ('../db/index.js');

// const getPosts = async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM posts ORDER BY id ASC', []);
//     console.log(result);
//     return result.rows;
// } catch (err) {
//    console.log(err);
// }
// }
exports.getPosts = async (req, res) => {
  try {
    const posts = await pool.query(
      "select * from places order by id asc;"
    );
    res.status(200).json({
      status: "success",
      data: {
       places: places.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
  
exports.getPostById = async (req, res) => {

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