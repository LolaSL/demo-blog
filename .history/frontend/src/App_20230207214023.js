import data from "./data";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Demo Blog
        
        </a>
      </header>
      <main>
        <Container className="posts">
        <h1 className="content-title font-weight-light display-4 text-center p-4">Posts List </h1>
        {data.posts.map((post, index) => (
          <div className="post border shadow rounded" key={index}>
          <div className="img  p-2">
            <img src={post.img} alt={post.title} className="post-image rounded shadow border" />
          </div>
          <div className="content">
            {/* <Link className="link" to={`/post/${post.id}`}> */}
              <h2 className="content-title font-weight-light display- text-center p-4">{post.title}</h2>
            {/* </Link> */}
            <p className="content-post">{getText(post.description)}</p>
            <Button className="btn btn-home mb-2">Read More</Button>
          </div>
        </div>
        ))}
          </Container>
      </main>
    </div>
  );
}

export default App;
