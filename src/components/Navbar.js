import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#">Vishal Kashyap</a>
      <nav>
        <ul className="nav_link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Projects</a>
          </li>
          <li>
            <a href="#">Extra</a>
          </li>
        </ul>
      </nav>
      <a href="#" className="cta"><button>Contact Us</button></a>
    </header>
  );
}

export default Navbar;
