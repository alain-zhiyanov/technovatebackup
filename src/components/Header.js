import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/subscribe">Subscribe</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
