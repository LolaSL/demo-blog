import data from "./data";
import { Link } from "react-router-dom";


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
        <h1>Posts List </h1>
        {data.posts.map(post => (
          <div className="post border shadow rounded" key={post.id}>
          <div className="img  p-2">
            <img src={post.img} alt="" className="post-image rounded shadow border" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1 className="content-title font-weight-light display-4 text-center p-4">{post.title}</h1>
            </Link>
            <p className="content-post">{getText(post.description)}</p>
            <Button className="btn btn-home mb-2">Read More</Button>
          </div>
        </div>
        ))}
      </main>
    </div>
  );
}

export default App;
