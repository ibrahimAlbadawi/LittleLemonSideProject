import React from "react";
import "./About.css";
import { assets } from "../../Assets";
const About = () => {
    return (
        <div id="about-container">
            <div id="about-text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                </p>
            </div>

            <img id="about-image2" src={assets.chef1} alt="hero-image" />
            <img id="about-image1" src={assets.chef2} alt="hero-image" />
        </div>
    );
};

export default About;
