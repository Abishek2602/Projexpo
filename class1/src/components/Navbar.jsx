import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="nav-div">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-70 w-20 mr-4" />
        </Link>
      </div>
      <div className="flex gap-8 text-blue-600 text-sm">
        <Link to="/" className='py-2 px-4 group relative w-max'><span>Home</span>
      <span className="line-effect"></span></Link>
        <Link to="/contact" className='py-2 px-4 group relative w-max'><span>Contact</span>
      <span className="line-effect"></span></Link>
        {!isLoggedIn && <Link to="/login" className='  py-2 px-4 group relative w-max'><span>Login</span>
      <span className="line-effect"></span></Link>}
        {!isLoggedIn && <Link to="/register" className='  py-2 px-4 group relative w-max'><span>Register</span>
      <span className="line-effect"></span></Link>}
        {isLoggedIn && <Link to="/add-project" className='  py-2 px-4 group relative w-max'><span>Add Project</span>
      <span className="line-effect"></span></Link>}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
        <a href="/" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-extra-lg shadow-2xl group">
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
      
      <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
      
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
      
      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
      
      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
      <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
      <span className="relative">Get Started</span>
      </a>
        </div>
    </nav>
  );
};

export default Navbar;
