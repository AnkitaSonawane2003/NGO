// import React, { useState, useEffect } from 'react';
// import '../styles/ngo.css';

// const Ngofront = () => {
//     const [ngo, setNgo] = useState({});
//     const [eventName, setEventName] = useState('');
//     const [eventDate, setEventDate] = useState('');
//     const [eventTime, setEventTime] = useState('');
//     const [eventLocation, setEventLocation] = useState('');
//     const [eventDescription, setEventDescription] = useState('');
//     const [skills, setSkills] = useState('');
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         // Fetch NGO details (simulate with mock data for now)
//         setNgo({
//             ngoname: 'Save the Children',
//             ngoType: 'Child Welfare',
//             location: 'New York, USA',
//             contactEmail: 'contact@savethechildren.org',
//             contactPhone: '+1-800-555-1234',
//         });
        

//     }, []);

//     const handleAddEvent = () => {
//         if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//             const newEvent = {
//                 id: events.length + 1,
//                 name: eventName,
//                 date: eventDate,
//                 time: eventTime,
//                 location: eventLocation,
//                 description: eventDescription,
//                 skillsNeeded: skills,
//             };
//             setEvents([...events, newEvent]);
//             setEventName('');
//             setEventDate('');
//             setEventTime('');
//             setEventLocation('');
//             setEventDescription('');
//             setSkills('');
//         }
//     };

//     return (
//         <div className="profile-ngo-container">
//             {/* NGO Details and Add Event Section */}
//             <div className="content-frame">
//                 {/* NGO Profile Section */}
//                 <div className="profile-header">
//                     <h1>{ngo.ngoname || 'NGO Name'}</h1>
//                     <p><strong>Type:</strong> {ngo.ngoType || 'N/A'}</p>
//                     <p><strong>Location:</strong> {ngo.location || 'N/A'}</p>
//                     <p><strong>Contact Email:</strong> {ngo.contactEmail || 'N/A'}</p>
//                     <p><strong>Contact Phone:</strong> {ngo.contactPhone || 'N/A'}</p>
//                 </div>

//                 {/* Add Event Section */}
//                 <div className="add-event-section">
//                     <h2>Add an Event</h2>
//                     <form 
//                         className="add-event-form"
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             handleAddEvent();
//                         }}
//                     >
//                         <input 
//                             type="text" 
//                             placeholder="Event Name" 
//                             value={eventName} 
//                             onChange={(e) => setEventName(e.target.value)} 
//                             required 
//                         />
//                         <input 
//                             type="date" 
//                             value={eventDate} 
//                             onChange={(e) => setEventDate(e.target.value)} 
//                             required 
//                         />
//                         <input 
//                             type="time" 
//                             value={eventTime} 
//                             onChange={(e) => setEventTime(e.target.value)} 
//                             required 
//                         />
//                         <input 
//                             type="text" 
//                             placeholder="Location" 
//                             value={eventLocation} 
//                             onChange={(e) => setEventLocation(e.target.value)} 
//                             required 
//                         />
//                         <textarea 
//                             placeholder="Event Description" 
//                             value={eventDescription} 
//                             onChange={(e) => setEventDescription(e.target.value)} 
//                             required 
//                         />
//                         <input 
//                             type="text" 
//                             placeholder="Skills Needed in Volunteers" 
//                             value={skills} 
//                             onChange={(e) => setSkills(e.target.value)} 
//                             required 
//                         />
//                         <button type="submit" className="add-event-button">Add Event</button>
//                     </form>

//                     {/* Event List Section */}
                
//                     {events.length > 0 ? (
//                         <ul className="event-list">
//                             {events.map((event) => (
//                                 <li key={event.id}>
//                                     <h4>{event.name}</h4>
//                                     <p><strong>Date:</strong> {event.date}</p>
//                                     <p><strong>Time:</strong> {event.time}</p>
//                                     <p><strong>Location:</strong> {event.location}</p>
//                                     <p><strong>Description:</strong> {event.description}</p>
//                                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p></p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ngofront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);

//   const email = localStorage.getItem('ngoEmail');  // Get email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch volunteer data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains volunteer data

//         // Fetch NGOs associated with the volunteer
//         // const ngosResponse = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}/ngos`, {
//         //   headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         // });
//         // setNgos(ngosResponse.data);  // Assuming response contains NGOs the volunteer has joined
//       } catch (error) {
//         console.error('Error fetching volunteer data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);



//   const handleAddEvent = () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         id: events.length + 1,
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//       };
//       setEvents([...events, newEvent]);
//       setEventName('');
//       setEventDate('');
//       setEventTime('');
//       setEventLocation('');
//       setEventDescription('');
//       setSkills('');
//     }
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/">Volunteer List</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         {/* Profile Section */}
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
         
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>


//         {/* Add Event Section */}
//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form 
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input  
//               type="text" 
//               placeholder="Event Name" 
//               value={eventName} 
//               onChange={(e) => setEventName(e.target.value)} 
//               required 
//             />
//             <input 
//               type="date" 
//               value={eventDate} 
//               onChange={(e) => setEventDate(e.target.value)} 
//               required 
//             />
//             <input 
//               type="time" 
//               value={eventTime} 
//               onChange={(e) => setEventTime(e.target.value)} 
//               required 
//             />
//             <input 
//               type="text" 
//               placeholder="Location" 
//               value={eventLocation} 
//               onChange={(e) => setEventLocation(e.target.value)} 
//               required 
//             />
//             <textarea 
//               placeholder="Event Description" 
//               value={eventDescription} 
//               onChange={(e) => setEventDescription(e.target.value)} 
//               required 
//             />
//             <input 
//               type="text" 
//               placeholder="Skills Needed in Volunteers" 
//               value={skills} 
//               onChange={(e) => setSkills(e.target.value)} 
//               required 
//             />
//             <button type="submit" className="add-event-button">Add Event</button>
//           </form>

//           {/* Event List Section */}
//           {events.length > 0 ? (
//             <ul className="event-list">
//               {events.map((event) => (
//                 <li key={event.id}>
//                   <h4>{event.name}</h4>
//                   <p><strong>Date:</strong> {event.date}</p>
//                   <p><strong>Time:</strong> {event.time}</p>
//                   <p><strong>Location:</strong> {event.location}</p>
//                   <p><strong>Description:</strong> {event.description}</p>
//                   <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Ngofront;
// // 



  
//     // Dependency array ensures it runs when 'email' changes

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
  
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };
  

//   return (
//     <div className="volunteer-profile-container">
//   <nav className="menu-bar">
//     <ul>
//       <li><a href="/ngofirst">Profile</a></li>
//       <li><a href="/vollist">Volunteer List</a></li> {/* Link to Event List */}
//     </ul>
//   </nav>

//   <div className="profile-and-ngos">
//     {/* Profile Section */}
//     <div className="profile-header">
//       <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//       <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//       <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//       <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//       <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//     </div>

//     {/* Event Form Section */}
//     <div className="add-event-section">
//       <h2>Add an Event</h2>
//       <form
//         className="add-event-form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleAddEvent();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Event Name"
//           value={eventName}
//           onChange={(e) => setEventName(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={eventDate}
//           onChange={(e) => setEventDate(e.target.value)}
//           required
//         />
//         <input
//           type="time"
//           value={eventTime}
//           onChange={(e) => setEventTime(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={eventLocation}
//           onChange={(e) => setEventLocation(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Event Description"
//           value={eventDescription}
//           onChange={(e) => setEventDescription(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Skills Needed"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           required
//         />
//         <button type="submit">Add Event</button>
//       </form>
//     </div>
//   </div>

//   {/* Event List Section (Appears below the form) */}
//   <div className="event-list-section">
//     <hr/>
//     <h2 className='name'>Event List</h2>
//     <div className="event-list">
//       {events.length > 0 ? (
//         <div className="card-container">
//           {events.map((event) => (
//             <div key={event.id} className="event-card">
//               <div className="event-card-left">
//                 <h3>{event.name}</h3>
//                 <p><strong>Date:</strong> {event.date}</p>
//                 <p><strong>Time:</strong> {event.time}</p>
//                 <p><strong>Location:</strong> {event.location}</p>
//                 <p><strong>Description:</strong> {event.description}</p>
//                 <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//               </div>
//               <div className="event-card-right">
//                 <button className="view-event-button">Add Event To Volunteer</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No events added yet.</p>
//       )}
//     </div>
//   </div>
// </div>
//   );
// };

// export default Ngofront;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
  
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     // Save event to the volunteer list, possibly in localStorage or update state
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];
//     volunteerList.push({ ...event, ngoName: ngo.ngoname });
//     localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//     // Show success message
//     alert('Event added to your volunteer list successfully!');
//     // navigate('/vollist');  // Navigate to Volunteer List page after adding event
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ngofront;



//real code wothout profile
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     // Save event to the volunteer list, possibly in localStorage or update state
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];
//     volunteerList.push({ ...event, ngoName: ngo.ngoname });
//     localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//     // Show success message
//     alert('Event added to your volunteer list successfully!');
//     // navigate('/vollist');  // Navigate to Volunteer List page after adding event
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>
       
//       {/* Volunteer List Section */}
//       <div className="volunteer-list-section">
//       <h2>Volunteers Who Have Joined</h2>
//       {volunteers.length > 0 ? (
//         <div className="volunteer-cards-container">
//           {volunteers.map((volunteer, index) => (
//             <div key={index} className="volunteer-card">
//               {/* <h3>{volunteer.name}</h3> */}
//               <p><strong>Email:</strong> {volunteer.email}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No volunteers have joined yet.</p>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Ngofront;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO

//         // Fetch volunteers for the NGO (assuming there's an API for this)
//         const volunteersResponse = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}/joined-events`);
//         setVolunteers(volunteersResponse.data); // Assuming the response contains volunteers
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     // Save event to the volunteer list, possibly in localStorage or update state
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];
//     volunteerList.push({ ...event, ngoName: ngo.ngoname });
//     localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//     // Show success message
//     alert('Event added to your volunteer list successfully!');
//     // navigate('/vollist');  // Navigate to Volunteer List page after adding event
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>
       
//       {/* Volunteer List Section */}
//       <div className="volunteer-list-section">
//         <h2>Volunteers Who Have Joined</h2>
//         {volunteers.length > 0 ? (
//           <div className="volunteer-cards-container">
//             {volunteers.map((volunteer, index) => (
//               <div key={index} className="volunteer-card">
//                 <p><strong>Email:</strong> {volunteer.email}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No volunteers have joined yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ngofront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [volunteers, setVolunteers] = useState([]);
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);

//   const email = localStorage.getItem('ngoEmail');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }
  
//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
//         setNgo(response.data.ngo);
  
//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchNgoData();
//   }, [email]);
  
//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email,
//       };
  
//       try {
//         const response = await axios.post(`http://localhost:7000/api/v1/events`, newEvent, {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
  
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };
  

//   const handleAddToVolunteerList = (event) => {
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];
//     volunteerList.push({ ...event, ngoName: ngo.ngoname });
//     localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//     alert('Event added to your volunteer list successfully!');
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>

      
//       {/* Volunteers Section */}
//       <div className="volunteers-section">
//         <h2>Volunteers Who Have Joined</h2>
//         {volunteers.length > 0 ? (
//           <div className="volunteers-card-container">
//             {volunteers.map((volunteer, index) => (
//               <div key={index} className="volunteer-card">
//                 <h3>{volunteer.name}</h3>
//                 <p><strong>Email:</strong> {volunteer.email}</p>
//                 <p><strong>Address:</strong> {volunteer.address}</p>
//                 <p><strong>Phone:</strong> {volunteer.phone}</p>
//                 <p><strong>Event Joined:</strong> {volunteer.eventName}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No volunteers have joined yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ngofront;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);  // State to store events
//   const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO

//         // Fetch volunteers who have joined the NGO from localStorage
//         const ngoVolunteers = JSON.parse(localStorage.getItem(`volunteers_${response.data.ngo._id}`)) || [];
//         setVolunteers(ngoVolunteers);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email,
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       {/* Event List Section */}
//       <div className="event-list-section">
//         <h2>Event List</h2>
//         {events.length > 0 ? (
//           <div className="event-cards-container">
//             {events.map((event, index) => (
//               <div key={index} className="event-card">
//                 <h3>{event.name}</h3>
//                 <p><strong>Date:</strong> {event.date}</p>
//                 <p><strong>Time:</strong> {event.time}</p>
//                 <p><strong>Location:</strong> {event.location}</p>
//                 <p><strong>Description:</strong> {event.description}</p>
//                 <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No events have been added yet.</p>
//         )}
//       </div>

//       {/* Volunteer List Section */}
//       <div className="volunteer-list-section">
//         <h2>Volunteers Who Have Joined</h2>
//         {volunteers.length > 0 ? (
//           <div className="volunteer-cards-container">
//             {volunteers.map((volunteer, index) => (
//               <div key={index} className="volunteer-card">
//                 <h3>{volunteer.name}</h3>
//                 <p><strong>Email:</strong> {volunteer.email}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No volunteers have joined yet.</p>
//         )}
//       </div>
      
//     </div>
//   );
// };

// export default Ngofront;








// this is the real code 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
// const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers
  
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     // Get the current volunteer list from localStorage or initialize an empty array
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];
    
//     // Check if the event already exists in the volunteer list
//     const isEventAlreadyAdded = volunteerList.some(volunteerEvent => volunteerEvent.id === event.id);

//     if (isEventAlreadyAdded) {
//       // Show an alert if the event is already added
//       alert('Event already added to  volunteer list!');
//     } else {
//       // If the event is not in the list, add it
//       volunteerList.push({ ...event, ngoName: ngo.ngoname });
//       localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//       // Show success message
//       alert('Event added to your volunteer list successfully!');
//       // Optionally, navigate to the volunteer list page after adding the event
//       navigate('/vollist');  // Uncomment if you want to navigate
//     }
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>
//             {/* Volunteer List Section */}
//       <div className="volunteer-list-section">
//       <h2>Volunteers Who Have Joined</h2>
//       {volunteers.length > 0 ? (
//         <div className="volunteer-cards-container">
//           {volunteers.map((volunteer, index) => (
//             <div key={index} className="volunteer-card">
//               <h3>{volunteer.name}</h3>
//               <p><strong>Email:</strong> {volunteer.email}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No volunteers have joined yet.</p>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Ngofront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers

//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     // Get the current volunteer list from localStorage or initialize an empty array
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];

//     // Check if the event already exists in the volunteer list
//     const isEventAlreadyAdded = volunteerList.some(volunteerEvent => volunteerEvent.id === event.id);

//     if (isEventAlreadyAdded) {
//       // Show an alert if the event is already added
//       alert('Event already added to volunteer list!');
//     } else {
//       // If the event is not in the list, add it
//       volunteerList.push({ ...event, ngoName: ngo.ngoname });
//       localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//       // Show success message
//       alert('Event added to your volunteer list successfully!');
//       // Optionally, navigate to the volunteer list page after adding the event
//       navigate('/vollist');  // Uncomment if you want to navigate
//     }
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent(); // Calls the handleAddEvent function when the form is submitted
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>

//       {/* Volunteer List Section */}
//       <div className="volunteer-list-section">
//         <h2>Volunteers Who Have Joined</h2>
//         {volunteers.length > 0 ? (
//           <div className="volunteer-cards-container">
//             {volunteers.map((volunteer, index) => (
//               <div key={index} className="volunteer-card">
//                 <h3>{volunteer.name}</h3>
//                 <p><strong>Email:</strong> {volunteer.email}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No volunteers have joined yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ngofront;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers

//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     // Get the current volunteer list from localStorage or initialize an empty array
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];

//     // Check if the event already exists in the volunteer list
//     const isEventAlreadyAdded = volunteerList.some(volunteerEvent => volunteerEvent.id === event.id);

//     if (isEventAlreadyAdded) {
//       // Show an alert if the event is already added
//       alert('Event already added to volunteer list!');
//     } else {
//       // If the event is not in the list, add it
//       volunteerList.push({ ...event, ngoName: ngo.ngoname });
//       localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//       // Show success message
//       alert('Event added to your volunteer list successfully!');
//       // Optionally, navigate to the volunteer list page after adding the event
//       navigate('/vollist');  // Uncomment if you want to navigate
//     }
//   };

//   useEffect(() => {
//     // Fetch the list of volunteers who joined this NGO
//     const fetchVolunteers = () => {
//       const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];

//       // Filter out the volunteers who joined this specific NGO
//       const ngoVolunteers = volunteerList.filter(volunteer => volunteer.ngoName === ngo.ngoname);
//       setVolunteers(ngoVolunteers);
//     };

//     fetchVolunteers();
//   }, [ngo.ngoname]);

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent(); // Calls the handleAddEvent function when the form is submitted
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>

//      {/* Volunteer List Section */}
//      <div className="volunteer-list-section">
//         <h2>Volunteers Who Have Joined</h2>
//         {volunteers.length > 0 ? (
//           <div className="volunteer-cards-container">
//             {volunteers.map((volunteer, index) => (
//               <div key={index} className="volunteer-card">
//                 <h3>{volunteer.email}</h3> {/* Displaying volunteer's email */}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No volunteers have joined yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ngofront;

//realone
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated import for v6
import '../styles/styling.css';

const Ngofront = () => {
  const [ngo, setNgo] = useState({});
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [events, setEvents] = useState([]);
  const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers for each event

  const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
  const navigate = useNavigate();  // Using useNavigate for navigation

  useEffect(() => {
    if (!email) {
      console.error('No email found in localStorage.');
      return;
    }

    const fetchNgoData = async () => {
      try {
        // Fetch NGO data using email
        const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setNgo(response.data.ngo);  // Assuming response contains NGO data

        // Fetch events for the NGO
        const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
        setEvents(eventsResponse.data); // Assuming response contains events for the NGO

        // Fetch volunteers who have joined events for the NGO
        const volunteersResponse = await axios.get(`http://localhost:7000/api/v1/volunteers/${email}`);
        setVolunteers(volunteersResponse.data); // Assuming response contains volunteer data

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNgoData();
  }, [email]);

  const handleAddEvent = async () => {
    if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
      const newEvent = {
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        description: eventDescription,
        skillsNeeded: skills,
        ngoEmail: email, // Attach the NGO email to the event
      };

      try {
        const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        if (response.data.success) {
          setEvents([...events, response.data.event]);
          setEventName('');
          setEventDate('');
          setEventTime('');
          setEventLocation('');
          setEventDescription('');
          setSkills('');
        }
      } catch (error) {
        console.error('Error adding event:', error);
      }
    }
  };

  const handleAddToVolunteerList = (event) => {
  const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];

  // Check if the event already exists in the volunteer list
  const isEventAlreadyAdded = volunteerList.some(volunteerEvent => volunteerEvent.id === event.id);

  if (isEventAlreadyAdded) {
    alert('Event already added to volunteer list!');
  } else {
    // Add event to the volunteer list
    volunteerList.push({ ...event, ngoName: ngo.ngoname });
    localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

    alert('Event added to your volunteer list successfully!');
  }
};

  
// In Ngofront.js (on the NGO page where volunteers are listed)
useEffect(() => {
  const ngoName = ngo.ngoname;  // Assuming ngo name is available
  const volunteersData = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
  setVolunteers(volunteersData);
}, [ngo._id]);  // Trigger when NGO ID changes

  return (
    <div className="volunteer-profile-container">
      <nav className="menu-bar">
        <ul>
          <li><a href="/ngofirst">Profile</a></li>
          <li><a href="#volunteer-list">Volunteer List</a></li> {/* Link to Volunteer List */}
        </ul>
      </nav>

      <div className="profile-and-ngos">
        <div className="profile-header">
          <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
          <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
          <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
          <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
          <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
        </div>

        <div className="add-event-section">
          <h2>Add an Event</h2>
          <form
            className="add-event-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddEvent(); // Calls the handleAddEvent function when the form is submitted
            }}
          >
            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
            <textarea
              placeholder="Event Description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Skills Needed"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
            <button type="submit">Add Event</button>
          </form>
        </div>
      </div>

      
{events.map((event) => (
  <div key={event.id} className="event-card">
    <div className="event-card-left">
      <h3>{event.name}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
    </div>
    <div className="event-card-right">
      <button
        className="view-event-button"
        onClick={() => handleAddToVolunteerList(event)}
        disabled={volunteers.some(volunteer => volunteer.eventId === event.id)}
      >
        Add Event To Volunteer
      </button>
    </div>
  </div>
))}

      {/* Volunteer List Section */}
      <div className="volunteer-list-section" id="volunteer-list">
        <h2>Volunteers Who Have Joined</h2>
        {volunteers.length > 0 ? (
          <div className="volunteer-cards-container">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="volunteer-card">
                
                <p><strong>Email:</strong> {volunteer.email}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No volunteers have joined yet.</p>
        )}
      </div>
    </div>
  );
};

export default Ngofront;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]); // State to store the list of volunteers
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();

//     // Fetch the list of volunteers who joined the NGO
//     const storedVolunteers = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//     setVolunteers(storedVolunteers);

//   }, [email, ngo._id]);  // Re-run effect when NGO changes

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li>
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         {/* Display List of Volunteers who joined the NGO */}
//         <div className="volunteer-list-section">
//           <h2>Volunteers Who Have Joined</h2>
//           {volunteers.length > 0 ? (
//             <div className="volunteer-list">
//               {volunteers.map((volunteer, index) => (
//                 <div key={index} className="volunteer-card">
//                   <h3>{volunteer.name}</h3>
//                   <p><strong>Email:</strong> {volunteer.email}</p>
//                   <p><strong>Phone:</strong> {volunteer.phone}</p>
//                   <p><strong>Address:</strong> {volunteer.address}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No volunteers have joined yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ngofront;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Updated import for v6
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]); // State to hold the volunteers of the NGO
  
//   const email = localStorage.getItem('ngoEmail'); // Get email from localStorage
//   const navigate = useNavigate();  // <-- Using useNavigate for navigation

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         // Fetch NGO data using email
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNgo(response.data.ngo);  // Assuming response contains NGO data

//         // Fetch events for the NGO
//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data); // Assuming response contains events for the NGO

//         // Fetch volunteer data for the NGO
//         const volunteersResponse = JSON.parse(localStorage.getItem(`volunteers_${response.data.ngo._id}`)) || [];
//         setVolunteers(volunteersResponse);  // Assuming the volunteer data is stored in localStorage

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email, // Attach the NGO email to the event
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {

//     const volunteer = {
//       ...event, 
//       ngoName: ngo.ngoname,
//       phone: 'Volunteer Phone Number', // Capture the phone number from the form or state
//       address: 'Volunteer Address',    // Capture the address from the form or state
//     };
  
//     // Get the current volunteer list from localStorage or initialize an empty array
//     const volunteerList = JSON.parse(localStorage.getItem('volunteerList')) || [];
    
//     // Check if the event already exists in the volunteer list
//     const isEventAlreadyAdded = volunteerList.some(volunteerEvent => volunteerEvent.id === event.id);

//     if (isEventAlreadyAdded) {
//       // Show an alert if the event is already added
//       alert('Event already added to  volunteer list!');
//     } else {
//       // If the event is not in the list, add it
//       volunteerList.push({ ...event, ngoName: ngo.ngoname });
//       localStorage.setItem('volunteerList', JSON.stringify(volunteerList));

//       // Show success message
//       alert('Event added to your volunteer list successfully!');
//       // Optionally, navigate to the volunteer list page after adding the event
//       // navigate('/vollist');  // Uncomment if you want to navigate
//     }
//   };

//   return (
//     <div className="volunteer-profile-container">
//       <nav className="menu-bar">
//         <ul>
//           <li><a href="/ngofirst">Profile</a></li>
//           <li><a href="/vollist">Volunteer List</a></li> {/* Link to Volunteer List */}
//         </ul>
//       </nav>

//       <div className="profile-and-ngos">
//         <div className="profile-header">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>

       

//       </div>

//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>
//       <div className="volunteers-section">
//   <h2>Volunteers who have joined {ngo.ngoname}:</h2>
//   <div className="volunteers-list">
//     {volunteers.length > 0 ? (
//       volunteers.map((volunteer, index) => (
//         <div key={index} className="volunteer-card">
//           <h3>{volunteer.name}</h3>
//           <p><strong>Email:</strong> {volunteer.email}</p>
//           <p><strong>Phone:</strong> {volunteer.phonenumber}</p> {/* Display Phone Number */}
//           <p><strong>Address:</strong> {volunteer.address}</p> {/* Display Address */}
//         </div>
//       ))
//     ) : (
//       <p>No volunteers have joined yet.</p>
//     )}
//   </div>
// </div>

            
      
//     </div>
//   );
// };

// export default Ngofront;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/styling.css';

// const Ngofront = () => {
//   const [ngo, setNgo] = useState({});
//   const [events, setEvents] = useState([]);
//   const [volunteers, setVolunteers] = useState([]);
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventTime, setEventTime] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [skills, setSkills] = useState('');

//   const email = localStorage.getItem('ngoEmail');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!email) {
//       console.error('No email found in localStorage.');
//       return;
//     }

//     const fetchNgoData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:7000/api/v1/ngos/${email}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
//         });
//         setNgo(response.data.ngo);

//         const eventsResponse = await axios.get(`http://localhost:7000/api/v1/events/${email}`);
//         setEvents(eventsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchNgoData();
//   }, [email]);

//   useEffect(() => {
//     const fetchVolunteers = () => {
//       const volunteerList = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];
//       setVolunteers(volunteerList);
//     };
//     if (ngo._id) {
//       fetchVolunteers();
//     }
//   }, [ngo._id]);

//   const handleAddEvent = async () => {
//     if (eventName && eventDate && eventTime && eventLocation && eventDescription && skills) {
//       const newEvent = {
//         name: eventName,
//         date: eventDate,
//         time: eventTime,
//         location: eventLocation,
//         description: eventDescription,
//         skillsNeeded: skills,
//         ngoEmail: email,
//       };

//       try {
//         const response = await axios.post('http://localhost:7000/api/v1/events', newEvent, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
//         });
//         if (response.data.success) {
//           setEvents([...events, response.data.event]);
//           setEventName('');
//           setEventDate('');
//           setEventTime('');
//           setEventLocation('');
//           setEventDescription('');
//           setSkills('');
//         }
//       } catch (error) {
//         console.error('Error adding event:', error);
//       }
//     }
//   };

//   const handleAddToVolunteerList = (event) => {
//     const volunteerList = JSON.parse(localStorage.getItem(`volunteers_${ngo._id}`)) || [];

//     const volunteerData = {
//       name: 'Volunteer Name', // Replace with actual name if available
//       address: 'Volunteer Address', // Replace with actual address if available
//       phone: 'Volunteer Phone', // Replace with actual phone number if available
//       email: localStorage.getItem('userEmail'), // Assuming the logged-in user's email is stored in localStorage
//       eventName: event.name,
//     };

//     volunteerList.push(volunteerData);
//     localStorage.setItem(`volunteers_${ngo._id}`, JSON.stringify(volunteerList));

//     alert('You have successfully joined this event as a volunteer!');
//   };

//   return (
//     <div className="volunteer-profile-container">
//       {/* Flex container to display profile and event form side by side */}
//       <div className="profile-and-form-container">
//         {/* Profile Section */}
//         <div className="profile-section">
//           <h1>Welcome, {ngo.ngoname || 'NGO'}!</h1>
//           <p><strong>Email:</strong> {ngo.email || 'N/A'}</p>
//           <p><strong>PIN:</strong> {ngo.pin || 'N/A'}</p>
//           <p><strong>NGO Type:</strong> {ngo.selectedNgoType || 'N/A'}</p>
//           <p><strong>Address:</strong> {ngo.location || 'N/A'}</p>
//         </div>

//         {/* Event Form Section */}
//         <div className="add-event-section">
//           <h2>Add an Event</h2>
//           <form
//             className="add-event-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddEvent();
//             }}
//           >
//             <input
//               type="text"
//               placeholder="Event Name"
//               value={eventName}
//               onChange={(e) => setEventName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={eventTime}
//               onChange={(e) => setEventTime(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={eventLocation}
//               onChange={(e) => setEventLocation(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Skills Needed"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               required
//             />
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       </div>

//       {/* Event List Section */}
//       <div className="event-list-section">
//         <hr />
//         <h2 className="name">Event List</h2>
//         <div className="event-list">
//           {events.length > 0 ? (
//             <div className="card-container">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   </div>
//                   <div className="event-card-right">
//                     <button
//                       className="view-event-button"
//                       onClick={() => handleAddToVolunteerList(event)}
//                     >
//                       Add Event To Volunteer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No events added yet.</p>
//           )}
//         </div>
//       </div>

//       {/* Volunteers Section */}
//       <div className="volunteers-section">
//         <h2>Volunteers Who Have Joined</h2>
//         {volunteers.length > 0 ? (
//           <div className="volunteers-card-container">
//             {volunteers.map((volunteer, index) => (
//               <div key={index} className="volunteer-card">
//                 <h3>{volunteer.name}</h3>
//                 <p><strong>Email:</strong> {volunteer.email}</p>
//                 <p><strong>Address:</strong> {volunteer.address}</p>
//                 <p><strong>Phone:</strong> {volunteer.phone}</p>
//                 <p><strong>Event Joined:</strong> {volunteer.eventName}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No volunteers have joined yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ngofront;

