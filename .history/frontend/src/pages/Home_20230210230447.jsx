import React, { useEffect, useReducer } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import logger from "use-reducer-logger";
import Post from "../components/Post";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, posts: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


function Home() {
  const [{ loading, error, posts }, dispatch] = useReducer(logger(reducer), {
    posts: [],
    loading: true,
    error: "",
  });

  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/v1/posts");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setPosts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
   
        <Container className="posts">
          <h1 className="content-title font-weight-light  text-center p-4">
            Posts{" "}
          </h1>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
              <Row className="row">
                {posts.map((post) => (
                  <Row key=>
            <Post post={post}></Post>
              </Row>
                  ))}
              </Row>
          )}
        </Container>
  
    </div>
  );
}

export default Home;
