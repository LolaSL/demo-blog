import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="App-header">
        <Link className="link"to="/">Demo Blog</Link>
      </header>
    </div>
  );
};

export default NavBar;
