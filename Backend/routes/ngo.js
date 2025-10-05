// backend/routes/ngoRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken'); // Add this line at the top of your file

const authMiddleware = require('../middleware/authMiddleware'); // Import the middleware for JWT verification
const Ngo = require('../models/ngo.model'); // The model for the NGO

const router = express.Router();

// GET route to fetch NGOs
router.get('/getNgos', authMiddleware, async (req, res) => {
  try {
    const ngos = await Ngo.find();  // Fetch NGOs from MongoDB
    res.status(200).json({
      success: true,
      ngos,  // Send the data back as JSON
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get('/ngos/:email', authMiddleware, async (req, res) => {
  try {
    const { email } = req.params;  // Get the email from the URL parameter

    const ngo = await  Ngo.findOne({ email }).exec();  // Find the volunteer by email

    if (!ngo) {
      return res.status(404).json({ message: 'ngo not found' });
    }

    res.json({ ngo });  // Send the volunteer data as the response
  } catch (err) {
    console.error('Error fetching volunteer data:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});





module.exports = router;
