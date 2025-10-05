


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


