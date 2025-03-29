import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100); // Scroll threshold set to 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${sticky ? "sticky" : ""}`}>
      <div className="image">
        <Link to="/">
          <img
            src="https://pitchbook.brightspotcdn.com/69/29/1702582946ab8360e10c78d7e9e4/pitchbook-logo.svg"
            alt="PitchBook Logo"
          />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
          <li>
            <Link to="/news">News & Analysis</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="button">
        <button className="btn1">
          <Link to="/login">Log in</Link>
        </button>
        <button className="btn2">
          <Link to="/request-trial">Request a free trial</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
