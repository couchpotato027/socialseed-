import React from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">SocialSeed</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/network">Network</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <input type="text" placeholder="Search users or posts..." />
          <button><i className="fas fa-search"></i></button>
        </div>
        <Link to="/login"><button className="btn-outline">Log In</button></Link>
        <Link to="/signup"><button className="btn-primary">Sign Up</button>x</Link>
      </div>
    </nav>
  );
}

export default Navbar;
