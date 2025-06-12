// require('dotenv').config({ path: 'dotenv.config.env' });  // Load .env file


// const express = require('express');
// const cookieParser = require("cookie-parser");
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const app = express();

// // Middleware and Routes setup
// app.use('/api/v1', authRoutes);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// const userRoute = require('./routes/user.route');
// const adminRoute = require('./routes/admin.route'); //
// const ngoRoutes = require('./routes/ngo'); 
// const volunteerRoutes = require('./routes/volunteerRoutes');
// app.use('/api/v1/user', userRoute);
// app.use('/api/v1/admin', adminRoute); // Admin-related routes (admin login)
// app.use('/api/v1', ngoRoutes);
// app.use('/api/v1', volunteerRoutes); 

// // Use the admin login route


// module.exports = app;
require('dotenv').config({ path: 'dotenv.config.env' });  // Load .env file

const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Import the routes for authentication
const userRoute = require('./routes/user.route');
const adminRoute = require('./routes/admin.route'); // Admin-related routes
const ngoRoutes = require('./routes/ngo');
const volunteerRoutes = require('./routes/volunteerRoutes');
const donateRoutes =require('./routes/donateRoutes')
const contactRoutes=require('./routes/contactRoutes')
const eventRoutes = require('./routes/eventRoutes');


const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());  // To parse cookies (JWT tokens)
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Allow cross-origin requests from frontend

// Routes
// Add the forgot and reset password routes to the authRoutes or directly here
const { forgotPassword, resetPassword } = require('./controllers/user.controller');






// Password reset routes
app.post('/api/v1/forgot-password', forgotPassword); // For forgot password
app.post('/api/v1/reset-password', resetPassword);   // For resetting the password

// Authentication routes (login, registration, etc.)
app.use('/api/v1', authRoutes);  // Assuming authRoutes contains registration/login logic

// User-related routes
app.use('/api/v1/user', userRoute);

// Admin-related routes (Admin login, etc.)
app.use('/api/v1/admin', adminRoute);

// NGO-related routes
app.use('/api/v1', ngoRoutes);


// Use the event routes
app.use('/api/v1', eventRoutes);



// Volunteer-related routes
app.use('/api/v1', volunteerRoutes);

app.use("/api/v1/donate", donateRoutes);  // All donation routes will be prefixed with /donate
app.use('/api/v1', contactRoutes);  // All donation routes will be prefixed with /donate

// Test route to check if the app is running
app.get('/', (req, res) => {
  res.send('API is working!');
});

module.exports = app;
