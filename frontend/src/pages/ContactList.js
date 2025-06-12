import React, { useEffect, useState } from "react";
import "../styles/admin.css"; // Assuming you have some styles for the admin page

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch contact data from the backend
  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/v1/contacts"); // Backend route to fetch contacts
      const data = await response.json();

      if (response.ok) {
        setContacts(data); // Save contact data to state
        setErrorMessage(""); // Clear any previous errors
      } else {
        setErrorMessage(data.error || "Failed to fetch contacts.");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    fetchContacts(); // Fetch contacts when the component mounts
  }, []);

  return (
    <div className="contact-list-container">
      <h2>Query List</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;