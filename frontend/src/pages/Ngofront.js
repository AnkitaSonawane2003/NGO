
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


