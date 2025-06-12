// import React, { useState } from 'react';
// import "../styles/reg.css";
// import "../styles/regngo.css";
// // import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
// import { MdLocationOn } from 'react-icons/md';
// import { FaLock, FaEnvelope, FaMapPin, FaAngleDown, FaFileUpload } from "react-icons/fa";
// import Log from "../assets/vol.avif";
// import { useNavigate } from 'react-router-dom';
// const [formData, setFormData] = useState(null);
// import axios from 'axios';





// const Registerngo = () => {
//   const [selectedNgoType, setSelectedNgoType] = useState('');
//   const [uploadedFile, setUploadedFile] = useState(null); // State for the uploaded file
//   const [fileName, setFileName] = useState(''); // State for the uploaded file name
//   const [ngoname, setNgoname] = useState();
//   const [location, setLocation] = useState();
//   const [email, setEmail] = useState();
//   const [pin, setPin] = useState();
//   const [password, setPassword] = useState();
//   const navigate = useNavigate();

//   const handleNgoTypeChange = (e) => {

//     setSelectedNgoType(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]; // Get the first file uploaded
//     if (file) {
//       setUploadedFile(file); // Set the uploaded file
//       setFileName(file.name); // Set the uploaded file name
//     } else {
//       setFileName(''); // Clear the file name if no file is selected
//     }
//   };


//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     const sendData = {
//       ngoname,
//       location,
//       selectedNgoType,
//       fileName,
//       pin,
//       email,
//       password

//     };
//     setFormData(sendData);
//     axios.post('http://localhost:7000/api/v1/user/registerNgo', sendData)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//     console.log(sendData);
//     navigate('/option1');
//   }

//   // Form submission logic here
//   console.log('Form Submitted:', {
//     selectedNgoType,
//     uploadedFile
//   });

//   return (
//     <div>
//       <div className="form-box">

//         <div className='wrapper' style={{ backgroundImage: `url(${Log})` }}>
//           <form action="" onSubmit={HandleSubmit}>
//             <h1>NGO Registration</h1>

//             <div className='input-box'>

//               <input type='text' placeholder='Ngo name'
//                 required
//                 onChange={e => setNgoname(e.target.value)}

//               ></input>

//               <FaUser className='icon' />


//             </div>
//             <div className='input-box'>

//               <input type='text' placeholder='Location' required onChange={e => setLocation(e.target.value)}></input>

//               <MdLocationOn className='icon' />


//             </div>
//             <div className='input-box'>
//               {/* <label htmlFor="ngoType">
//           <FaTags className='icon'/> NGO Type:
//         </label> */}
//               <select
//                 id="ngoType"
//                 value={selectedNgoType}
//                 onChange={handleNgoTypeChange}
//                 required
//               >
//                 <option value="" disabled>Select NGO Type</option>
//                 <option value="Education">Education</option>
//                 <option value="Healthcare">Healthcare</option>
//                 <option value="Environment">Environment</option>
//                 <option value="Animal Welfare">Animal Welfare</option>
//                 <option value="Women Empowerment">Women Empowerment</option>
//                 <option value="Child Welfare">Child Welfare</option>
//                 <option value="Disaster Relief">Disaster Relief</option>
//                 <option value="Poverty Alleviation">Poverty Alleviation</option>
//                 <option value="Others">Others</option>
//               </select>
//               <FaAngleDown className="icon" />
//             </div>

//             <div className="file-upload-container">
//               <label htmlFor="fileUpload">
//                 Upload Document:  <FaFileUpload className='icon' />
//               </label>
//               <input
//                 type="file"
//                 id="fileUpload"
//                 onChange={handleFileChange}

//               />
//               {fileName && <span className="file-name">{fileName}</span>}
//             </div>

//             <div className='input-box'>

//               <input type='text' placeholder='Pin' required onChange={e => setPin(e.target.value)}></input>

//               <FaMapPin className='icon' />


//             </div>
//             <div className='input-box'>

//               <input type='email' placeholder='Email' required onChange={e => setEmail(e.target.value)}></input>

//               <FaEnvelope className='icon' />


//             </div>
//             <div className='input-box'>
//               <input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)}></input>
//               <FaLock className='icon' />
//             </div>
//             <div className="remember-forgot">
//               <label><input type='checkbox' />I agree to the terms and condition</label>

//             </div>
//             <div>
//               {/* <Link to="/option1">
//       </Link> */}
//               <button type='submit'>Register</button>
//             </div>

//             <div className='register-link'>
//               {/* <p>
//             Already have an account?<a href="#">Login</a>
//           </p> */}

//             </div>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Registerngo;

import React, { useState } from 'react'; // Import hooks at the top
import "../styles/reg.css";
import "../styles/regngo.css";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { FaLock, FaEnvelope, FaMapPin, FaAngleDown, FaFileUpload } from "react-icons/fa";
import Log from "../assets/vol.avif";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registerngo = () => {
  const [selectedNgoType, setSelectedNgoType] = useState(''); // Correct use of useState inside the function component
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [ngoname, setNgoname] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState();
  const [password, setPassword] = useState();
  const [formData, setFormData] = useState(null); // Correct use of useState inside the function component
  const navigate = useNavigate();

  const handleNgoTypeChange = (e) => {
    setSelectedNgoType(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      ngoname,
      location,
      selectedNgoType,
      fileName,
      pin,
      email,
      password
    };

    // Display the data in the frontend (optional, for debugging)
    setFormData(sendData); // Store the form data in the state to display on the screen

    // Send data to the backend
    axios.post('http://localhost:7000/api/v1/user/registerNgo', sendData)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    console.log(sendData);
    navigate('/option1');
  };

  return (
    <div>
      <div className="form-box">
        <div className='wrapper' style={{ backgroundImage: `url(${Log})` }}>
          <form onSubmit={HandleSubmit}>
            <h1>NGO Registration</h1>

            <div className='input-box'>
              <input type='text' placeholder='Ngo name' required onChange={e => setNgoname(e.target.value)} />
              <FaUser className='icon' />
            </div>

            <div className='input-box'>
              <input type='text' placeholder='Location' required onChange={e => setLocation(e.target.value)} />
              <MdLocationOn className='icon' />
            </div>

            <div className='input-box'>
              <select
                id="ngoType"
                value={selectedNgoType}
                onChange={handleNgoTypeChange}
                required
              >
                <option value="" disabled>Select NGO Type</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Environment">Environment</option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Women Empowerment">Women Empowerment</option>
                <option value="Child Welfare">Child Welfare</option>
                <option value="Disaster Relief">Disaster Relief</option>
                <option value="Poverty Alleviation">Poverty Alleviation</option>
                <option value="Others">Others</option>
              </select>
              <FaAngleDown className="icon" />
            </div>

            <div className="file-upload-container">
              <label htmlFor="fileUpload">
                Upload Document:  <FaFileUpload className='icon' />
              </label>
              <input
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
              />
              {fileName && <span className="file-name">{fileName}</span>}
            </div>

            <div className='input-box'>
              <input type='text' placeholder='Pin' required onChange={e => setPin(e.target.value)} />
              <FaMapPin className='icon' />
            </div>

            <div className='input-box'>
              <input type='email' placeholder='Email' required onChange={e => setEmail(e.target.value)} />
              <FaEnvelope className='icon' />
            </div>

            <div className='input-box'>
              <input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)} />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label><input type='checkbox' /> I agree to the terms and conditions</label>
            </div>

            <div>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </div>

      {/* Display form data below the form */}
      {formData && (
        <div className="form-data-display">
          <h2>Form Data Submitted:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Registerngo;
