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
const { title, description, img, slug, category } = req.body;
pool.guery('INSERT INTO posts(title, description, img, slug, uid_idx,  uid ) VALUES( $1, $2, consectetur adipiscing elit. Curabitur a tellus elit. Suspendisse lobortis quis risus ut vulputate. Proin fermentum est nec libero efficitur, rhoncus aliquam nulla facilisis. Cras vulputate vehicula eros. Ut lacinia purus eros, sed tristique est fringilla sit amet. In hendrerit ipsum ex, condimentum tincidunt purus mollis at. Mauris suscipit cursus bibendum. Ut rhoncus purus leo, nec malesuada lorem lobortis et.', 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'first-post', 1, 1);)
}

module.exports = {
  getPosts,
  getPostById,
 createPost
};