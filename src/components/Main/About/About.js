import React from "react";
import "./About.css";
import { assets } from "../../Assets";
const About = () => {
    return (
        <div id="about-container">
            <div id="about-text">
                <h1 id="about-h1">Little Lemon</h1>
                <h3 id="about-h3">Chicago</h3>
                <p id="about-p">
                    Little Lemon was founded by two siblings with a shared
                    passion for Mediterranean cuisine and family traditions.
                    Inspired by cherished recipes passed down through
                    generations, they created a warm, inviting space where fresh
                    ingredients, zesty flavors, and heartfelt hospitality come
                    together. Every dish tells a story of tradition, love, and
                    the joy of sharing great food.
                </p>
            </div>
            <div id="images-container">
                <img id="about-image2" src={assets.chef1} alt="hero-image" />
                <img id="about-image1" src={assets.chef2} alt="hero-image" />
            </div>
        </div>
    );
};

export default About;
