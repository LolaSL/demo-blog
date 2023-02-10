import React from "react";
import Logo from "../img/";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Footet"  className="footer-image"/>
      <span>
        <b>&copy; {new Date().getFullYear()} Copyright: Demo Blog</b>
      </span>
    </footer>
  );
};

export default Footer;