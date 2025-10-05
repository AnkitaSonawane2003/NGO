import React from "react";
import { Link } from "react-router-dom";
import '../styles/ngo.css';




  const Navbar = () => {
  
  return (
    <div className="nav">
   
    <div className="right">
     
    <ul>
        <li><Link to="/add"></Link></li>
        <li><Link to="/list"></Link></li>
       
        <li><Link to="/volprofile">Profile</Link></li>
        <li><Link to="/logo">Logout</Link></li>
        <li>
         
        </li>
        {/* <li><Link to="/reg">Sign in</Link></li> */}
      </ul>
    </div>
    {/* <div className="mode">
    <img onClick ={()=>{toggle_mode()}} src={sun} alt="sun" width="80" height="80" margin_top="20px" /> 
    </div> */}
    
  </div>
  );
}

export default Navbar;