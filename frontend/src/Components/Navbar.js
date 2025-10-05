
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import Logo from "../assets/coonector.webp";
import Dropdown from '../pages/Dropdown';

const Navbar = () => {
  // Initialize isLoggedIn state and setIsLoggedIn function using useState
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  // Logout function to handle user logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("isLoggedIn");  // Remove login status from localStorage
    setIsLoggedIn(false);  // Update the state to reflect that the user is logged out
    window.location.href = '/';  // Redirect to homepage after logout
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setIsLoggedIn(true);
    }
  },[])

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" width="100" />
        <h1 className="head">NGO Connector</h1>
      </div>
      <div className="rightSide">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <Dropdown isLoggedIn={isLoggedIn} onLogout={logout} />
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
