// models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  location: String,
  description: String,
  skillsNeeded: String,
  ngoEmail: { type: String, required: true }, // Associate event with an NGO
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
