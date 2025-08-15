import React from "react";
import { Link } from "react-router-dom";
import { Settings } from 'lucide-react';
import "./navbar.css";

function Navbar({ onSearch }) {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">Skool Games</Link>
      <input
        type="text"
        placeholder="Search games..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="nav-links">
        <Link to="/settings"><Settings size={20} />Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
