import React from 'react';
import { Shield, Users, Globe, FileText, AlertCircle, Clock } from 'lucide-react';
import './legal.css';

function TermsOfService() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <Shield size={48} />
        <h1>Terms of Service</h1>
      </div>
      
      <div className="legal-intro">
        <p>
          Welcome to Skool Games. Your gaming experience matters to us. Please read these terms carefully.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <FileText size={24} />
          <h2>Acceptance of Terms</h2>
      </div>
        <p>
          By using Skool Games, you're agreeing to these terms. We've made them as clear as possible, but if you don't agree, please don't use the site.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Users size={24} />
          <h2>User Conduct</h2>
        </div>
        <p>
          We expect all users to respect each other and follow fair gaming practices. Any form of cheating, harassment, or disruptive behavior is not tolerated.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Globe size={24} />
          <h2>Content Usage</h2>
        </div>
        <p>
          The games and content on our platform are for personal, non-commercial use only. Don't modify, distribute, or exploit our content without permission.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <AlertCircle size={24} />
          <h2>Disclaimers</h2>
        </div>
        <p>
          We strive to provide the best gaming experience, but our services are provided "as is." We're not responsible for any issues arising from your use of the platform.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Clock size={24} />
          <h2>Changes to Terms</h2>
        </div>
        <p>
          We may update these terms as needed. Continue using our site after changes means you accept the new terms. Check back regularly for updates.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Globe size={24} />
          <h2>Use of the Website</h2>
        </div>
        <ul className="legal-list">
          <li>You agree not to misuse or disrupt the services.</li>
          <li>All games and content are provided "as is" without warranties.</li>
          <li>We reserve the right to modify or discontinue content without notice.</li>
        </ul>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <Shield size={24} />
          <h2>Intellectual Property</h2>
        </div>
        <p>
          All content on Skool Games, including game assets, logos, and code, are protected by copyright and intellectual property laws.
        </p>
      </div>

      <div className="legal-section">
        <div className="section-header">
          <AlertCircle size={24} />
          <h2>Limitation of Liability</h2>
        </div>
        <p>
          Skool Games shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of the platform.
        </p>
      </div>

      <div className="legal-section last-update">
        <p className="update-text">Last updated: July 2025</p>
      </div>
    </div>
  );
}

export default TermsOfService;
