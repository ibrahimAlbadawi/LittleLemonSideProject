import React from "react";
import FooterLogo from '../../Assets/Capture.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <img src={FooterLogo} alt="Footer-logo" />
            <div>
                <h4>
                    Navigation
                </h4>
                <ul id="footer-list">
                    <li>
                        <a href="#" id="footer-link">Home</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">Menu</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">Reservations</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">Order Online</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">Login</a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Contact</h4>
                <ul id="footer-list">
                    <li>
                        <a href="#" id="footer-link">Address</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">phone number</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">email</a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Social Media Links</h4>
                <ul id="footer-list">
                    <li>
                        <a href="#" id="footer-link">Address</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">phone number</a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">email</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
