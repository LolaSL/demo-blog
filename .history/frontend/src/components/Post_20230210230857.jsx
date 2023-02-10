import React from "react";
import Card from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const Post = (props) => {
  const { post } = props;
  return (
    <div>
       <Card>
        <div className="post border shadow rounded">
          <div className="img p-2">
            <Link className="link" to={`/post/${post.slug}`}>
              <img
                src={post.img}
                alt={post.title}
                className="post-image rounded shadow border img-fluid img-thumbnail"
              />
              <p className="content-title font-weight-light  text-center">
                {post?.title}
              </p>
            </Link>
            <p className="content-post truncate">{getText(post.description)}</p>
            <Button className="btn btn-home mb-2">Read More</Button>
          </div>
        </div>
        </Card>
    </div>
  );
};

export default Post;
