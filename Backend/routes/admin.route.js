// routes/admin.route.js
const express = require('express');
const { AdminLogin } = require('../controllers/user.controller');  // Import AdminLogin controller

const router = express.Router();

// Admin login route
router.route('/adminLogin').post(AdminLogin);

module.exports = router;
