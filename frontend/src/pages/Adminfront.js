

import React, { useState, useEffect } from 'react';
import '../styles/ngo.css';
import axios from 'axios';

const Adminfront = () => {
  const [ngos, setNgos] = useState([]);  
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const [addedNgos, setAddedNgos] = useState([]);  

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');  

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

    
      const volunteerResponse = await axios.get('http://localhost:7000/api/v1/getVolunteers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

 
      setNgos(ngoResponse.data.ngos);
      setVolunteers(volunteerResponse.data.volunteers);

      // Fetch already added NGOs from localStorage
      const savedNgos = JSON.parse(localStorage.getItem('addedNgos')) || [];
      setAddedNgos(savedNgos);

      setLoading(false);  
    } catch (err) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

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

