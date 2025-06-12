// import React, { useState, useEffect } from 'react';

// const Elist = () => {
//   const [volunteerEvents, setVolunteerEvents] = useState([]);

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem('volunteerList')) || [];
//     setVolunteerEvents(storedEvents);
//   }, []);

//   return (
//     <div className="volunteer-events-container">
//       <h1>Volunteer Events</h1>
//       <div className="event-list">
//         {volunteerEvents.length > 0 ? (
//           <div className="card-container">
//             {volunteerEvents.map((event, index) => (
//               <div key={index} className="event-card">
//                 <div className="event-card-left">
//                   <h3>{event.name}</h3>
//                   <p><strong>NGO:</strong> {event.ngoName}</p>
//                   <p><strong>Date:</strong> {event.date}</p>
//                   <p><strong>Time:</strong> {event.time}</p>
//                   <p><strong>Location:</strong> {event.location}</p>
//                   <p><strong>Description:</strong> {event.description}</p>
//                   <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No events added to volunteer list.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Elist;
// import React, { useState, useEffect } from 'react';

// const Elist = () => {
//   const [volunteerEvents, setVolunteerEvents] = useState([]);

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem('volunteerList')) || [];
    
//     // Filter out duplicates based on event name
//     const uniqueEvents = storedEvents.filter((event, index, self) =>
//       index === self.findIndex((e) => (
//         e.name === event.name // Check uniqueness based on event name
//       ))
//     );

//     setVolunteerEvents(uniqueEvents); // Set unique events to state
//   }, []); 

//   return (
//     <div className="volunteer-events-container">
//       <h1>Volunteer Events</h1>
//       <div className="event-list">
//         {volunteerEvents.length > 0 ? (
//           <div className="card-container">
//             {volunteerEvents.map((event, index) => (
//               <div key={index} className="event-card">
//                 <div className="event-card-left">
//                   <h3>{event.name}</h3>
//                   <p><strong>NGO:</strong> {event.ngoName}</p>
//                   <p><strong>Date:</strong> {event.date}</p>
//                   <p><strong>Time:</strong> {event.time}</p>
//                   <p><strong>Location:</strong> {event.location}</p>
//                   <p><strong>Description:</strong> {event.description}</p>
//                   <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No events added to volunteer list.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Elist;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigating after adding event
// // Import localStorage to get the list of joined NGOs from Volunteerfront
// const Elist = () => {
//   const [volunteerEvents, setVolunteerEvents] = useState([]);
//   const [joinedNgos, setJoinedNgos] = useState([]); // State to track the joined NGOs
//   const email = localStorage.getItem('volunteerEmail'); // Get email from localStorage
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem('volunteerList')) || [];
    
//     // Filter out duplicates based on event name
//     const uniqueEvents = storedEvents.filter((event, index, self) =>
//       index === self.findIndex((e) => e.name === event.name) // Ensure uniqueness by event name
//     );

//     setVolunteerEvents(uniqueEvents); // Set unique events to state

//     // Fetch the joined NGOs from localStorage
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setJoinedNgos(savedJoinedNgos);

//   }, [email]); 

//   // Handle adding an event to the volunteer's event list
//   const handleAddEventToVolunteerList = (event) => {
//     // Check if the volunteer has joined the NGO for this event
//     const isJoined = joinedNgos.some((ngo) => ngo.ngoname === event.ngoName);

//     if (!isJoined) {
//       alert('You need to join the NGO first before you can volunteer for their event.');
//       return; // Exit the function if the NGO is not joined
//     }

//     // If NGO is joined, proceed to add the event to the volunteer list
//     const volunteerList = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
    
//     // Ensure we are not adding the same event again
//     if (!volunteerList.some(ev => ev.id === event.id)) {
//       volunteerList.push({ ...event, volunteerEmail: email });
//       localStorage.setItem(`volunteerList_${email}`, JSON.stringify(volunteerList));

//       alert('Event successfully added to your volunteer list!');
//       navigate('/elist'); // Navigate back to event list page after adding
//     } else {
//       alert('You have already added this event to your list.');
//     }
//   };

//   return (
//     <div className="volunteer-events-container">
//       <h1>Volunteer Events</h1>
//       <div className="event-list">
//         {volunteerEvents.length > 0 ? (
//           <div className="card-container">
//             {volunteerEvents.map((event, index) => {
//               // Check if the volunteer has joined the NGO for this event
//               const isJoined = joinedNgos.some((ngo) => ngo.ngoname === event.ngoName);

//               return (
//                 <div key={index} className="event-card">
//                   <div className="event-card-left">
//                     <h3>{event.name}</h3>
//                     <p><strong>NGO:</strong> {event.ngoName}</p>
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Time:</strong> {event.time}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Description:</strong> {event.description}</p>
//                     <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
                    
//                     {/* Only show the button if the volunteer has joined the NGO for this event */}
//                     {isJoined && (
//                       <button onClick={() => handleAddEventToVolunteerList(event)}>
//                         Add to My Volunteer List
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p>No events added to volunteer list.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Elist;
// import React, { useState, useEffect } from 'react';
// import '../styles/elist.css';

// const Elist = () => {
//   const [volunteerEvents, setVolunteerEvents] = useState([]);
//   const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
//   const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem('volunteerList')) || [];
    
//     // Filter out duplicates based on event name
//     const uniqueEvents = storedEvents.filter((event, index, self) =>
//       index === self.findIndex((e) => (
//         e.name === event.name // Check uniqueness based on event name
//       ))
//     );

//     setVolunteerEvents(uniqueEvents); // Set unique events to state

//     // Fetch the list of NGOs the volunteer has joined from localStorage
//     const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
//     setNgos(savedJoinedNgos); // Set the list of joined NGOs
//   }, [email]);  // Runs when email changes (reloads page)

//   const handleAddEventToVolunteerList = (event) => {
//     // Check if the volunteer has joined the NGO for this event
//     const isJoined = ngos.some((ngo) => ngo.ngoname === event.ngoName);

//     if (!isJoined) {
//       alert('You need to join the NGO first before you can volunteer for their event.');
//       return;  // Exit the function if the NGO is not joined
//     }

//     // Add the event to the volunteer list if it's not already added
//     const volunteerList = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
    
//     // Ensure event is not already in the volunteer list
//     if (!volunteerList.some((ev) => ev.id === event.id)) {
//       volunteerList.push({ ...event, volunteerEmail: email });
//       localStorage.setItem(`volunteerList_${email}`, JSON.stringify(volunteerList));
//       alert('Event successfully added to your volunteer list!');
//     } else {
//       alert('This event is already added to your list.');
//     }
//   };

//   return (
//     <div className="volunteer-events-container">
//       <h1>Volunteer Events</h1>
//       <div className="event-list">
//         {volunteerEvents.length > 0 ? (
//           <div className="card-container">
//             {volunteerEvents.map((event, index) => (
//               <div key={index} className="event-card">
//                 <div className="event-card-left">
//                   <h3>{event.name}</h3>
//                   <p><strong>NGO:</strong> {event.ngoName}</p>
//                   <p><strong>Date:</strong> {event.date}</p>
//                   <p><strong>Time:</strong> {event.time}</p>
//                   <p><strong>Location:</strong> {event.location}</p>
//                   <p><strong>Description:</strong> {event.description}</p>
//                   <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
//                   <button onClick={() => handleAddEventToVolunteerList(event)}>
//                     Add to My Volunteer List
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No events added to volunteer list.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Elist;
import React, { useState, useEffect } from 'react';
import '../styles/elist.css';

const Elist = () => {
  const [volunteerEvents, setVolunteerEvents] = useState([]);
  const [ngos, setNgos] = useState([]);  // List of NGOs the volunteer has joined
  const email = localStorage.getItem('volunteerEmail');  // Get email from localStorage
  const [addedEvents, setAddedEvents] = useState([]);  // Track the events that have been added

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('volunteerList')) || [];
    
    // Filter out duplicates based on event name
    const uniqueEvents = storedEvents.filter((event, index, self) =>
      index === self.findIndex((e) => (
        e.name === event.name // Check uniqueness based on event name
      ))
    );

    setVolunteerEvents(uniqueEvents); // Set unique events to state

    // Fetch the list of NGOs the volunteer has joined from localStorage
    const savedJoinedNgos = JSON.parse(localStorage.getItem(`joinedNgos_${email}`)) || [];
    setNgos(savedJoinedNgos); // Set the list of joined NGOs

    // Load the list of events the volunteer has already added to their list
    const volunteerList = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
    const addedEventIds = volunteerList.map(event => event.name); // Extract event names
    setAddedEvents(addedEventIds);  // Update added events state
  }, [email]);  // Runs when email changes (reloads page)

  const handleAddEventToVolunteerList = (event) => {
    // Check if the volunteer has joined the NGO for this event
    const isJoined = ngos.some((ngo) => ngo.ngoname === event.ngoName);
  
    if (!isJoined) {
      alert('You need to join the NGO first before you can volunteer for their event.');
      return;
    }
  
    // Get the current volunteer list from localStorage (for the specific volunteer)
    const volunteerList = JSON.parse(localStorage.getItem(`volunteerList_${email}`)) || [];
  
    // Ensure event is not already in the volunteer list (check by event id and volunteer email)
    const isEventAlreadyAdded = volunteerList.some((ev) => ev.id === event.id && ev.volunteerEmail === email);
  
    if (isEventAlreadyAdded) {
      alert('This event is already added to your list.');
      return;
    }
  
    // If not already in the list, add it to the volunteer list
    volunteerList.push({ ...event, volunteerEmail: email });
  
    // Update the localStorage with the new volunteer list
    localStorage.setItem(`volunteerList_${email}`, JSON.stringify(volunteerList));
  
    // Update addedEvents state to reflect the newly added event
    setAddedEvents((prevAddedEvents) => [...prevAddedEvents, event.id]);
  
    alert('Event successfully added to your volunteer list!');
  };
  
  return (
    <div className="volunteer-events-container">
      <h1>Volunteer Events</h1>
      <div className="event-list">
        {volunteerEvents.length > 0 ? (
          <div className="card-container">
            {volunteerEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-card-left">
                  <h3>{event.name}</h3>
                  <p><strong>NGO:</strong> {event.ngoName}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Skills Needed:</strong> {event.skillsNeeded}</p>
                  
                  <button 
                    onClick={() => handleAddEventToVolunteerList(event)}
                    disabled={addedEvents.includes(event.name)} // Disable button if event is already added
                  >
                    Add to My Volunteer List
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No events added to volunteer list.</p>
        )}
      </div>
    </div>
  );
};

export default Elist;
