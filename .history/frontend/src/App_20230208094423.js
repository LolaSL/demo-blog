import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './pages/Home.jsx';
import NavBar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';
import Container from 'react-bootstrap/Container';
import PostPage from './pages/PostPage.jsx';

const Layout = () => {

  return (
    <>
      <NavBar />
     <Outlet/>
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:slug", element: <PostPage /> }
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
