// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">To-Do List</Link></li>
        <li>
          <Link to="/categories">Categories</Link>
          <ul>
            <li><Link to="/category/work">Work</Link></li>
            <li><Link to="/category/personal">Personal</Link></li>
            <li><Link to="/category/shopping">Shopping</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <input type="text" placeholder="Search..." />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
