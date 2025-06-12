const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Contact Schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create Contact model
const Contact = mongoose.model("Contact", contactSchema);

// Route to handle form submission
router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save data to the database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Your message has been received!" });
  } catch (error) {
    console.error("Error saving contact form data:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
});
// Route to fetch all contacts
router.get("/contacts", async (req, res) => {
    try {
      const contacts = await Contact.find(); // Fetch all documents from the collection
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Internal server error. Please try again later." });
    }
  });

module.exports = router;