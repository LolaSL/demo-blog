import db from '../db';

exports.getPosts = async (req, res) => {
    try {
        const postsData = await db.query(
            "select * from posts order by slug asc;"
      );
      res.status(200).json({
        status: "success",
        results: postsData.rows.length,
        data: {
          posts: postsData.rows,
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
        "select * from places where id = $1",
        [req.params.id]
      );
      console.log(place);
  
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
  