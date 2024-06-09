import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProject from './components/AddProject';
import YourProjects from './components/YourProjects';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="text-center bg-custom-black-2 min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat font-roboto text-black">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-project" element={isLoggedIn ? <AddProject /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<AddProject />} />
          <Route path="/your-projects" element={<YourProjects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
