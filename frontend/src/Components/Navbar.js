// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../styles/Navbar.css';
// import Logo from "../assets/coonector.webp";

// import Dropdown from '../pages/Dropdown';

// // import sun from "../assets/sun.jpg";

// //import moon from "../assets/moon.png";

//   // const Navbar=({theme,setTheme})=>{
//   //   // const toggle_mode=()=>{
//   //   //   theme ==='light'? setTheme('dark') :setTheme('light');
//   //   // }
//   const Navbar = () => {
//     const [showDropdown, setShowDropdown] = useState(false);  // State to toggle dropdown
  
//     // Function to toggle the dropdown visibility
//     const toggleDropdown = () => {
//       setShowDropdown(!showDropdown);
//     };
  
//   return (
//     <div className="navbar">
//     <div className="leftSide">
//      <img src={Logo} alt="Logo" width="100" /> 
//      <h1 className='head'>NGO Connector</h1>
     
//     </div>
//     <div className="rightSide">
     
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
       
//         <li><Link to="/donate">Donate</Link></li>
//         <li><Link to="/contact">Contact Us</Link></li>
//         <li>
//           <Dropdown /> 
//         </li>
//         {/* <li><Link to="/reg">Sign in</Link></li> */}
//       </ul>
//     </div>
//     {/* <div className="mode">
//     <img onClick ={()=>{toggle_mode()}} src={sun} alt="sun" width="80" height="80" margin_top="20px" /> 
//     </div> */}
    
//   </div>
//   );
// }

// export default Navbar;
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
