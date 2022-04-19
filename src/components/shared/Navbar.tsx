import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky-top">
      <h1>
        <Link to="/">CryptoInfo</Link>
      </h1>
      <ul className="d-flex p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <button className="btn btn-outline-light">Sign Up</button>
        <button className="btn btn-outline-light">Sign In</button>
      </ul>
    </nav>
  );
};

export default Navbar;
