const express = require('express');
const authMiddleware = require('../middleware/authMiddleware'); // Import the middleware for JWT verification
const Volunteer = require('../models/volunteer.model'); // The model for the Volunteer

const router = express.Router();

// GET route to fetch volunteers
router.get('/getVolunteers', authMiddleware, async (req, res) => {
  try {
    const volunteers = await Volunteer.find();  // Fetch volunteers from MongoDB
    res.status(200).json({
      success: true,
      volunteers,  // Send the data back as JSON
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,  // Send the error message back
    });
  }
});

router.get('/volunteers/:email', authMiddleware, async (req, res) => {
  try {
    const { email } = req.params;  // Get the email from the URL parameter

    const volunteer = await Volunteer.findOne({ email }).exec();  // Find the volunteer by email

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    res.json({ volunteer });  // Send the volunteer data as the response
  } catch (err) {
    console.error('Error fetching volunteer data:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Get volunteers for a specific NGO
router.get('/volunteers/:ngoId', async (req, res) => {
  try {
    // Assuming you have an association between the NGO and volunteer
    const volunteers = await Volunteer.find({ ngoId: req.params.ngoId });
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching volunteers' });
  }
});

module.exports = router;
