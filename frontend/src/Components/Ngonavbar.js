import React from "react";
import { Link } from "react-router-dom";
import '../styles/ngo.css';




// import sun from "../assets/sun.jpg";

//import moon from "../assets/moon.png";

  // const Navbar=({theme,setTheme})=>{
  //   // const toggle_mode=()=>{
  //   //   theme ==='light'? setTheme('dark') :setTheme('light');
  //   // }
  const Navbar = () => {
  
  return (
    <div className="nav">
   
    <div className="right">
     
    <ul>
        <li><Link to="/add">Add Event</Link></li>
        <li><Link to="/list">Volunteer list</Link></li>
       
        <li><Link to="/ngoprofile">Profile</Link></li>
        <li><Link to="/log">Logout</Link></li>
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