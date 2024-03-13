import React from "react";
import "../Navbar.css";

const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        <p>Home</p>
      </a>
      <a href="/showcamps">
        <p>Campsites</p>
      </a>
      <a href="/newcamp">
        <p>Add Camp</p>
      </a>
    </div>
  );
};

export default NavBar;
