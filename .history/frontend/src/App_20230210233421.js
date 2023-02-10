import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './pages/Home.jsx';
import NavBar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';
import Container from 'react-bootstrap/Container';
import PostPage from './pages/PostPage.jsx';
import NotFound from './pages/NotFound.jsx';
import CreatePost from './pages/CreatePost';
import Register from './pages/Register';
import Login from './pages/Login';


const Layout = () => {

  return (
    <div >
      <NavBar />
      <divclassName="site-container d-flex flex-column ">
      <main>
        <Outlet />
      </main></divclassName=>
      <Footer />
   </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:slug", element: <PostPage /> },
      { path: "/createpost", element: <CreatePost /> },
      { path:"*", element:<NotFound />},
    ]

  },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="App">
      <Container className="container">
        <RouterProvider router={router}></RouterProvider>
      </Container>


    </div>
  );
}
export default App;
