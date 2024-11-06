import React from "react";
import "./Hero.css";
import { assets } from "../../Assets";
import Button from "../../helper components/Button/Button";

const Hero = () => {
    return (
            <div id="hero">
                <div id="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div id="hero-button"><Button text="Reserve a Table" /></div>
                </div>
                <img
                    id="hero-image"
                    src={assets.restauranfood}
                    alt="hero-image"
                />
            </div>
    );
};

export default Hero;
