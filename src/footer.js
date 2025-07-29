import React from "react";
import { Link } from "react-router-dom";
import './contact'
import './copyright'
import './privacy-policy'
import './terms-of-service'
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Developers</h3>
                    <ul>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Information</h3>
                    <ul>
                        <li><Link to="/privacy-policy">Privacy policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Use</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><Link to="/copyright">Copyright Infringement Notice Procedure</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <a className="logo" href="https://skool-games.github.io/">Skool Games</a>
                <p className="disclaimer">
                    Disclaimer: Skool Games is an independent website and is not affiliated with any organizations.
                </p>
                <p className="copyright">&copy; {new Date().getFullYear()} Skool Games. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;