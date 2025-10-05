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
