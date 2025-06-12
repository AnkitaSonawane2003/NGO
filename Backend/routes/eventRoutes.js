// routes/eventRoutes.js

const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Route to add an event
router.post('/events', async (req, res) => {
  const { name, date, time, location, description, skillsNeeded, ngoEmail } = req.body;

  try {
    const newEvent = new Event({ name, date, time, location, description, skillsNeeded, ngoEmail });
    await newEvent.save();
    res.status(201).json({ success: true, event: newEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// Route to get events for a specific NGO
router.get('/events/:ngoEmail', async (req, res) => {
  const { ngoEmail } = req.params;

  try {
    const events = await Event.find({ ngoEmail });
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});


// Route to get events based on NGO IDs
router.get('/', async (req, res) => {
  try {
    // Get the NGO IDs from the query parameter (comma-separated string)
    const { ngoEmails } = req.query;
    if (!ngoEmails) {
      return res.status(400).json({ message: 'No NGO IDs provided' });
    }

    // Split the NGO IDs and convert to an array
    const ngoEmailArray = ngoEmails.split(',');

    // Query the Event collection for events associated with the provided NGO IDs
    const events = await Event.find({ ngoId: { $in: ngoEmailArray } });

    // Return the events as JSON response
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
module.exports = router;
