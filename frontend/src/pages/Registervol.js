import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/reg.css";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationOn, MdCalendarToday, MdWc } from "react-icons/md";
import Log from "../assets/vol.avif";
// import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Registervol = () => {
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const volRegister = {
      fullname,
      dob,
      gender,
      address,
      phonenumber,
      email,
      password,
    };
    axios
      .post("http://localhost:7000/api/v1/user/volRegister", volRegister)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate('/option2');

  };

  return (
    <div>
      <div className="form-box">
        <div className="wrapper" style={{ backgroundImage: `url(${Log})` }}>
          <form onSubmit={HandleSubmit}>
            <h1>Volunteer Registration</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Fullname"
                name="name"
                required
                onChange={(e) => setFullname(e.target.value)}
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select DOB"
                className="date-picker-input"
              />
              <MdCalendarToday className="icon" />
            </div>

            <div className="input-box">
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <MdWc className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Address"
                name="address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <MdLocationOn className="icon" />
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                required
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <FaPhone className="icon" />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the terms and conditions
              </label>
            </div>

            <div>
              {/* <Link to="/option2">
              </Link> */}
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registervol;
