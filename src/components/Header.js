import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Jolanda's Playlist</h1>
      <ul className="links">
        <Link to="/">
          <li>Playlist</li>
        </Link>
        <Link to="/About">
          <li>About me</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
