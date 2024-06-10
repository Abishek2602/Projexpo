import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="nav-div">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link group"><span>Home</span><span className="line-effect"></span></Link>
        <Link to="/contact" className="nav-link group"><span>Contact</span><span className="line-effect"></span></Link>
        {!isLoggedIn && <Link to="/login" className="nav-link group"><span>Login</span><span className="line-effect"></span></Link>}
        {!isLoggedIn && <Link to="/register" className="nav-link group"><span>Register</span><span className="line-effect"></span></Link>}
        {isLoggedIn && <Link to="/add-project" className="nav-link group"><span>Add Project</span><span className="line-effect"></span></Link>}
        {isLoggedIn && <button onClick={handleLogout} className="nav-link group">Logout</button>}
        <a href="/" className="get-started-btn group">
          <span className="get-started-bg"></span>
          <span className="get-started-top-left"></span>
          <span className="get-started-bottom-left"></span>
          <span className="get-started-left"></span>
          <span className="get-started-right"></span>
          <span className="get-started-border"></span>
          <span className="get-started-effect"></span>
          <span className="relative">Get Started</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
