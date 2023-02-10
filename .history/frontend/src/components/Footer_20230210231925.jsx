import React from "react";
import Logo from "../img/logo.PNG";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Footet"  className="footer-image"/>
      <span>
        <b>&copy; {new Date().getFullYear()} Copyright: Multi Nishe Blo</b>
      </span>
    </footer>
  );
};

export default Footer;