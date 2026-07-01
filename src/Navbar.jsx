import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>💊 Medical Shop</h2>

      <ul>
        <li><a href="http://localhost:8000/about">about</a></li>
        <li><a href="http://localhost:8000/medicines">medicines</a></li>
        <li><a href="http://localhost:8000/contact">Contact</a></li>
        <li><a href="http://localhost:8000/Login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;