import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <div>
      <header className="App-header">
      <LinkContainer to="/" className="link-container">
                <Navbar.Brand>Demo Blog</Navbar.Brand>
              </LinkContainer>
      </header>
    </div>
  );
};

export default NavBar;
