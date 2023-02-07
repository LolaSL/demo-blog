import data from "./data";

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
          <div>
            <img src={post.img} alt={post.title} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
