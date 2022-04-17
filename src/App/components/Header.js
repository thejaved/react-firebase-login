import React from "react";
import { Link } from "react-router-dom";
import isUser from "../config/isUser";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo center">
        <Link to="/">
          <h1>Technical</h1>
        </Link>
      </div>
      <div className="nav_container center">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Login_btn center">
        {isUser ? (
          <Link to={"/profile"}>
            <div className="isUser center">
              <i className="bx bx-user"></i>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="btn">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
