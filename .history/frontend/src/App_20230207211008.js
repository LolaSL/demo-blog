import data from "./data";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Demo Blog
        
        </a>
      </header>
      <main>
        <h1>Posts List </h1>
        {data.posts.map(post=>(<div></div>))}
      </main>
    </div>
  );
}

export default App;
