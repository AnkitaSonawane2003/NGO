// const bcrypt = require("bcryptjs");
// const { sendPasswordResetEmail  } = require('../services/emailServices');  // Import email service
// const Admin = require('../models/admin.model');
// const Volunteer = require("../models/volunteer.model");
// const Ngo = require("../models/ngo.model");
// const User = require('../models/user');
// const crypto = require('crypto');

// const jwt = require('jsonwebtoken');  // Import jwt
// require('dotenv').config();


// // exports.VolRegister = async (req, res) => {
// //   try {
// //     const { fullname, dob, gender, address, phonenumber, email, password } = req.body;

// //     // Check if the volunteer already exists
// //     let user = await Volunteer.findOne({ email });
// //     if (user) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "User Already Exists !",
// //       });
// //     }

// //     // Hash password before saving
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Save the volunteer
// //     await Volunteer.create({
// //       fullname,
// //       dob,
// //       gender,
// //       address,
// //       phonenumber,
// //       email,
// //       password: hashedPassword,
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Volunteer Registered Successfully",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({
// //       success: false,
// //       message: err.message,
// //     });
// //   }
// // };
// exports.VolRegister = async (req, res) => {
//   try {
//     const { fullname, dob, gender, address, phonenumber, email, password } = req.body;

//     // Check if all required fields are provided
//     if (!fullname || !dob || !gender || !address || !phonenumber || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Check if the volunteer already exists
//     let user = await Volunteer.findOne({ email });
//     if (user) {
//       if (!res.headersSent) {
//         return res.status(400).json({
//           success: false,
//           message: "User Already Exists!",
//         });
//       }
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the volunteer
//     const newVolunteer = new Volunteer({
//       fullname,
//       dob,
//       gender,
//       address,
//       phonenumber,
//       email,
//       password: hashedPassword,
//     });

//     await newVolunteer.save();

//     if (!res.headersSent) {
//       return res.status(201).json({
//         success: true,
//         message: "Volunteer Registered Successfully",
//       });
//     }
//   } catch (err) {
//     console.log('Error:', err);
//     if (!res.headersSent) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   }
// };
// exports.volLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find volunteer by email
//     const user = await Volunteer.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "User is not Registered !",
//       });
//     }

//     // Check if password matches
//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Incorrect Password",
//       });
//     }

//     // Generate a token for the user
//     const token = await user.generateToken();

//     res.status(200).cookie("token", token, { httpOnly: true, expires: new Date(Date.now() + 3600000) }).json({
//       success: true,
//       user,
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };


// // exports.NgoRegister = async (req, res) => {
// //   try {
// //     const { ngoname, location, selectedNgoType, pin, email, password } = req.body;
// //     const fileName = req.file ? req.file.filename : "Default string"; // Handle file upload
// //     const ngo=await Ngo.find({}).sort({createdAt:-1})
// //     res.status(400).json(ngo)

// //     // Check if NGO already exists
// //     let user = await Ngo.findOne({ email });
// //     if (user) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "NGO Already Exists !",
// //       });
// //     }

// //     // Hash password before saving
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Save the NGO
// //     await Ngo.create({
// //       ngoname,
// //       location,
// //       selectedNgoType,
// //       fileName,
// //       pin,
// //       email,
// //       password: hashedPassword,
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "NGO Registered Successfully",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({
// //       success: false,
// //       message: err.message,
// //     });
// //   }
// // };
// exports.NgoRegister = async (req, res) => {
//   try {
//     const { ngoname, location, selectedNgoType, pin, email, password } = req.body;
//     const fileName = req.file ? req.file.filename : "default_image.jpg"; // Default file name if no file is uploaded

//     // Check if all required fields are provided
//     if (!ngoname || !location || !selectedNgoType || !pin || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Check if the NGO already exists
//     let ngo = await Ngo.findOne({ email });
//     if (ngo) {
//       if (!res.headersSent) {
//         return res.status(400).json({
//           success: false,
//           message: "NGO Already Exists!",
//         });
//       }
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the NGO
//     const newNgo = new Ngo({
//       ngoname,
//       location,
//       selectedNgoType,
//       fileName,
//       pin,
//       email,
//       password: hashedPassword,
//     });

//     await newNgo.save();

//     if (!res.headersSent) {
//       return res.status(201).json({
//         success: true,
//         message: "NGO Registered Successfully",
//       });
//     }
//   } catch (err) {
//     console.log('Error:', err);
//     if (!res.headersSent) {
//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   }
// };
// // NGO Login
// exports.NgoLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find NGO by email
//     const ngo = await Ngo.findOne({ email }).select("+password");
//     if (!ngo) {
//       return res.status(400).json({ success: false, message: "NGO not found" });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, ngo.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: "Incorrect password" });
//     }

//     // Generate a token for the NGO
//     const token = await ngo.generateToken();

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // Admin login handler
// exports.AdminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the admin by email
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     // Check if the password matches (using the method defined in admin.model.js)
//     const isMatch = admin.matchPassword(password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     // Generate a JWT token for the admin
//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Send the token in the response
//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };
// exports.getAllNgos = async (req, res) => {
//   try {
//     const ngos = await Ngo.find();  // Fetch all NGOs from the database
//     res.status(200).json({
//       success: true,
//       ngos,  // Send the NGO data to the frontend
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Error fetching NGOs",
//     });
//   }
// };
// exports.getAllVolunteers = async (req, res) => {
//   try {
//     // Fetch all volunteers from the database
//     const volunteers = await Volunteer.find();

//     // Send the volunteer data to the frontend
//     res.status(200).json({
//       success: true,
//       volunteers,  // Return the list of volunteers
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching volunteers',
//     });
//   }
// };
// // Function for password reset
// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ success: false, message: 'User not found' });
//     }

//     // Generate a password reset token
//     const resetToken = crypto.randomBytes(32).toString('hex');
//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
//     await user.save();

//     // Send the reset password email
//     const emailResponse = await sendPasswordResetEmail(email, resetToken);

//     if (emailResponse.accepted.length > 0) {
//       return res.status(200).json({
//         success: true,
//         message: 'Password reset link sent to your email',
//       });
//     } else {
//       return res.status(500).json({
//         success: false,
//         message: 'Error sending email. Please try again later.',
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };
// exports.resetPassword = async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     const user = await User.findOne({
//       resetPasswordToken: token,
//       resetPasswordExpires: { $gt: Date.now() },
//     });

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid or expired token',
//       });
//     }

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//     await user.save();

//     res.status(200).json({
//       success: true,
//       message: 'Password reset successful',
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

// exports.logout = async (req,res) => {

// }

// exports.getVolunteerByEmail = async (req, res) => {
//   try {
//       const { email } = req.params; 
//       const volunteer = await Volunteer.findOne({ email }); 
//       if (!volunteer) {
//           return res.status(404).json({ success: false, message: "Volunteer not found" });
//       }
//       res.status(200).json(volunteer);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ success: false, message: err.message });
//   }
// };

// exports.getNgoByEmail = async (req, res) => {
//   try {
//       const { email } = req.params; 
//       const ngo = await Ngo.findOne({ email }); 
//       if (!ngo) {
//           return res.status(404).json({ success: false, message: "ngo not found" });
//       }
//       res.status(200).json(ngo);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ success: false, message: err.message });
//   }
// };
const bcrypt = require("bcryptjs");
const { sendPasswordResetEmail  } = require('../services/emailServices');  // Import email service
const Admin = require('../models/admin.model');
const Volunteer = require("../models/volunteer.model");
const Ngo = require("../models/ngo.model");
const User = require('../models/user');
const crypto = require('crypto');

const jwt = require('jsonwebtoken');  // Import jwt
require('dotenv').config();


// exports.VolRegister = async (req, res) => {
//   try {
//     const { fullname, dob, gender, address, phonenumber, email, password } = req.body;

//     // Check if the volunteer already exists
//     let user = await Volunteer.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         success: false,
//         message: "User Already Exists !",
//       });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the volunteer
//     await Volunteer.create({
//       fullname,
//       dob,
//       gender,
//       address,
//       phonenumber,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Volunteer Registered Successfully",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
exports.VolRegister = async (req, res) => {
  try {
    const { fullname, dob, gender, address, phonenumber, email, password } = req.body;

    // Check if all required fields are provided
    if (!fullname || !dob || !gender || !address || !phonenumber || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the volunteer already exists
    let user = await Volunteer.findOne({ email });
    if (user) {
      if (!res.headersSent) {
        return res.status(400).json({
          success: false,
          message: "User Already Exists!",
        });
      }
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the volunteer
    const newVolunteer = new Volunteer({
      fullname,
      dob,
      gender,
      address,
      phonenumber,
      email,
      password: hashedPassword,
    });

    await newVolunteer.save();

    if (!res.headersSent) {
      return res.status(201).json({
        success: true,
        message: "Volunteer Registered Successfully",
      });
    }
  } catch (err) {
    console.log('Error:', err);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
};
exports.volLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find volunteer by email
    const user = await Volunteer.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User is not Registered !",
      });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // Generate a token for the user
    const token = await user.generateToken();

    res.status(200).cookie("token", token, { httpOnly: true, expires: new Date(Date.now() + 3600000) }).json({
      success: true,
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


// exports.NgoRegister = async (req, res) => {
//   try {
//     const { ngoname, location, selectedNgoType, pin, email, password } = req.body;
//     const fileName = req.file ? req.file.filename : "Default string"; // Handle file upload
//     const ngo=await Ngo.find({}).sort({createdAt:-1})
//     res.status(400).json(ngo)

//     // Check if NGO already exists
//     let user = await Ngo.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         success: false,
//         message: "NGO Already Exists !",
//       });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the NGO
//     await Ngo.create({
//       ngoname,
//       location,
//       selectedNgoType,
//       fileName,
//       pin,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       success: true,
//       message: "NGO Registered Successfully",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
exports.NgoRegister = async (req, res) => {
  try {
    const { ngoname, location, selectedNgoType, pin, email, password } = req.body;
    const fileName = req.file ? req.file.filename : "default_image.jpg"; // Default file name if no file is uploaded

    // Check if all required fields are provided
    if (!ngoname || !location || !selectedNgoType || !pin || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the NGO already exists
    let ngo = await Ngo.findOne({ email });
    if (ngo) {
      if (!res.headersSent) {
        return res.status(400).json({
          success: false,
          message: "NGO Already Exists!",
        });
      }
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the NGO
    const newNgo = new Ngo({
      ngoname,
      location,
      selectedNgoType,
      fileName,
      pin,
      email,
      password: hashedPassword,
    });

    await newNgo.save();

    if (!res.headersSent) {
      return res.status(201).json({
        success: true,
        message: "NGO Registered Successfully",
      });
    }
  } catch (err) {
    console.log('Error:', err);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
};
// NGO Login
exports.NgoLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find NGO by email
    const ngo = await Ngo.findOne({ email }).select("+password");
    if (!ngo) {
      return res.status(400).json({ success: false, message: "NGO not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, ngo.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Incorrect password" });
    }

    // Generate a token for the NGO
    const token = await ngo.generateToken();

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Admin login handler
exports.AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if the password matches (using the method defined in admin.model.js)
    const isMatch = admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate a JWT token for the admin
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
exports.getAllNgos = async (req, res) => {
  try {
    const ngos = await Ngo.find();  // Fetch all NGOs from the database
    res.status(200).json({
      success: true,
      ngos,  // Send the NGO data to the frontend
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error fetching NGOs",
    });
  }
};
exports.getAllVolunteers = async (req, res) => {
  try {
    // Fetch all volunteers from the database
    const volunteers = await Volunteer.find();

    // Send the volunteer data to the frontend
    res.status(200).json({
      success: true,
      volunteers,  // Return the list of volunteers
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Error fetching volunteers',
    });
  }
};
// Function for password reset
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Generate a password reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    // Send the reset password email
    const emailResponse = await sendPasswordResetEmail(email, resetToken);

    if (emailResponse.accepted.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Password reset link sent to your email',
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Error sending email. Please try again later.',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password reset successful',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.logout = async (req,res) => {

}

exports.getVolunteerByEmail = async (req, res) => {
  try {
      const { email } = req.params; 
      const volunteer = await Volunteer.findOne({ email }); 
      if (!volunteer) {
          return res.status(404).json({ success: false, message: "Volunteer not found" });
      }
      res.status(200).json(volunteer);
  } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: err.message });
  }
};

exports.getNgoByEmail = async (req, res) => {
  try {
      const { email } = req.params; 
      const ngo = await Ngo.findOne({ email }); 
      if (!ngo) {
          return res.status(404).json({ success: false, message: "ngo not found" });
      }
      res.status(200).json(ngo);
  } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: err.message });
  }
};

