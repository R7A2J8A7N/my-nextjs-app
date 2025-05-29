"use client";
import { useState } from 'react';
import Link from 'next/link';
import "../../src/app/styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        {/* LEFT - Logo */}
        <div className="logo">
          <img src="/logo1.png" alt="MyBrand Logo" className="logo-image" />
          <span className="logo-text">Audio</span>
        </div>

        {/* CENTER - Menu Items */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} aria-hidden={!menuOpen ? 'true' : 'false'}>
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/features" className="nav-link">Features</Link></li>
          <li><Link href="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* RIGHT - Auth Buttons */}
        <div className="auth-buttons">
          <Link href="/login" className="login-btn">Login</Link>
          <Link href="/signup" className="signup-btn">Signup</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}