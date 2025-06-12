import React ,{useState} from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './pages/Home';
import About from './pages/About'; 
import Donate from './pages/Donate';
import Loginngo from './pages/Loginngo';
import Contact from './pages/Contact'; 
import Registerngo from './pages/Registerngo'
import Registervol from './pages/Registervol'
import Loginvol from './pages/Loginvol';
import Loginadmin from './pages/Loginadmin';
import ForgotPassword from './pages/FogotPassword';
import ResetPassword from './pages/ResetPassword';
import Ngofront from './pages/Ngofront';
import Adminfront from './pages/Adminfront';
import ContactList from './pages/ContactList';
import DonationList from './pages/DonationList'
import AllEvents from './pages/AllEvents'
import VolunteerList from './pages/VolunteerList'
import { AuthProvider } from './pages/AuthContext'; 
import All from './pages/All'
import Logout from './pages/Logout';

import Volunteerfront from './pages/Volunteerfront';

import Body from './pages/Body';

// import  Index  from './pages/Index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const[theme,setTheme]=useState('light');
  return (
    <div className={`container ${theme}`}>
       <AuthProvider>
      <Router>
      <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/option1" element={<Loginngo />} />
        <Route path="/option2" element={<Loginvol />} />
        <Route path="/option3" element={<Loginadmin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clist" element={<ContactList />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/all" element={<All />} />
        <Route path="/dlist" element={<DonationList />} />
        <Route path="/elist" element={<AllEvents />} />
        <Route path="/vollist/:ngoId" element={<VolunteerList />} />
        <Route path="/register" element={<Registerngo />} />
        <Route path="/registervol" element={<Registervol />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/ngofirst" element={<Ngofront />} />
        <Route path="/volfirst" element={<Volunteerfront />} />
        <Route path="/adminfirst" element={<Adminfront />} />
        <Route path="/Logout" element={<Logout />} />
        {/* <Route path="/reg" element={<Index />} /> */}
        </Routes>
      </div>
    </Router>
    </AuthProvider>
    <Body/>
    
    </div>
  );
}

export default App;