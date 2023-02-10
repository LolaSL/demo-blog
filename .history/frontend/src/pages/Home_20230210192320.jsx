import React, { useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

function Home() {

  const [posts, setPosts] = useState([]);


    const fetchData = async () => {
      try {
        const url = 'http://localhost:5000/api/v1/';

        const getAllPosts = () => {
          axios.get(`${url}posts`)
      .then((response) => const allPosts = re
      
      
        }
   
         

  
  return (
    <div className="home">
      <main>
        <Container className="posts">
          <h1 className="content-title font-weight-light  text-center p-4">
            Posts{" "}
          </h1>
          {
  //  (posts && posts.length > 0) ?
       (posts && posts?.map((post) =>  (
            <div className="post border shadow rounded" key={post.slug}>
              <div className="img p-2">
                <Link className="link" to={`/post/${post.slug}`}>
                  <img
                    src={post?.img}
                    alt={post.title}
                    className="post-image rounded shadow border img-fluid img-thumbnail"
                  />  
                  <p className="content-title font-weight-light  text-center">
                    {post?.title}
                  </p>
              </Link>
                <p className="content-post truncate">
                  {getText(post?.description)}
                </p>
                <Button className="btn btn-home mb-2">Read More</Button>
              </div>
            </div>
       ))) 
          // : (<p> loading... </p>)
          }
        </Container> 
      </main>
    </div>
  );
}

export default Home;
