import React, { useEffect,  useReducer} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import logger from 'use-reducer-logger'

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

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
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
      <main>
        <Container className="posts">
          <h1 className="content-title font-weight-light  text-center p-4">
            Posts{" "}
          </h1>
          {loading ? <div>Loading...</div>: error?<did></did>
            posts &&
              posts?.map((post) => (
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
              ))
          }
        </Container>
      </main>
    </div>
  );
}

export default Home;
