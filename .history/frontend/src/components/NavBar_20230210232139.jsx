import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../img/logo.PNG";
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <div>
      <header className="App-header">
      <LinkContainer to="/" className="link-container">
          <Navbar.Brand>
          <img src={Logo} alt="Footet"  className="logo-image"/>
          </Navbar.Brand>
              </LinkContainer>
      </header>
    </div>
  );
};

export default NavBar;
