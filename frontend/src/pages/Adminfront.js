// // export default Ngofront;
// import React, { useState, useEffect } from 'react';
// import '../styles/ngo.css';
// import axios from 'axios';

// // A simple functional component to display NGOs
// const Adminfront = () => {
//   const [ngos, setNgos] = useState([]);  // State to store NGO data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
  
//   // Fetch NGOs from backend
//   useEffect(() => {
//     fetchNgos();
//   }, []);

//   // Fetch NGO data from backend
//   const fetchNgos = async () => {
//     try {
//       const token = localStorage.getItem('token');  // Get the JWT token from localStorage

//       if (!token) {
//         setError('No token found');
//         setLoading(false);
//         return;
//       }

//       // Make GET request to fetch NGOs
//       const response = await axios.get('http://localhost:7000/api/v1/getNgos', {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Attach the token to the Authorization header
//         },
//       });

//       setNgos(response.data.ngos);  // Set the fetched data to state
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   // Action when "Add" button is clicked
//   const handleAdd = (ngoId) => {
//     console.log(`Add button clicked for NGO with ID: ${ngoId}`);
//     // You can implement additional logic when the "Add" button is clicked.
//     // For example, you could add the NGO to another list, open a modal, etc.
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="ngo-list-container">
//       <h1>Registered NGOs</h1>
//       <div className="ngo-cards-container">
//         {ngos.length > 0 ? (
//           ngos.map((ngo) => (
//             <div key={ngo._id} className="ngo-card">
//               <div className="ngo-card-content">
//                 <h3>{ngo.ngoname}</h3>
//                 <p><strong>Location:</strong> {ngo.location}</p>
//                 <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//                 <p><strong>Pin:</strong> {ngo.pin}</p>
//                 <p><strong>Email:</strong> {ngo.email}</p>
//               </div>
//               <button className="add-button" onClick={() => handleAdd(ngo._id)}>Add</button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Adminfront;
// import React, { useState, useEffect } from 'react';
// import '../styles/ngo.css'; // Import the CSS file
// import axios from 'axios';

// const Adminfront = () => {
//   const [ngos, setNgos] = useState([]);  // State to store NGO data
//   const [volunteers, setVolunteers] = useState([]);  // State to store Volunteer data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [newNgo, setNewNgo] = useState({
//     ngoname: '',
//     location: '',
//     selectedNgoType: '',
//     pin: '',
//     email: '',
//   });

//   // Fetch NGO and Volunteer data from backend
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Fetch both NGO and Volunteer data
//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token');  // Get the JWT token from localStorage

//       if (!token) {
//         setError('No token found');
//         setLoading(false);
//         return;
//       }

//       // Fetch NGOs
//       const ngoResponse = await axios.get('http://localhost:7000/api/v1/getNgos', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Fetch Volunteers
//       const volunteerResponse = await axios.get('http://localhost:7000/api/v1/getVolunteers', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Set the fetched data to state
//       setNgos(ngoResponse.data.ngos);
//       setVolunteers(volunteerResponse.data.volunteers);
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   // // Action when "Add" button is clicked for NGO
//   // const handleAdd = (ngoId) => {
//   //   console.log(`Add button clicked for NGO with ID: ${ngoId}`);
//   //   // Implement your "Add" button logic here
//   // };

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (error) {
//   //   return <div>{error}</div>;
//   // }

//   // Handle the form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewNgo({ ...newNgo, [name]: value });
//   };

//   // Handle the Add NGO action
//   const handleAdd = async (e) => {
//     // e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:7000/api/v1/add',
//         newNgo,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       fetchData();  // Re-fetch NGOs after adding
//     } catch (err) {
//       setError('Error adding NGO');
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;


//   return (
//     <div className="admin-panel-container">
//       <h1 className="head1">Admin Dashboard</h1>
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/dlist">Donation List</a></li>
//           <li><a href="/clist">Queries</a></li>
//         </ul>
//       </nav>
//       <div className="side-by-side">
//         {/* Left Side: NGO List */}
//         <div className="admin-section ngo-list-container">
//           <h2>Registered NGOs</h2>
//           <div className="admin-data-container ngo-cards-container">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <div key={ngo._id} className="data-card ngo-card">
//                   <div className="ngo-card-content">
//                     <h3>{ngo.ngoname}</h3>
//                     <p><strong>Location:</strong> {ngo.location}</p>
//                     <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//                     <p><strong>Pin:</strong> {ngo.pin}</p>
//                     <p><strong>Email:</strong> {ngo.email}</p>
//                   </div>
//                   <button className="add-button" onClick={() => handleAdd(ngo._id)}>Add</button>
//                 </div>
//               ))
//             ) : (
//               <p>No NGOs found</p>
//             )}
//           </div>
//         </div>

//         {/* Right Side: Volunteer List */}
//         <div className="admin-section volunteer-list-container">
//           <h2>Registered Volunteers</h2>
//           <div className="admin-data-container volunteer-cards-container">
//             {volunteers.length > 0 ? (
//               volunteers.map((volunteer) => (
//                 <div key={volunteer._id} className="data-card volunteer-card">
//                   <div className="volunteer-card-content">
//                     <h3>{volunteer.fullname}</h3>
//                     <p><strong>Email:</strong> {volunteer.email}</p>
//                     <p><strong>DOB:</strong> {volunteer.dob}</p>
//                     <p><strong>Gender:</strong> {volunteer.gender}</p>
//                     <p><strong>Phone Number:</strong> {volunteer.phonenumber}</p>
//                     <p><strong>Location:</strong> {volunteer.address}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No Volunteers found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminfront;

import React, { useState, useEffect } from 'react';
import '../styles/ngo.css'; // Import the CSS file
import axios from 'axios';

const Adminfront = () => {
  const [ngos, setNgos] = useState([]);  // State to store NGO data
  const [volunteers, setVolunteers] = useState([]);  // State to store Volunteer data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // For success message
  const [addedNgos, setAddedNgos] = useState([]);  // To keep track of added NGOs

  // Fetch NGO and Volunteer data from backend
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch both NGO and Volunteer data
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');  // Get the JWT token from localStorage

      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      // Fetch NGOs
      const ngoResponse = await axios.get('http://localhost:7000/api/v1/getNgos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Fetch Volunteers
      const volunteerResponse = await axios.get('http://localhost:7000/api/v1/getVolunteers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Set the fetched data to state
      setNgos(ngoResponse.data.ngos);
      setVolunteers(volunteerResponse.data.volunteers);

      // Fetch already added NGOs from localStorage
      const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
      setAddedNgos(savedNgos);

      setLoading(false);  // Set loading to false after data is fetched
    } catch (err) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  // Action when "Add" button is clicked for NGO
  const handleAdd = (ngo) => {
    // Check if the NGO is already added
    if (!addedNgos.some((addedNgo) => addedNgo._id === ngo._id)) {
      // Save the selected NGO to localStorage (add to the array of added NGOs)
      const updatedAddedNgos = [...addedNgos, ngo];
      localStorage.setItem('addedNgos', JSON.stringify(updatedAddedNgos));
      setAddedNgos(updatedAddedNgos);  // Update the state

      // Show success message
      setSuccessMessage('NGO added successfully!');
    } else {
      setSuccessMessage('This NGO is already added!');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="admin-panel-container">
      <h1 className="head1">Admin Dashboard</h1>
      <nav className="menu-bar">
        <ul>
          <li><a href="/dlist">Donation List</a></li>
          <li><a href="/clist">Queries</a></li>
        </ul>
      </nav>
      <div className="side-by-side">
        {/* Left Side: NGO List */}
        <div className="admin-section ngo-list-container">
          <h2>Registered NGOs</h2>
          <div className="admin-data-container ngo-cards-container">
            {ngos.length > 0 ? (
              ngos.map((ngo) => (
                <div key={ngo._id} className="data-card ngo-card">
                  <div className="ngo-card-content">
                    <h3>{ngo.ngoname}</h3>
                    <p><strong>Location:</strong> {ngo.location}</p>
                    <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
                    <p><strong>Pin:</strong> {ngo.pin}</p>
                    <p><strong>Email:</strong> {ngo.email}</p>
                  </div>
                  {/* Only allow the "Add" button if the NGO hasn't been added yet */}
                  <button 
                    className="add-button" 
                    onClick={() => handleAdd(ngo)} 
                    disabled={addedNgos.some((addedNgo) => addedNgo._id === ngo._id)}
                  >
                    {addedNgos.some((addedNgo) => addedNgo._id === ngo._id) ? 'Added' : 'Add'}
                  </button>
                </div>
              ))
            ) : (
              <p>No NGOs found</p>
            )}
          </div>
        </div>

        {/* Right Side: Volunteer List */}
        <div className="admin-section volunteer-list-container">
          <h2>Registered Volunteers</h2>
          <div className="admin-data-container volunteer-cards-container">
            {volunteers.length > 0 ? (
              volunteers.map((volunteer) => (
                <div key={volunteer._id} className="data-card volunteer-card">
                  <div className="volunteer-card-content">
                    <h3>{volunteer.fullname}</h3>
                    <p><strong>Email:</strong> {volunteer.email}</p>
                    <p><strong>DOB:</strong> {volunteer.dob}</p>
                    <p><strong>Gender:</strong> {volunteer.gender}</p>
                    <p><strong>Phone Number:</strong> {volunteer.phonenumber}</p>
                    <p><strong>Location:</strong> {volunteer.address}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No Volunteers found</p>
            )}
          </div>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Adminfront;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/ngo.css'; // Import the CSS file

// const Adminfront = () => {
//   const [ngos, setNgos] = useState([]);  // State to store NGO data
//   const [volunteers, setVolunteers] = useState([]);  // State to store Volunteer data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch NGO and Volunteer data from backend
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Fetch both NGO and Volunteer data
//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token');  // Get the JWT token from localStorage

//       if (!token) {
//         setError('No token found');
//         setLoading(false);
//         return;
//       }

//       // Fetch NGOs
//       const ngoResponse = await axios.get('http://localhost:7000/api/v1/getNgos', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Fetch Volunteers
//       const volunteerResponse = await axios.get('http://localhost:7000/api/v1/getVolunteers', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setNgos(ngoResponse.data.ngos);
//       setVolunteers(volunteerResponse.data.volunteers);
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   // Action when "Add" button is clicked for NGO
//   const handleAdd = async (ngo) => {
//     try {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         alert('You are not authorized. Please log in.');
//         return;
//       }

//       // Sending the POST request to add NGO to the backend
//       const response = await axios.post('http://localhost:7000/api/v1/addNgo', ngo, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',  // Ensure that the content type is JSON
//         },
//       });

//       // After successfully adding the NGO, update the state locally
//       setNgos((prev) => [...prev, response.data.ngo]);

//       // Show a prompt after adding the NGO
//       alert(`${ngo.ngoname} has been successfully added!`);
//     } catch (error) {
//       console.error('Error adding NGO:', error.response || error.message);
      
//       // More detailed error handling
//       if (error.response) {
//         // If there is a response from the server
//         setError(`Failed to add NGO: ${error.response.data.message || 'Unknown error'}`);
//       } else {
//         // If there is no response (network error, etc.)
//         setError('Failed to add NGO: Network error or server is down.');
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="admin-panel-container">
//       <h1 className="head1">Admin Dashboard</h1>
//       <div className="side-by-side">
//         {/* Left Side: NGO List */}
//         <div className="admin-section ngo-list-container">
//           <h2>Registered NGOs</h2>
//           <div className="admin-data-container ngo-cards-container">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <div key={ngo._id} className="data-card ngo-card">
//                   <div className="ngo-card-content">
//                     <h3>{ngo.ngoname}</h3>
//                     <p><strong>Location:</strong> {ngo.location}</p>
//                     <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//                     <p><strong>Pin:</strong> {ngo.pin}</p>
//                     <p><strong>Email:</strong> {ngo.email}</p>
//                   </div>
//                   <button className="add-button" onClick={() => handleAdd(ngo)}>
//                     Add
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p>No NGOs found</p>
//             )}
//           </div>
//         </div>

//         {/* Right Side: Volunteer List */}
//         <div className="admin-section volunteer-list-container">
//           <h2>Registered Volunteers</h2>
//           <div className="admin-data-container volunteer-cards-container">
//             {volunteers.length > 0 ? (
//               volunteers.map((volunteer) => (
//                 <div key={volunteer._id} className="data-card volunteer-card">
//                   <div className="volunteer-card-content">
//                     <h3>{volunteer.fullname}</h3>
//                     <p><strong>Email:</strong> {volunteer.email}</p>
//                     <p><strong>DOB:</strong> {volunteer.dob}</p>
//                     <p><strong>Gender:</strong> {volunteer.gender}</p>
//                     <p><strong>Phone Number:</strong> {volunteer.phonenumber}</p>
//                     <p><strong>Location:</strong> {volunteer.address}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No Volunteers found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminfront;
