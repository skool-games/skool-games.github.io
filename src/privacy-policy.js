import React from 'react';
import { Eye, Database, Shield, Cookie, Users, Globe } from 'lucide-react';
import './legal.css';

function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Privacy Policy</h1>
      </div>
      
      <div className="legal-intro">
        <p>
          Welcome to Skool Games! We take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Eye size={24} />
          <h2>What Data We Collect</h2>
        </div>
        <ul className="legal-list">
          <li>Information you provide (e.g., name, email)</li>
          <li>Device and browser information</li>
          <li>Anonymous usage statistics</li>
        </ul>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Database size={24} />
          <h2>How We Use Your Data</h2>
        </div>
        <ul className="legal-list">
          <li>To personalize your gaming experience</li>
          <li>To improve our website and game recommendations</li>
          <li>To send relevant updates about new games and features</li>
        </ul>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Cookie size={24} />
          <h2>Cookies and Tracking</h2>
        </div>
        <p>
          We use cookies to analyze traffic and enhance your gaming experience. You can control cookie preferences through your browser settings.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Users size={24} />
          <h2>Your Rights</h2>
        </div>
        <p>
          You can request access to, correction of, or deletion of your personal data by contacting us at privacy@skoolgames.com. We respect your privacy choices and will respond to your requests promptly.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Globe size={24} />
          <h2>Third-Party Services</h2>
        </div>
        <p>
          Our site may include links or services provided by third-party platforms (e.g., Google Analytics). While we carefully select our partners, we are not responsible for their privacy practices.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Shield size={24} />
          <h2>Data Protection</h2>
        </div>
        <p>
          We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse. Your privacy and security are our top priorities.
        </p>
      </div>

      <div className="legal-section last-update">
        <p className="update-text">Last updated: July 2025</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
