import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.subject || !formData.message) {
      setStatus({
        message: 'Please fill in all fields',
        type: 'error'
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus({
        message: 'Please enter a valid email',
        type: 'error'
      });
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    setStatus({
      message: 'Thank you for your message! We\'ll get back to you soon.',
      type: 'success'
    });

    // Clear form
    setFormData({
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have a question? We'd love to hear from you!</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="5"
          />
        </div>

        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.type === 'error' ? <AlertCircle size={20} /> : null}
            {status.message}
          </div>
        )}

        <button type="submit" className="submit-button">
          <Send size={20} />
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
