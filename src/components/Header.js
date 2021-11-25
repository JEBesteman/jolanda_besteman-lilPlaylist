import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Jolanda's Playlist</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
