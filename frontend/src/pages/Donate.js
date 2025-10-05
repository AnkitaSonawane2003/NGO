

import React, { useState, useEffect } from "react";
import "../styles/donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
    selectedNgo: "", // Selected NGO name
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [ngoNames, setNgoNames] = useState([]); // List of NGO names from backend

  // Fetch NGO names from the backend
  useEffect(() => {
    const fetchNgoNames = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/v1/user/getNgoNames"); // Replace with your backend endpoint
        const data = await response.json();
        setNgoNames(data); // Assuming the response contains an array of NGO names
      } catch (error) {
        console.error("Error fetching NGO names:", error);
      }
    };

    fetchNgoNames();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Donation submitted successfully!");
        setFormData({ name: "", email: "", amount: "", message: "", selectedNgo: "" });
      } else {
        setResponseMessage(data.error || "Failed to submit donation.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="show">
      <div className="contact-us-container">
        <h2>Why To Donate?</h2>
        <h4>
          "Every little bit helps, and your kindness can make a world of
          difference. By donating, you support those in need and contribute to
          causes that bring hope and change. Your generosity can help provide
          essential resources and uplift communities, creating a brighter
          future for many. Together, we can make a lasting impact—thank you for
          considering a donation."
        </h4>
        <h2>Want to Donate?</h2>
        <p>
          "Become a part of something greater! Fill out the form to donate and
          help us make a difference."
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Enter Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <label>Select NGO</label>
          <select
            name="ngonames"
            value={formData.ngonames}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select NGO Type</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Environment">Environment</option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Women Empowerment">Women Empowerment</option>
                <option value="Child Welfare">Child Welfare</option>
                 <option value="Disaster Relief">Disaster Relief</option>
                 <option value="Poverty Alleviation">Poverty Alleviation</option>
                 <option value="Others">Others</option>
            
            {ngoNames.length > 0 ? (
              ngoNames.map((ngo, index) => (
                <option key={index} value={ngo}>
                  {ngo}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No NGOs available
              </option>
            )}
          </select>

          <button type="submit">Submit</button>
        </form>

        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Donate;