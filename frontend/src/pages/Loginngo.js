// import React, { useState, useEffect } from 'react'; 
// import "../styles/login.css"; 
// import { Link } from "react-router-dom"; 
// import Log from "../assets/vol.avif"; 
// import { useNavigate } from "react-router-dom"; 
// import axios from 'axios'; 
// import { FaUser } from "react-icons/fa"; 
// import { FaLock } from "react-icons/fa";  

// const Loginngo = () => {   
//   const [email, setEmail] = useState('');   
//   const [password, setPassword] = useState('');   
//   const [error, setError] = useState(null); // State for error messages   
//   const [touched, setTouched] = useState({ email: false, password: false }); // To track if input is touched   
//   const [showModal, setShowModal] = useState(false); // Modal state for success message
//   const [rememberMe, setRememberMe] = useState(false); // State to manage "Remember me"
//   const navigate = useNavigate();    

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
//       const response = await axios.post('http://localhost:7000/api/v1/user/NgoLogin', sendData);       
//       console.log(response.data);       

//       // On successful login, show modal
//       setShowModal(true);
//       setTimeout(() => {
//         navigate('/ngofirst');
//       }, 2000); // Navigate after 2 seconds (optional)

//       // Handle Remember Me
//       if (rememberMe) {
//         localStorage.setItem('token',response.data.token);
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
//       } else {
//         // Clear local storage if "Remember me" is unchecked
//         localStorage.removeItem('email');
//         localStorage.removeItem('password');
//       }

//       // Push a new state to block the back button
//       window.history.pushState(null, "", window.location.href);

//       // Listen for the back button event
//       window.onpopstate = () => {
//         window.history.pushState(null, "", window.location.href); // Push state again to block back navigation
//       };

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

//   // Handle "Remember me" checkbox change
//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   return (     
//     <div className='wrappers'>       
//       <div className='form-box login' style={{ backgroundImage: `url(${Log})` }}>         
//         <form onSubmit={HandleLogin}>           
//           <h1>NGO Login</h1>                       {/* Display error if any */}           
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
//               Don't have an account? <Link to="/register">Click here</Link>             
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
//             <button onClick={() => navigate('/ngofirst')}>Go Now</button>
//           </div>
//         </div>
//       )}
      
//     </div>   
//   );   
// };  

// export default Loginngo;
// import React, { useState, useEffect } from 'react'; 
// import "../styles/login.css"; 
// import { Link } from "react-router-dom"; 
// import Log from "../assets/vol.avif"; 
// import { useNavigate } from "react-router-dom"; 
// import axios from 'axios'; 
// import { FaUser, FaLock } from "react-icons/fa";  

// const Loginngo = () => {   
//   const [email, setEmail] = useState('');   
//   const [password, setPassword] = useState('');   
//   const [error, setError] = useState(null); // State for error messages   
//   const [touched, setTouched] = useState({ email: false, password: false }); // To track if input is touched   
//   const [showModal, setShowModal] = useState(false); // Modal state for success message
//   const [rememberMe, setRememberMe] = useState(false); // State to manage "Remember me"
//   const navigate = useNavigate();    

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
//     }
//   }, []);

//   // Disable back navigation
//   useEffect(() => {
//     // Push the initial state to history
//     window.history.pushState(null, "", window.location.href);

//     const handlePopState = () => {
//       window.history.pushState(null, "", window.location.href);
//     };

//     window.addEventListener("popstate", handlePopState);

//     // Cleanup the listener on component unmount
//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
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
//       const response = await axios.post('http://localhost:7000/api/v1/user/NgoLogin', sendData);       
//       console.log(response.data);       
//       localStorage.setItem('ngoEmail', email);
//       localStorage.setItem('token', response.data.token);
//       // On successful login, show modal
//       setShowModal(true);
//       setTimeout(() => {
//         navigate('/ngofirst');
//         const token = response.data.token;  // Get the JWT token
//       localStorage.setItem('token', token);  // Store the token in localStorage
//       }, 2000); // Navigate after 2 seconds (optional)

//       // Handle Remember Me
//       if (rememberMe) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
//       } else {
//         // Clear local storage if "Remember me" is unchecked
//         localStorage.removeItem('email');
//         localStorage.removeItem('password');
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

//   // Handle "Remember me" checkbox change
//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   return (     
//     <div className='wrappers'>       
//       <div className='form-box login' style={{ backgroundImage: `url(${Log})` }}>         
//         <form onSubmit={HandleLogin}>           
//           <h1>NGO Login</h1>                       
//           {/* Display error if any */}           
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
//               <p className='forgot'><Link to="/forgot-password">Forgot password?</Link></p>
//             </div>
//           </div>            

//           <div>             
//             <button type='submit'>Login</button>           
//           </div>            

//           <div className='register-link'>             
//             <p>               
//               Don't have an account? <Link to="/register">Click here</Link>             
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
//             <button onClick={() => navigate('/ngofirst')}>Go Now</button>
//           </div>
//         </div>
//       )}
//     </div>   
//   );   
// };  

// export default Loginngo;
import React, { useState, useEffect } from 'react'; 
import "../styles/login.css"; 
import { Link } from "react-router-dom"; 
import Log from "../assets/vol.avif"; 
import { useNavigate } from "react-router-dom"; 
import axios from 'axios'; 
import { FaUser, FaLock } from "react-icons/fa";  

const Loginngo = () => {   
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

  // Disable back navigation after login
  useEffect(() => {
    // Prevent back navigation
    const handlePopState = () => {
      window.history.forward();
    };

    // After successful login, replace history state
    window.history.replaceState(null, null, window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
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
      const response = await axios.post('http://localhost:7000/api/v1/user/NgoLogin', sendData);       
      console.log(response.data);       
      localStorage.setItem('ngoEmail', email);
      localStorage.setItem('token', response.data.token);

      // On successful login, show modal and navigate
      setShowModal(true);
      setTimeout(() => {
        navigate('/ngofirst');
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
          <h1>NGO Login</h1>                       

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
              Don't have an account? <Link to="/register">Click here</Link>             
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

export default Loginngo;
