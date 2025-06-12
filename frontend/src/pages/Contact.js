import React, { useState } from "react";
import "../styles/contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "donation", // Default subject value
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been submitted successfully!");
        setFormData({ name: "", email: "", subject: "donation", message: "" }); // Reset form
      } else {
        setResponseMessage(data.error || "Failed to submit your message.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="show">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need help? Fill out the form below or reach out to us
          directly, and we’ll be in touch soon!
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

          <label>Subject</label>
          <select name="subject" value={formData.subject} onChange={handleChange}>
            <option value="donation">Donation Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="general">General Question</option>
          </select>

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {responseMessage && <p className="response-message">{responseMessage}</p>}

        <div className="contact-info">
          <p>Email: ngoconnector@gmail.com</p>
          <p>Phone: 1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;