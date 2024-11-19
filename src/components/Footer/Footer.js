import React from "react";
import FooterLogo from "../../Assets/Capture.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <a href="./">
                <Link to="/Home">
                    <img id="Logo" src={FooterLogo} alt="Little lemon" />
                </Link>
            </a>
            <div>
                <h4>Navigation</h4>
                <ul class="footer-list">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/Reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/OrderOnline">Order Online</Link>
                    </li>
                    <li class="footer-link">
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Contact</h4>
                <ul class="footer-list">
                    <li>
                        <Link to="https://www.google.com/maps">Address</Link>
                    </li>
                    <li>
                        <Link to="https://www.whatsapp.com/">Phone Us!</Link>
                    </li>
                    <li>
                        <Link to="https://workspace.google.com/gmail/">
                            Email Us!
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Social Media Links</h4>
                <ul class="footer-list">
                    <li>
                        <Link to="https://x.com/">X</Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/">Instagram</Link>
                    </li>
                    <li>
                        <Link to="https://www.snapchat.com/">Snapchat</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
