// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../styles/dropdown.css';

// const Dropdown = ({ isLoggedIn, onLogout }) => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Reset the dropdown option when the user logs out
//     // const isLoggedIn = localStorage.getItem('token');
//     if (!isLoggedIn) {
//       setSelectedOption(""); 
//     }
//   }, [isLoggedIn]);

//   const handleSelectChange = (e) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     if (value === "NGO Login") {
//       navigate("/option1");
//     } else if (value === "Volunteer Login") {
//       navigate("/option2");
//     } else if (value === "Admin Login") {
//       navigate("/option3");
//     } else if (value === "Logout") {
//       onLogout();  // Trigger the logout function passed as a prop
//     }
//   };

//   return (
//     <div>
//       <select
//         value={selectedOption}
//         onChange={handleSelectChange}
//         style={dropdownStyle} // Apply custom styles for navbar
//       >
//         <option value="" disabled>
//           {isLoggedIn ? "Logged in" : "Login as"}
//         </option>
//         {isLoggedIn ? (
//           <option value="Logout">Logout</option>  // Show logout if logged in
//         ) : (
//           <>
//             <option value="NGO Login">NGO Login</option>
//             <option value="Volunteer Login">Volunteer Login</option>
//             <option value="Admin Login">Admin Login</option>
//           </>
//         )}
//       </select>
//     </div>
//   );
// };

// // Styling for the dropdown inside the navbar
// const dropdownStyle = {
//   padding: "5px",
//   fontSize: "16px",
//   borderRadius: "10px",
//   backgroundColor: "white",
//   color: "black",
//   cursor: "pointer",
// };

// export default Dropdown;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/dropdown.css';

const Dropdown = ({ isLoggedIn, onLogout }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setSelectedOption(""); // Reset dropdown option when logged out
    }
  }, [isLoggedIn]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    if (value === "NGO Login") {
      navigate("/option1");
    } else if (value === "Volunteer Login") {
      navigate("/option2");
    } else if (value === "Admin Login") {
      navigate("/option3");
    } else if (value === "Logout") {
      onLogout();  // Trigger the logout function passed as a prop
      navigate("/");  // Redirect to the homepage after logout
    }
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        style={dropdownStyle}
      >
        <option value="" disabled>
          {isLoggedIn ? "Logged in" : "Login as"}
        </option>
        {isLoggedIn ? (
          <option value="Logout">Logout</option>  // Show logout if logged in
        ) : (
          <>
            <option value="NGO Login">NGO Login</option>
            <option value="Volunteer Login">Volunteer Login</option>
            <option value="Admin Login">Admin Login</option>
          </>
        )}
      </select>
    </div>
  );
};

// Styling for the dropdown inside the navbar
const dropdownStyle = {
  padding: "5px",
  fontSize: "16px",
  borderRadius: "10px",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer",
};

export default Dropdown;
