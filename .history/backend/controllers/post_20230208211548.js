import db from '../db';

exports.getPosts = async (req, res) => {
    try {
      const PostsData = await db.query(
        "select * from  asc;"
      );
      res.status(200).json({
        status: "success",
        results: hotelRatingsData.rows.length,
        data: {
          hotels: hotelRatingsData.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };