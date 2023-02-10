import data from "../data.js";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

function Home() {
  return (
    <div className="home">
      {/* <header className="App-header">
        <a href="/">Demo Blog
        
        </a>
      </header> */}
      <main>
        <Container className="posts">
          <h1 className="content-title font-weight-light  text-center p-4">
            Posts List{" "}
          </h1>
          {data.posts.map((post) => (
            <div className="post border shadow rounded" key={post.slug}>
              <div className="img  p-2">
                <img
                  src={post.img}
                  alt={post.title}
                  className="post-image rounded shadow border img-fluid img-thumbnail"
                />
                <a className="link" to={`/post/${post.slu}`}>
                  <p className="content-title font-weight-light  text-center">
                    {post.title}
                  </p>
                </a>
                <p className="content-post truncate">{getText(post.description)}</p>
                <Button className="btn btn-home mb-2">Read More</Button>
              </div>
            </div>
          ))}
        </Container>
      </main>
    </div>
  );
}

export default Home;
