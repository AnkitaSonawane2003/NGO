// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import "../styles/login.css";
// // import Log from "../assets/vol.avif";
// // import { FaUser, FaLock } from "react-icons/fa";
// // import { Link } from 'react-router-dom';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null); // For error messages
// //   const [loading, setLoading] = useState(false); // For loading state during API call
// //   const [rememberMe, setRememberMe] = useState(false); // "Remember me" state
// //   const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Success popup visibility state
// //   const navigate = useNavigate();

// //   // Block back navigation after login
// //   useEffect(() => {
// //     const unblockBackNavigation = () => {
// //       window.history.pushState(null, '', window.location.href); // Push current state
// //       window.onpopstate = function () {
// //         window.history.pushState(null, '', window.location.href); // Keep pushing same state
// //         navigate('/volfirst'); // Redirect to volunteer first page (or dashboard)
// //       };
// //     };

// //     unblockBackNavigation();

// //     // Cleanup the event listener when component unmounts or user logs out
// //     return () => {
// //       window.onpopstate = null;
// //     };
// //   }, [navigate]);

// //   // Handle login
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError(null); // Reset previous error
// //     setLoading(true); // Set loading state to true

// //     // Validate form fields
// //     if (!email || !password) {
// //       setError("Please fill in all fields.");
// //       setLoading(false); // Reset loading state
// //       return;
// //     }

// //     try {
// //       // Send login request to the backend
// //       const response = await axios.post('http://localhost:7000/api/v1/user/volLogin', { email, password });

// //       if (response.data.success) {
// //         // Store JWT token in localStorage
// //         localStorage.setItem('volunteerToken', response.data.token);

// //         // Handle "Remember me" functionality
// //         if (rememberMe) {
// //           localStorage.setItem('volunteerEmail', email);
// //           localStorage.setItem('volunteerPassword', password);
// //         } else {
// //           // Clear local storage if "Remember me" is unchecked
// //           localStorage.removeItem('volunteerEmail');
// //           localStorage.removeItem('volunteerPassword');
// //         }

// //         // Show success popup
// //         setShowSuccessPopup(true);

// //         // Navigate to volunteer dashboard after a short delay
// //         setTimeout(() => {
// //           navigate('/volfirst');
// //         }, 2000); // Delay to allow the popup to be shown
// //       } else {
// //         setError('Invalid email or password.');
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError('An error occurred while logging in. Please try again.');
// //     } finally {
// //       setLoading(false); // Reset loading state
// //     }
// //   };

// //   // Handle "Remember me" checkbox
// //   const handleRememberMeChange = (e) => {
// //     setRememberMe(e.target.checked);
// //   };

// //   return (
// //     <div className='wrappers'>
// //       <div className='form-box login' style={{ backgroundImage: `url(${Log})` }}>
// //         <form onSubmit={handleLogin}>
// //           <h1>Volunteer Login</h1>

// //           {/* Display error message if any */}
// //           {error && <div className="error-message">{error}</div>}

// //           {/* Success popup message */}
// //           {showSuccessPopup && (
// //             <div className="success-popup">
// //               <p>Login Successful! Redirecting...</p>
// //             </div>
// //           )}

// //           <div className='input-box'>
// //             <input
// //               type='text'
// //               placeholder='Email'
// //               required
// //               value={email}
// //               onChange={e => setEmail(e.target.value)}
// //             />
// //             <FaUser className='icon' />
// //           </div>

// //           <div className='input-box'>
// //             <input
// //               type='password'
// //               placeholder='Password'
// //               required
// //               value={password}
// //               onChange={e => setPassword(e.target.value)}
// //             />
// //             <FaLock className='icon' />
// //           </div>

// //           <div className="remember-forgot">
// //             <label>
// //               <input 
// //                 type='checkbox' 
// //                 checked={rememberMe} 
// //                 onChange={handleRememberMeChange} 
// //               /> Remember me
// //             </label>
// //             <div className='rem'>
// //               <p><Link to="/forgot">Forgot password?</Link></p>
// //             </div>
// //           </div>

// //           <div>
// //             <button type='submit' disabled={loading}>
// //               {loading ? 'Logging in...' : 'Login'}
// //             </button>
// //           </div>

// //           <div className='register-link'>
// //             <p>Don't have an account? <Link to="/registervol">Click here</Link></p>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState, useEffect } from 'react'; 
// import "../styles/login.css"; 
// import { Link, useNavigate } from "react-router-dom"; 
// import Log from "../assets/vol.avif"; 
// import { FaUser } from "react-icons/fa"; 
// import { FaLock } from "react-icons/fa";  
// import axios from 'axios'; 
// import { useAuth } from "./AuthContext"; // Import the AuthContext
// import VolunteerDetails from './VolunteerDetails'; // Adjust the path based on your structure


// const Login = () => {   
//   const { login } = useAuth();  // Access the login function from the AuthContext
//   const [email, setEmail] = useState('');   
//   const [password, setPassword] = useState('');   
//   const [error, setError] = useState(null); // State for error messages   
//   const [touched, setTouched] = useState({ email: false, password: false }); // To track if input is touched   
//   const [showModal, setShowModal] = useState(false); // Modal state for success message
//   const [rememberMe, setRememberMe] = useState(false); // State to manage "Remember me"
//   const navigate = useNavigate();    
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [loading, setLoading] = useState(false); // Default state


//   // Simple email validation using regex   
//   const emailValidation = (email) => {     
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;     
//     return re.test(email);   
//   };    

//   // Check if credentials are stored in localStorage on component mount
//   useEffect(() => {
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
//     if (storedEmail && storedPassword) {
//       setEmail(storedEmail);
//       setPassword(storedPassword);
//       setRememberMe(true); // Mark "Remember me" as checked
//       setLoggedInUser({ email: 'john.doe@example.com' });
//     }
//   }, []);

//   // Handle Login Function   
//   const HandleLogin = async (e) => {     
//     e.preventDefault();     
//     setError(null); // Reset error state before each login attempt      

//     // Validate email and password     
//     if (!email || !emailValidation(email)) {       
//       setError("Please enter a valid email address.");       
//       return;     
//     }      

//     if (!password || password.length < 6) {       
//       setError("Password must be at least 6 characters long.");       
//       return;     
//     }      

//     // Prepare data for sending     
//     const sendData = { email, password };      

//     try {       
//       const response = await axios.post('http://localhost:7000/api/v1/user/volLogin', sendData);       
//       console.log(response.data);

//       // Handle success
//       if (response.data.success) {
//         // Perform login via context
//         login(response.data.userType);  // Assuming response includes userType, adjust as necessary

//         // Show modal and navigate after a short delay
//         setShowModal(true);
//         setTimeout(() => {
//           navigate('/volfirst');  // Redirect to the appropriate page
//         }, 2000);

//         // Handle "Remember me"
//         if (rememberMe) {
//           localStorage.setItem('email', email);
//           localStorage.setItem('password', password);
//         } else {
//           // Clear local storage if "Remember me" is unchecked
//           localStorage.removeItem('email');
//           localStorage.removeItem('password');
//         }

//         // Block back navigation
//         window.history.pushState(null, "", window.location.href);
//         window.onpopstate = () => {
//           window.history.pushState(null, "", window.location.href);
//         };
//       } else {
//         setError("Invalid email or password. Please try again.");
//       }
//     } catch (err) {       
//       console.log(err);       
//       setError("Invalid email or password. Please try again.");     
//     }   
//   };    

//   // Handle input change   
//   const handleInputChange = (e) => {     
//     const { name, value } = e.target;     
//     if (name === "email") {       
//       setEmail(value);     
//     } else if (name === "password") {       
//       setPassword(value);     
//     }     
//     setTouched((prevState) => ({ ...prevState, [name]: true }));   
//   };

// const Loginvol = () => {
//   const loggedInUser = {
//     email: 'john.doe@example.com',
//     // other details...
// };
// }
//   // Handle "Remember me" checkbox change
//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   return (     
//     <div className='wrappers'>       
//       <div className='form-box login' style={{ backgroundImage: `url(${Log})` }}>         
//         <form onSubmit={HandleLogin}>           
//           <h1>Volunteer Login</h1>                       {/* Display error if any */}           
//           {error && <div className="error-message">{error}</div>}                      

//           <div className='input-box'>             
//             <input               
//               type='text'               
//               name="email"               
//               placeholder='Email'               
//               value={email}               
//               onChange={handleInputChange}               
//               onBlur={() => setTouched({ ...touched, email: true })}               
//               required             
//             />             
//             <FaUser className='icon' />             
//             {touched.email && !emailValidation(email) && (               
//               <span className="error-text">Please enter a valid email address.</span>             
//             )}           
//           </div>            

//           <div className='input-box'>             
//             <input               
//               type='password'               
//               name="password"               
//               placeholder='Password'               
//               value={password}               
//               onChange={handleInputChange}               
//               onBlur={() => setTouched({ ...touched, password: true })}               
//               required             
//             />             
//             <FaLock className='icon' />             
//             {touched.password && password.length < 6 && (               
//               <span className="error-text">Password must be at least 6 characters long.</span>             
//             )}           
//           </div>            

//           <div className="remember-forgot">
//             <label><input 
//               type='checkbox' 
//               checked={rememberMe} 
//               onChange={handleRememberMeChange} 
//             /> Remember me</label>
//             <div className='rem'>
//               <p className='forgot'><Link to="/forgot">Forgot password?</Link></p>
//             </div>
//           </div>            

//           <div>             
//             <button type='submit'>Login</button>           
//           </div>            

//           <div className='register-link'>             
//             <p>               
//               Don't have an account? <Link to="/registervol">Click here</Link>             
//             </p>           
//           </div>         
//         </form>       
//       </div>     
      
//       {/* Success Modal */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Login Successful!</h2>
//             <p>You will be redirected shortly...</p>
//             <button onClick={() => navigate('/volfirst')}>Go Now</button>
//           </div>
//         </div>
//       )}
      
//     </div>   
//   );   
// };  

// <VolunteerDetails email={loggedInUser.email} />

// export default Login;  
import React, { useState, useEffect } from 'react'; 
import "../styles/login.css"; 
import { Link } from "react-router-dom"; 
import Log from "../assets/vol.avif"; 
import { useNavigate } from "react-router-dom"; 
import axios from 'axios'; 
import { FaUser, FaLock } from "react-icons/fa";  

const Loginvol = () => {   
  const [email, setEmail] = useState('');   
  const [password, setPassword] = useState('');   
  const [error, setError] = useState(null); // State for error messages   
  const [touched, setTouched] = useState({ email: false, password: false }); // To track if input is touched   
  const [showModal, setShowModal] = useState(false); // Modal state for success message
  const [rememberMe, setRememberMe] = useState(false); // State to manage "Remember me"
  const navigate = useNavigate();    

  // Simple email validation using regex   
  const emailValidation = (email) => {     
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;     
    return re.test(email);   
  };    

  // Check if credentials are stored in localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true); // Mark "Remember me" as checked
    }
  }, []);

  // Disable back navigation
  useEffect(() => {
    // Push the initial state to history
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Handle Login Function   
  const HandleLogin = async (e) => {     
    e.preventDefault();     
    setError(null); // Reset error state before each login attempt      

    // Validate email and password     
    if (!email || !emailValidation(email)) {       
      setError("Please enter a valid email address.");       
      return;     
    }      

    if (!password || password.length < 6) {       
      setError("Password must be at least 6 characters long.");       
      return;     
    }      

    // Prepare data for sending     
    const sendData = { email, password };      

    try {       
      const response = await axios.post('http://localhost:7000/api/v1/user/volLogin', sendData);       
      console.log(response.data);       
      localStorage.setItem('volunteerEmail', email);
      localStorage.setItem('token', response.data.token);
      // On successful login, show modal
      setShowModal(true);
      setTimeout(() => {
        navigate('/volfirst');
        const token = response.data.token;  // Get the JWT token
      localStorage.setItem('token', token);  // Store the token in localStorage
      }, 2000); // Navigate after 2 seconds (optional)

      // Handle Remember Me
      if (rememberMe) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        // Clear local storage if "Remember me" is unchecked
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
    } catch (err) {       
      console.log(err);       
      setError("Invalid email or password. Please try again.");     
    }   
  };    

  // Handle input change   
  const handleInputChange = (e) => {     
    const { name, value } = e.target;     
    if (name === "email") {       
      setEmail(value);     
    } else if (name === "password") {       
      setPassword(value);     
    }     
    setTouched((prevState) => ({ ...prevState, [name]: true }));   
  };

  // Handle "Remember me" checkbox change
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (     
    <div className='wrappers'>       
      <div className='form-box login' style={{ backgroundImage: `url(${Log})` }}>         
        <form onSubmit={HandleLogin}>           
          <h1>Volunteer Login</h1>                       
          {/* Display error if any */}           
          {error && <div className="error-message">{error}</div>}                      

          <div className='input-box'>             
            <input               
              type='text'               
              name="email"               
              placeholder='Email'               
              value={email}               
              onChange={handleInputChange}               
              onBlur={() => setTouched({ ...touched, email: true })}               
              required             
            />             
            <FaUser className='icon' />             
            {touched.email && !emailValidation(email) && (               
              <span className="error-text">Please enter a valid email address.</span>             
            )}           
          </div>            

          <div className='input-box'>             
            <input               
              type='password'               
              name="password"               
              placeholder='Password'               
              value={password}               
              onChange={handleInputChange}               
              onBlur={() => setTouched({ ...touched, password: true })}               
              required             
            />             
            <FaLock className='icon' />             
            {touched.password && password.length < 6 && (               
              <span className="error-text">Password must be at least 6 characters long.</span>             
            )}           
          </div>            

          <div className="remember-forgot">
            <label><input 
              type='checkbox' 
              checked={rememberMe} 
              onChange={handleRememberMeChange} 
            /> Remember me</label>
            <div className='rem'>
              <p className='forgot'><Link to="/forgot-password">Forgot password?</Link></p>
            </div>
          </div>            

          <div>             
            <button type='submit'>Login</button>           
          </div>            

          <div className='register-link'>             
            <p>               
              Don't have an account? <Link to="/registervol">Click here</Link>             
            </p>           
          </div>         
        </form>       
      </div>     
      
      {/* Success Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login Successful!</h2>
            <p>You will be redirected shortly...</p>
            <button onClick={() => navigate('/ngofirst')}>Go Now</button>
          </div>
        </div>
      )}
    </div>   
  );   
};  

export default Loginvol;

