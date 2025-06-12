import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NgoDetails = () => {
  const { ngoId } = useParams();  // Get NGO ID from the URL
  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch volunteers who have joined this NGO
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get(`/api/ngo/${ngoId}/volunteers`);
        setVolunteers(response.data);
      } catch (err) {
        setError('No volunteers found or error fetching data.');
      }
    };

    fetchVolunteers();
  }, [ngoId]);

  return (
    <div className="ngo-details-page">
      <h1>Volunteer Details for NGO</h1>

      {error && <p className="error-message">{error}</p>}

      {volunteers.length > 0 ? (
        <div className="volunteers-list">
          {volunteers.map((volunteer) => (
            <div key={volunteer._id} className="volunteer-card">
              <h2>{volunteer.fullname}</h2>
              <p><strong>Email:</strong> {volunteer.email}</p>
              <p><strong>Phone:</strong> {volunteer.phonenumber}</p>
              <p><strong>Address:</strong> {volunteer.address}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No volunteers have joined this NGO yet.</p>
      )}
    </div>
  );
};

export default NgoDetails;
