
const express = require('express');
const { VolRegister, volLogin, NgoRegister, NgoLogin, AdminLogin, getAllNgos, getAllVolunteers, getVolunteerByEmail, getNgoByEmail } = require('../controllers/user.controller'); // Ensure NgoLogin is imported

const router = express.Router();

// Volunteer's registration and login routes
router.route('/volRegister').post(VolRegister); // Volunteer's registration
router.route('/volLogin').post(volLogin); // Volunteer's login

// NGO registration and login routes
router.route('/registerNgo').post(NgoRegister); // NGO registration
router.route('/NgoLogin').post(NgoLogin); // NGO login (should use NgoLogin controller)

router.route('/login').post(AdminLogin);
router.route('/getNgos').get(getAllNgos);
router.route('/getVolunteers').get(getAllVolunteers);

router.route('/volunteers/:email').get(getVolunteerByEmail);
router.route('/ngos/:email').get(getNgoByEmail);



module.exports = router;
