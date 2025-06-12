// import React, { useState, useEffect } from 'react';
// import '../styles/ngo.css'; // Import the CSS file
// import axios from 'axios';

// const All = () => {
//   const [ngos, setNgos] = useState([]);  // State to store NGO data
//   // const [volunteers, setVolunteers] = useState([]);  // State to store Volunteer data
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

//       // // Fetch Volunteers
//       // const volunteerResponse = await axios.get('http://localhost:7000/api/v1/getVolunteers', {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // });

//       // Set the fetched data to state
//       setNgos(ngoResponse.data.ngos);
//       // setVolunteers(volunteerResponse.data.volunteers);
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   // Action when "Add" button is clicked for NGO
//   const handleAdd = (ngoId) => {
//     console.log(`Add button clicked for NGO with ID: ${ngoId}`);
//     // Implement your "Add" button logic here
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="admin-panel-container">
     
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

   
//       </div>
//     </div>
//   );
// };

// export default All;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const All = () => {
//   const [ngos, setNgos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch all NGOs when the component loads
//     const fetchNgos = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:7000/api/v1/getNgos', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setNgos(response.data.ngos);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching NGOs');
//         setLoading(false);
//       }
//     };

//     fetchNgos();
//   }, []); // Fetch all NGOs when the page is loaded

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="added-ngos-container">
//       <h1>All NGOs</h1>
//       <div className="ngo-cards-container">
//         {ngos.length > 0 ? (
//           ngos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <div className="ngo-card-content">
//                 <h3>{ngo.ngoname}</h3>
//                 <p><strong>Location:</strong> {ngo.location}</p>
//                 <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//                 <p><strong>Pin:</strong> {ngo.pin}</p>
//                 <p><strong>Email:</strong> {ngo.email}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default All;
// import React, { useEffect, useState } from 'react';
// import '../styles/all.css'
// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);

//   useEffect(() => {
//     // Retrieve the added NGOs from localStorage
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);
//   }, []);

//   if (addedNgos.length === 0) return <div>No NGOs added yet!</div>;

//   return (
//     <div className="ngo-details-container">
//       <h1>Added NGO Details</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.map((ngo) => (
//           <div key={ngo._id} className="data-card ngo-card">
//             <h2>{ngo.ngoname}</h2>
//             <p><strong>Location:</strong> {ngo.location}</p>
//             <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//             <p><strong>Pin:</strong> {ngo.pin}</p>
//             <p><strong>Email:</strong> {ngo.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default All;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/all.css'

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email

//   useEffect(() => {
//     // Retrieve the added NGOs from localStorage
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);
//   }, []);

//   const handleJoinNgo = async (ngo) => {
//     try {
//       // Send the join request to backend to associate the NGO with the volunteer
//       const response = await axios.post(
//         `http://localhost:7000/api/v1/volunteers/${email}/joinNgo`,
//         { ngoId: ngo._id },
//         {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         }
//       );
      
//       // If the request is successful, update the success message
//       setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
      
//       // Optionally, update the local storage to reflect the joined NGO for the current volunteer
//       const joinedNgos = JSON.parse(localStorage.getItem('joinedNgos')) || [];
//       joinedNgos.push(ngo);
//       localStorage.setItem('joinedNgos', JSON.stringify(joinedNgos));

//     } catch (error) {
//       setSuccessMessage('There was an error joining the NGO. Please try again.');
//       console.error('Error joining NGO:', error);
//     }
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Added NGO Details</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.map((ngo) => (
//           <div key={ngo._id} className="data-card ngo-card">
//             <h2>{ngo.ngoname}</h2>
//             <p><strong>Location:</strong> {ngo.location}</p>
//             <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//             <p><strong>Pin:</strong> {ngo.pin}</p>
//             <p><strong>Email:</strong> {ngo.email}</p>

//             {/* Join NGO Button */}
//             <button className="join-ngo-button" onClick={() => handleJoinNgo(ngo)}>
//               Join NGO
//             </button>
//           </div>
//         ))}
//       </div>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default All;
// import React, { useState, useEffect } from 'react';

// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Get the joined NGOs for the logged-in volunteer using their email
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);

//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Added NGO Details</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default All;
// import React, { useState, useEffect } from 'react';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Get the joined NGOs for the logged-in volunteer using their email
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);

//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: localStorage.getItem('volunteerName'), // Assuming the volunteer's name is stored in localStorage
//       email: email
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Added NGO Details</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default All;



// import React, { useState, useEffect } from 'react';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Get the joined NGOs for the logged-in volunteer using their email
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);

//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: localStorage.getItem('volunteerName'), // Assuming the volunteer's name is stored in localStorage
//       email: email
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

  


//   return (
//     <div className="ngo-details-container">
//       <h1>Added NGO Details</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default All;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     // If there's no volunteer logged in, return early
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     // Fetch the list of added NGOs (those available to join)
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Fetch the list of NGOs that the logged-in volunteer has already joined
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);
//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: localStorage.getItem('volunteerName'), // Assuming the volunteer's name is stored in localStorage
//       email: email
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Available NGOs to Join</h1>

//       {/* Display a list of available NGOs */}
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}

//       {/* Display the list of NGOs the volunteer has joined
//       <div className="joined-ngos-section">
//         <h2>Your Joined NGOs</h2>
//         {joinedNgos.length > 0 ? (
//           <div className="joined-ngo-list">
//             {joinedNgos.map((ngo, index) => (
//               <div key={index} className="joined-ngo-card">
//                 <h3>{ngo.ngoname}</h3>
//                 <p><strong>Email:</strong> {ngo.email}</p>
//                 <p><strong>Location:</strong> {ngo.location}</p>
//                 <button
//                   className="view-volunteers-button"
//                   onClick={() => navigate(`/ngofront/${ngo._id}`)} // Navigate to the NGO's page
//                 >
//                   View Volunteers
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>You haven't joined any NGOs yet.</p>
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default All;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     // If there's no volunteer logged in, return early
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     // Fetch the list of added NGOs (those available to join)
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Fetch the list of NGOs that the logged-in volunteer has already joined
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);
//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Get the volunteer's details from localStorage
//     const volunteerName = localStorage.getItem('volunteerName');
//     const volunteerEmail = email;
//     const volunteerPhone = localStorage.getItem('volunteerPhone');  // Assuming phone number is stored
//     const volunteerAddress = localStorage.getItem('volunteerAddress');  // Assuming address is stored

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: volunteerName,
//       email: volunteerEmail,
//       phone: volunteerPhone,
//       address: volunteerAddress,
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Available NGOs to Join</h1>

//       {/* Display a list of available NGOs */}
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}

//       {/* Uncomment to display the list of NGOs the volunteer has joined */}
//       {/* 
//       <div className="joined-ngos-section">
//         <h2>Your Joined NGOs</h2>
//         {joinedNgos.length > 0 ? (
//           <div className="joined-ngo-list">
//             {joinedNgos.map((ngo, index) => (
//               <div key={index} className="joined-ngo-card">
//                 <h3>{ngo.ngoname}</h3>
//                 <p><strong>Email:</strong> {ngo.email}</p>
//                 <p><strong>Location:</strong> {ngo.location}</p>
//                 <button
//                   className="view-volunteers-button"
//                   onClick={() => navigate(`/ngofront/${ngo._id}`)} // Navigate to the NGO's page
//                 >
//                   View Volunteers
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>You haven't joined any NGOs yet.</p>
//         )}
//       </div>
//       */}
//     </div>
//   );
// };

// export default All;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     // If there's no volunteer logged in, return early
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     // Fetch the list of added NGOs (those available to join)
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Fetch the list of NGOs that the logged-in volunteer has already joined
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);
//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Get the volunteer's details from localStorage
//     const volunteerName = localStorage.getItem('volunteerName');
//     const volunteerEmail = email;
//     const volunteerPhone = localStorage.getItem('volunteerPhone');  // Assuming phone number is stored
//     const volunteerAddress = localStorage.getItem('volunteerAddress');  // Assuming address is stored

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: volunteerName,
//       email: volunteerEmail,
//       phone: volunteerPhone,
//       address: volunteerAddress,
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Available NGOs to Join</h1>

//       {/* Display a list of available NGOs */}
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default All;


//the real code 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     // Fetch the list of added NGOs (those available to join)
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Fetch the list of NGOs that the logged-in volunteer has already joined
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);
//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Get the volunteer's details from localStorage
//     const volunteerName = localStorage.getItem('volunteerName');
//     const volunteerEmail = email;
//     const volunteerPhone = localStorage.getItem('volunteerPhone');  // Assuming phone number is stored
//     const volunteerAddress = localStorage.getItem('volunteerAddress');  // Assuming address is stored

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: volunteerName,
//       email: volunteerEmail,
//       phone: volunteerPhone,
//       address: volunteerAddress,
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Available NGOs to Join</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     // If there's no volunteer logged in, return early
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     // Fetch the list of added NGOs (those available to join)
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Fetch the list of NGOs that the logged-in volunteer has already joined
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);
//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Get the volunteer's details from localStorage
//     const volunteerName = localStorage.getItem('volunteerName');
//     const volunteerEmail = email;
//     const volunteerPhone = localStorage.getItem('volunteerPhone');  // Assuming phone number is stored
//     const volunteerAddress = localStorage.getItem('volunteerAddress');  // Assuming address is stored

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: volunteerName,
//       email: volunteerEmail,
//       phone: volunteerPhone,
//       address: volunteerAddress,
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Available NGOs to Join</h1>

//       {/* Display a list of available NGOs */}
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               {/* Check if the volunteer has already joined the NGO */}
//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {/* Display success message */}
//       {successMessage && <p className="success-message">{successMessage}</p>}

//       {/* Uncomment to display the list of NGOs the volunteer has joined */}
//       {/* 
//       <div className="joined-ngos-section">
//         <h2>Your Joined NGOs</h2>
//         {joinedNgos.length > 0 ? (
//           <div className="joined-ngo-list">
//             {joinedNgos.map((ngo, index) => (
//               <div key={index} className="joined-ngo-card">
//                 <h3>{ngo.ngoname}</h3>
//                 <p><strong>Email:</strong> {ngo.email}</p>
//                 <p><strong>Location:</strong> {ngo.location}</p>
//                 <button
//                   className="view-volunteers-button"
//                   onClick={() => navigate(`/ngofront/${ngo._id}`)} // Navigate to the NGO's page
//                 >
//                   View Volunteers
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>You haven't joined any NGOs yet.</p>
//         )}
//       </div>
//       */}
//     </div>
//   );
// };

// export default All;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/all.css';

const All = () => {
  const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
  const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
  const [successMessage, setSuccessMessage] = useState('');
  const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
  const navigate = useNavigate();  // Using useNavigate for navigation

  // Fetch the added NGOs from localStorage and set it in the state
  useEffect(() => {
    // If there's no volunteer logged in, return early
    if (!email) {
      console.error('No email found in localStorage.');
      return;
    }

    // Fetch the list of added NGOs (those available to join)
    const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
    setAddedNgos(savedNgos);

    // Fetch the list of NGOs that the logged-in volunteer has already joined
    const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
    setJoinedNgos(savedJoinedNgos);
  }, [email]);

  const handleJoinNgo = (ngo) => {
    // Check if the volunteer has already joined this NGO
    if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
      setSuccessMessage('You have already joined this NGO!');
      return;
    }

    // Get the volunteer's details from localStorage
    const volunteerName = localStorage.getItem('volunteerName');
    const volunteerEmail = email;
    const volunteerPhone = localStorage.getItem('volunteerPhone');  // Assuming phone number is stored
    const volunteerAddress = localStorage.getItem('volunteerAddress');  // Assuming address is stored

    // Update the joined NGOs list for the volunteer
    const updatedJoinedNgos = [...joinedNgos, ngo];
    localStorage.setItem(`joinedNgos_${email}`, JSON.stringify(updatedJoinedNgos));

    // Add volunteer details to the NGO's volunteer list (localStorage or backend)
    const volunteerDetails = {
      name: volunteerName,
      email: volunteerEmail,
      phone: volunteerPhone,
      address: volunteerAddress,
    };

    // Fetch the current volunteers of the NGO or initialize an empty array if none
    const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
    existingVolunteers.push(volunteerDetails);
    localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

    // Update the local state with the new list of joined NGOs
    setJoinedNgos(updatedJoinedNgos);

    // Provide feedback to the volunteer
    setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
  };

  return (
    <div className="ngo-details-container">
      <h1>Available NGOs to Join</h1>

      {/* Display a list of available NGOs */}
      <div className="ngo-cards-container">
        {addedNgos.length > 0 ? (
          addedNgos.map((ngo) => (
            <div key={ngo._id} className="data-card ngo-card">
              <h2>{ngo.ngoname}</h2>
              <p><strong>Location:</strong> {ngo.location}</p>
              <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
              <p><strong>Pin:</strong> {ngo.pin}</p>
              <p><strong>Email:</strong> {ngo.email}</p>

              {/* Check if the volunteer has already joined the NGO */}
              <button
                className="join-ngo-button"
                onClick={() => handleJoinNgo(ngo)}
                disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
              >
                {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
                  ? 'Already Joined'
                  : 'Join NGO'}
              </button>
            </div>
          ))
        ) : (
          <p>No NGOs available to join.</p>
        )}
      </div>

      {/* Display success message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default All;



// export default All;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/all.css';

// const All = () => {
//   const [addedNgos, setAddedNgos] = useState([]);  // List of NGOs that can be joined
//   const [joinedNgos, setJoinedNgos] = useState([]); // List of NGOs that the volunteer has joined
//   const [successMessage, setSuccessMessage] = useState('');
//   const email = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   // Fetch the added NGOs from localStorage and set it in the state
//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     // Fetch the list of added NGOs (those available to join)
//     const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
//     setAddedNgos(savedNgos);

//     // Fetch the list of NGOs that the logged-in volunteer has already joined
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);
//   }, [email]);

//   const handleJoinNgo = (ngo) => {
//     const volunteerEmail = localStorage.getItem('volunteerEmail');  // Get the logged-in volunteer's email

//     // Check if the volunteer has already joined this NGO
//     if (joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)) {
//       setSuccessMessage('You have already joined this NGO!');
//       return;
//     }

//     // Get the volunteer's details from localStorage
//     const volunteerName = localStorage.getItem('volunteerName');
//     const volunteerPhone = localStorage.getItem('volunteerPhone');
//     const volunteerAddress = localStorage.getItem('volunteerAddress');

//     // Update the joined NGOs list for the volunteer
//     const updatedJoinedNgos = [...joinedNgos, ngo];
//     localStorage.setItem(`joinedNgos_${volunteerEmail}`, JSON.stringify(updatedJoinedNgos));

//     // Add volunteer details to the NGO's volunteer list
//     const volunteerDetails = {
//       name: volunteerName,
//       email: volunteerEmail,
//       phone: volunteerPhone,
//       address: volunteerAddress,
//     };

//     // Fetch the current volunteers of the NGO or initialize an empty array if none
//     const existingVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     existingVolunteers.push(volunteerDetails);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(existingVolunteers));

//     // Update the local state with the new list of joined NGOs
//     setJoinedNgos(updatedJoinedNgos);

//     // Provide feedback to the volunteer
//     setSuccessMessage(`You have successfully joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="ngo-details-container">
//       <h1>Available NGOs to Join</h1>
//       <div className="ngo-cards-container">
//         {addedNgos.length > 0 ? (
//           addedNgos.map((ngo) => (
//             <div key={ngo._id} className="data-card ngo-card">
//               <h2>{ngo.ngoname}</h2>
//               <p><strong>Location:</strong> {ngo.location}</p>
//               <p><strong>Type:</strong> {ngo.selectedNgoType}</p>
//               <p><strong>Pin:</strong> {ngo.pin}</p>
//               <p><strong>Email:</strong> {ngo.email}</p>

//               <button
//                 className="join-ngo-button"
//                 onClick={() => handleJoinNgo(ngo)}
//                 disabled={joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)} // Disable button if already joined
//               >
//                 {joinedNgos.some((joinedNgo) => joinedNgo._id === ngo._id)
//                   ? 'Already Joined'
//                   : 'Join NGO'}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No NGOs available to join.</p>
//         )}
//       </div>

//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </div>
//   );
// };

// export default All;
