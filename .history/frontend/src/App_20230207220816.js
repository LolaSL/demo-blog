import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Ho';
import NavBar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';

const Layout = () => {

  return (
    <>
      <NavBar />
      <Home/>
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  // {
    // path: "/", element: <Layout />,
    // children: [
      { path: "/", element: <Home /> }
      // { path: "/post/:id", element: <Post /> },
      // { path: "/createpost", element: <CreatePost /> },
      // { path:"*", element:<NotFound />},
  //   ]

  // },
//   { path: "/register", element: <Register /> },
//   { path: "/login", element: <Login /> },
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