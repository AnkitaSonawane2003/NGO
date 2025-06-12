// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import '../styles/vol.css';

// const Volunteerfront = ({ email }) => {
//     const [volunteer, setVolunteer] = useState({});
//     const [ngos, setNgos] = useState([
//         {
//             _id: '1',
//             ngoname: 'Save the Children',
//             selectedNgoType: 'Child Welfare',
//             location: 'New York, USA',
//             eventDuration: '22-23 Feb 24',
//         },
//         {
//             _id: '2',
//             ngoname: 'Child Rights and You (CRY)',
//             selectedNgoType: 'Child Welfare',
//             location: 'Los Angeles, USA',
//             eventDuration: '25-27 Feb 24',
//         },
//         {
//             _id: '3',
//             ngoname: 'Plan International',
//             selectedNgoType: 'Child Welfare',
//             location: 'San Francisco, USA',
//             eventDuration: '1-3 Mar 24',
//         },
//         {
//             _id: '4',
//             ngoname: 'UNICEF',
//             selectedNgoType: 'Child Welfare',
//             location: 'Chicago, USA',
//             eventDuration: '5-7 Mar 24',
//         },
//         {
//             _id: '5',
//             ngoname: 'World Vision',
//             selectedNgoType: 'Child Welfare',
//             location: 'Austin, USA',
//             eventDuration: '10-12 Mar 24',
//         },
//         {
//             _id: '6',
//             ngoname: 'Save the Children India',
//             selectedNgoType: 'Child Welfare',
//             location: 'Boston, USA',
//             eventDuration: '15-17 Mar 24',
//         },
//     ]);

//     useEffect(() => {
//         const fetchVolunteerDetails = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`/volunteers`, { params: { email } });
//                 setVolunteer(response.data);
//             } catch (err) {
//                 console.error("Error fetching volunteer details:", err);
//                 setError(err.message || 'Failed to fetch volunteer details');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (email) {
//             fetchVolunteerDetails();
//         }
//     }, [email]);


//     return (
//         // <div className="volunteer-profile-container">
//         //     {/* Volunteer Profile Section */}
//         //     <div className="profile-header">
//         //         <h1>Welcome, {volunteer.fullname || "Volunteer"}!</h1>
//         //         <p><strong>Email:</strong> {volunteer.email || "N/A"}</p>
//         //         <p><strong>Phone:</strong> {volunteer.phonenumber || "N/A"}</p>
//         //         <p><strong>Type of NGO Choice:</strong> {volunteer.typeofngochoice || "N/A"}</p>
//         //     </div>

//         <div>
//             <h1>Volunteer Details</h1>
//             {volunteer ? (
//                 <div>
//                     <p><strong>Full Name:</strong> {volunteer.fullname}</p>
//                     <p><strong>Email:</strong> {volunteer.email}</p>
//                     <p><strong>Phone Number:</strong> {volunteer.phonenumber}</p>
//                     <p><strong>NGO Choice:</strong> {volunteer.typeofngochoice}</p>
//                 </div>
//             ) : (
//                 <p>No details available</p>
//             )};

//             {/* NGO Cards Section */}
//             <div className="ngos-section">
//                 <h2>NGOs You Are Supporting</h2>
//                 <div className="ngos-container">
//                     {ngos.map((ngo) => (
//                         <div className="ngo-card" key={ngo._id}>
//                             {/* NGO Name first in blue */}
//                             <h3>{ngo.ngoname}</h3>
//                             {/* NGO Type displayed after Name */}
//                             <p className="ngo-type"><strong>Type:</strong> {ngo.selectedNgoType}</p>
//                             <p><strong>Location:</strong> {ngo.location}</p>
//                             <p><strong>Event Duration:</strong> {ngo.eventDuration}</p>
//                             <button className="applied-button">Applied</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Volunteerfront;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});
//   const [ngos, setNgos] = useState([]);
//   const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);  // Assuming response contains volunteer data

//         // Fetch NGOs associated with the volunteer
//         const ngosResponse = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}/ngos`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgos(ngosResponse.data);  // Assuming response contains NGOs the volunteer has joined
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();
//   }, [email]);  // Dependency array ensures it runs when 'email' changes

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         {/* Profile Section */}
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//         {/* NGOs Section */}
//         <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <ul className="ngos-list">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <li key={ngo._id} className="ngo-item">
//                   {ngo.ngoname}
//                 </li>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const [ngosAvailable, setNgosAvailable] = useState([]); // List of available NGOs
//   const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);  // Assuming response contains volunteer data

//         // Fetch NGOs associated with the volunteer (those the volunteer has joined)
//         const ngosResponse = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}/ngos`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgos(ngosResponse.data);  // NGOs that the volunteer has joined

//         // Fetch the list of available NGOs
//         const availableNgosResponse = await axios.get('http://localhost:7000/api/v1/getAvailableNgos', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgosAvailable(availableNgosResponse.data);  // Available NGOs the volunteer can join
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();
//   }, [email]);  // Dependency array ensures it runs when 'email' changes

//   const handleJoinNgo = (ngo) => {
//     // Add the selected NGO to the list of joined NGOs for this volunteer (locally for now)
//     setNgos([...ngos, ngo]);

//     // Optionally, we can update the backend here if needed (but based on your request, it's just display)
//     // In this case, this will reflect only for the current session.
//     // If you wanted to persist it, you would update the backend.
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         {/* Profile Section */}
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//         {/* NGOs Section */}
//         <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <ul className="ngos-list">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <li key={ngo._id} className="ngo-item">
//                   {ngo.ngoname}
//                 </li>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </ul>
//         </div>

     
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});  // Volunteer data
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const [ngosAvailable, setNgosAvailable] = useState([]);  // List of available NGOs
//   const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage
//   const navigate = useNavigate();  // Use navigate for redirection

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);  // Assuming response contains volunteer data

//         // Fetch NGOs associated with the volunteer (those the volunteer has joined)
//         const ngosResponse = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}/ngos`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgos(ngosResponse.data);  // NGOs that the volunteer has joined

//         // Fetch the list of available NGOs
//         const availableNgosResponse = await axios.get('http://localhost:7000/api/v1/getAvailableNgos', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgosAvailable(availableNgosResponse.data);  // Available NGOs the volunteer can join
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();
//   }, [email]);  // Dependency array ensures it runs when 'email' changes

//   const handleJoinNgo = (ngo) => {
//     // Add the selected NGO to the list of joined NGOs for this volunteer (locally for now)
//     setNgos([...ngos, ngo]);

//     // Optionally, update the backend here if needed (this will reflect only for the current session)
//     // If you want to persist it in the backend, make an API call to update the volunteer's joined NGOs

//     // Optionally, you can add an API call to update the backend with the joined NGO.
//     // await axios.post(`http://localhost:7000/api/v1/volunteers/${email}/joinNgo`, { ngoId: ngo._id }, {
//     //   headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//     // });

//     // Show success message (if needed)
//     alert(`You have joined the NGO: ${ngo.ngoname}`);
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         {/* Profile Section */}
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//         {/* NGOs Section */}
//         <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <ul className="ngos-list">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <li key={ngo._id} className="ngo-item">
//                   {ngo.ngoname}
//                 </li>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </ul>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const [ngosAvailable, setNgosAvailable] = useState([]);  // List of available NGOs
//   const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);  // Assuming response contains volunteer data

//         // Fetch the list of available NGOs
//         const availableNgosResponse = await axios.get('http://localhost:7000/api/v1/getAvailableNgos', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgosAvailable(availableNgosResponse.data);  // Available NGOs the volunteer can join
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();

//     // Fetch the joined NGOs specifically for this volunteer using their email
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setNgos(savedJoinedNgos);

//   }, [email]);  // Dependency array ensures it runs when 'email' changes

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//           <li><a href="/elist">All Events</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         {/* Profile Section */}
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//        {/* NGOs Section */}
//        <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <div className="joined-ngos-container">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <span key={ngo._id} className="joined-ngo-name">
//                   {ngo.ngoname}
//                 </span>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </div></div>

       
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const [ngosAvailable, setNgosAvailable] = useState([]);  // List of available NGOs
//   const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);  // Assuming response contains volunteer data

//         // Fetch the list of available NGOs
//         const availableNgosResponse = await axios.get('http://localhost:7000/api/v1/getAvailableNgos', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgosAvailable(availableNgosResponse.data);  // Available NGOs the volunteer can join
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();

//     // Fetch the joined NGOs specifically for this volunteer using their email
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setNgos(savedJoinedNgos);

//   }, [email]);  // Dependency array ensures it runs when 'email' changes

//   // Handle adding an event to the volunteer's event list
//   const handleAddEventToVolunteerList = (event) => {
//     // Check if the volunteer has joined the NGO for this event
//     const isJoined = ngos.some((ngo) => ngo.ngoname === event.ngoName);

//     if (!isJoined) {
//       alert('You need to join the NGO first before you can volunteer for their event.');
//       return;  // Exit the function if the NGO is not joined
//     }

//     // If NGO is joined, proceed to add the event to the volunteer list
//     const volunteerList = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
    
//     // Ensure we are not adding the same event again
//     if (!volunteerList.some(ev => ev.id === event.id)) {
//       volunteerList.push({ ...event, volunteerEmail: email });
//       localStorage.setItem(`volunteerList_${email}`, JSON.stringify(volunteerList));
      
//       alert('Event successfully added to your volunteer list!');
//     } else {
//       alert('You have already added this event to your list.');
//     }
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//           <li><a href="/elist">All Events</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         {/* Profile Section */}
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//         {/* Joined NGOs Section */}
//         <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <div className="joined-ngos-container">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <span key={ngo._id} className="joined-ngo-name">
//                   {ngo.ngoname}
//                 </span>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const [volunteerEvents, setVolunteerEvents] = useState([]); // List of events the volunteer has added
//   const email = localStorage.getItem('volunteerEmail');  // Get volunteer's email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);

//         // Fetch the joined NGOs for the volunteer
//         const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//         setNgos(savedJoinedNgos);

//         // Fetch the volunteer events (from localStorage)
//         const savedVolunteerEvents = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
//         setVolunteerEvents(savedVolunteerEvents);  // Set events that volunteer added
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();
//   }, [email]);

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//           <li><a href="/elist">All Events</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//         {/* Joined NGOs Section */}
//         <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <div className="joined-ngos-container">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <span key={ngo._id} className="joined-ngo-name">
//                   {ngo.ngoname}
//                 </span>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </div>
//         </div>

//         {/* Volunteer Events Section */}
//         <div className="volunteer-events">
//           <h2>Your Volunteer Events</h2>
//           <div className="volunteer-events-container">
//             {volunteerEvents.length > 0 ? (
//               volunteerEvents.map((event) => (
//                 <div key={event.id} className="volunteer-event-card">
//                   <h3>{event.name}</h3>
//                   <p><strong>NGO:</strong> {event.ngoName}</p>
//                   <p><strong>Date:</strong> {event.date}</p>
//                   <p><strong>Time:</strong> {event.time}</p>
//                   <p><strong>Location:</strong> {event.location}</p>
                
//                 </div>
//               ))
//             ) : (
//               <p>No events added to your list.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/vol.css';

// const Volunteerfront = () => {
//   const [volunteer, setVolunteer] = useState({});
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const [volunteerEvents, setVolunteerEvents] = useState([]); // List of events the volunteer has added
//   const email = localStorage.getItem('volunteerEmail');  // Get volunteer's email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchVolunteerData = async () => {
//       try {
//         // Fetch volunteer data
//         const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setVolunteer(response.data.volunteer);

//         // Fetch the joined NGOs for the volunteer
//         const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//         setNgos(savedJoinedNgos);

//         // Fetch the volunteer events (from localStorage)
//         const savedVolunteerEvents = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
//         setVolunteerEvents(savedVolunteerEvents);  // Set events that volunteer added
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchVolunteerData();
//   }, [email]);

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/volfirst">Profile</a></li>
//           <li><a href="/all">All NGOS</a></li>
//           <li><a href="/elist">All Events</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
//           <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
//           <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
//           <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
//           <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
//         </div>

//         {/* Joined NGOs Section */}
//         <div className="joined-ngos">
//           <h2>NGOs you have joined:</h2>
//           <div className="joined-ngos-container">
//             {ngos.length > 0 ? (
//               ngos.map((ngo) => (
//                 <span key={ngo._id} className="joined-ngo-name">
//                   {ngo.ngoname}
//                 </span>
//               ))
//             ) : (
//               <p>No NGOs joined yet.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Volunteer Events Section (Moved to the bottom) */}
//       <div className="volunteer-events">
//         <h2>Your Joined Events</h2>
//         <div className="volunteer-events-container">
//           {volunteerEvents.length > 0 ? (
//             volunteerEvents.map((event) => (
//               <div key={event.id} className="volunteer-event-card">
//                 <h3>{event.name}</h3>
//                 <p><strong>NGO:</strong> {event.ngoName}</p>
//                 <p><strong>Date:</strong> {event.date}</p>
//                 <p><strong>Time:</strong> {event.time}</p>
//                 <p><strong>Location:</strong> {event.location}</p>
//               </div>
//             ))
//           ) : (
//             <p>No events added to your list.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Volunteerfront;









import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/vol.css';

const Volunteerfront = () => {
  const [volunteer, setVolunteer] = useState({});
  const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
  const [volunteerEvents, setVolunteerEvents] = useState([]); // List of events the volunteer has added
  const email = localStorage.getItem('volunteerEmail');  // Get volunteer's email from localStorage

  useEffect(() => {
    if (!email) {
      console.error('No email found in localStorage.');
      return;
    }

    const fetchVolunteerData = async () => {
      try {
        // Fetch volunteer data
        const response = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setVolunteer(response.data.volunteer);

        // Fetch the joined NGOs for the volunteer
        const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
        setNgos(savedJoinedNgos);

        // Fetch the volunteer events (from localStorage)
        const savedVolunteerEvents = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
        
        // Remove duplicate events based on event name only (ignoring NGO)
        const uniqueVolunteerEvents = savedVolunteerEvents.filter((event, index, self) =>
          index === self.findIndex((e) => e.name === event.name)
        );
        
        setVolunteerEvents(uniqueVolunteerEvents);  // Set events that volunteer added
      } catch (error) {
        console.error('Error fetching volunteer data:', error);
      }
    };

    fetchVolunteerData();
  }, [email]);

  return (
    <div className="volunteer-profile-container">
      <nav className="menu-bar">
        <ul>
          <li><a href="/volfirst">Profile</a></li>
          <li><a href="/all">All NGOS</a></li>
          <li><a href="/elist">All Events</a></li>
        </ul>
      </nav>

      <div className="profile-and-ngos">
        <div className="profile-header">
          <h1>Welcome, {volunteer.fullname || 'Volunteer'}!</h1>
          <p><strong>Email:</strong> {volunteer.email || 'N/A'}</p>
          <p><strong>Phone:</strong> {volunteer.phonenumber || 'N/A'}</p>
          <p><strong>Volunteer Since:</strong> {new Date(volunteer.dob).toLocaleDateString() || 'N/A'}</p>
          <p><strong>Gender:</strong> {volunteer.gender || 'N/A'}</p>
          <p><strong>Address:</strong> {volunteer.address || 'N/A'}</p>
        </div>

        {/* Joined NGOs Section */}
        <div className="joined-ngos">
          <h2>NGOs you have joined:</h2>
          <div className="joined-ngos-container">
            {ngos.length > 0 ? (
              ngos.map((ngo) => (
                <span key={ngo._id} className="joined-ngo-name">
                  {ngo.ngoname}
                </span>
              ))
            ) : (
              <p>No NGOs joined yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Volunteer Events Section */}
      <div className="volunteer-events">
        <h2>Your Joined Events</h2>
        <div className="volunteer-events-container">
          {volunteerEvents.length > 0 ? (
            volunteerEvents.map((event) => (
              <div key={event.id} className="volunteer-event-card">
                <h3>{event.name}</h3>
                <p><strong>NGO:</strong> {event.ngoName}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            ))
          ) : (
            <p>No events added to your list.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Volunteerfront;
