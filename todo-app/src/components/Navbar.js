import React from 'react'
import {Link, NavLink} from "react-router-dom";
import '../style/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span>TODO</span>
        <span className="vine">APP</span>
      </div>

      {/* Navigation links */}
      <ul className="nav-links">
      <li><NavLink to ="/ ">Home</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to ='/singup'>Signup</NavLink></li>
      


        {/* <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
