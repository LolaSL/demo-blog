import db from '../db/index';

exports.getPosts = async (req, res) => {
    try {
        const posts = await db.query(
            "select * from posts order by slug asc;"
      );
      res.status(200).json({
        status: "success",
        results: posts.rows.length,
        data: {
          posts: posts.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
};
  
exports.getPostById = async (req, res) => {

    console.log(req.params.id);
    try {

      const post = await db.query(
        "select * from posts where id = $1",
        [req.params.id]
      );
      console.log(post);
  
      res.status(200).json({
        status: "succes",
        data: {
          place: place.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  