const {db}  = require ('../db/in');

// const getPosts = async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM posts ORDER BY id ASC', []);
//     console.log(result);
//     return result.rows;
// } catch (err) {
//    console.log(err);
// }
// }
 const getPosts = (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM posts WHERE category=$1"
    : "SELECT * FROM posts";

  db.query(q, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

  
const getPostById = async (req, res) => {

    console.log(req.params.id);

      try {
        const text = 'SELECT * FROM products WHERE id = $1;';
        const inputs = [req.params.id];
        const result = await db.query(text, inputs);
        return result.rows[0];
    } catch (err) {
      console.log(err);
    }
}


  module.exports = { getPosts, getPostById };