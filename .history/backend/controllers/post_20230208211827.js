import db from '../db';

exports.getPosts = async (req, res) => {
    try {
        const postsData = await db.query(
            "select * from posts order by slug asc;"
      );
      res.status(200).json({
        status: "success",
        results: postData.rows.length,
        data: {
          hotels: hotelRatingsData.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };