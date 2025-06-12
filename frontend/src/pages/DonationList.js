import React, { useState, useEffect } from "react";
import "../styles/donatelist.css";  // Make sure to style the list

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch donations from the backend when the component mounts
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("/api/v1/donate/donations");
        if (!response.ok) {
          throw new Error("Failed to fetch donations");
        }
        const data = await response.json();
        setDonations(data);  // Store the fetched donations in state
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDonations();  // Call the fetch function when component mounts
  }, []);

  return (
    <div className="donation-list-container">
      <h2>Donation List</h2>

      {/* Loading State */}
      {loading && <p>Loading donations...</p>}

      {/* Error State */}
      {error && <p className="error">{error}</p>}

      {/* Donation List */}
      {!loading && !error && donations.length === 0 && (
        <p>No donations found.</p>
      )}

      {!loading && !error && donations.length > 0 && (
        <table className="donation-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td>{donation.name}</td>
                <td>{donation.email}</td>
                <td>{donation.amount}</td>
                <td>{donation.message || "No message"}</td>
                <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonationList;