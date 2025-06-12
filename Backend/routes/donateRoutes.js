const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Donation Schema
const donationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ }, // Email format validation
    amount: { type: Number, required: true },
    message: { type: String, maxlength: 500 }, // Optional message with max length
    ngonames: { type: String, required: true }, // Added field for selected NGO name
  },
  { timestamps: true } // Timestamps to track created and updated times
);

// Create Donation model
const Donation = mongoose.model("Donation", donationSchema);

// NGO Schema (for fetching NGOs)
const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // NGO names
});

// Avoid OverwriteModelError by checking for existing model
const NgoModel = mongoose.models.Ngo || mongoose.model("Ngo", ngoSchema);

// Route to save donation
router.post("/", async (req, res) => {
  try {
    const { name, email, amount, message ,ngonames} = req.body;

    if (!name || !email || !amount || !ngonames) {
      return res.status(400).json({
        error: "Name, email, amount, and NGO name are required."
      });
    }

    if (amount <= 0) {
      return res.status(400).json({
        error: "Amount must be a positive number."
      });
    }

    const donation = new Donation({
      name,
      email,
      amount,
      message,
      ngonames, // Save the selected NGO name
    });

    await donation.save();

    return res.status(201).json({
      message: "Donation saved successfully!",
      donation: donation,
    });
  } catch (error) {
    console.error("Error saving donation:", error);
    return res.status(500).json({
      error: `Internal server error: ${error.message || error}`
    });
  }
});

// Route to fetch all donations
router.get("/donations", async (req, res) => {
  try {
    const { name, email, minAmount, maxAmount, startDate, endDate ,ngonames} = req.query;
    let query = {};

    if (name) query.name = new RegExp(name, "i"); // Case-insensitive search
    if (email) query.email = email;
    if (minAmount) query.amount = { $gte: Number(minAmount) };
    if (maxAmount) query.amount = { $lte: Number(maxAmount) };
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
      if (ngonames) query.ngonames = ngonames;
    }

    const donations = await Donation.find(query); // Fetch donations based on filters
    res.status(200).json(donations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    return res.status(500).json({
      error: `Internal server error: ${error.message || error}`
    });
  }
});
// Route to fetch all NGO names
router.get("/ngonames", async (req, res) => {
  try {
    const ngos = await NgoModel.find({}, 'name'); // Fetch NGO names
    res.json(ngos.map(ngo => ngo.name)); // Send only the NGO names as a list
  } catch (error) {
    console.error('Error fetching NGO names:', error);
    res.status(500).json({ error: 'Failed to fetch NGO names' });
  }
});


// Export the router correctly
module.exports = router;
