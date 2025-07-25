import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
            <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
            </div>
        </footer>
    )
}

export default Footer;