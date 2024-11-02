import React from "react";
import "./Hero.css";
import { assets } from "../../Assets";
import Button from "../../Button/Button";
const Hero = () => {
    return (
        <div id="main-hero">
            <div id="hero">
                <div id="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <Button text="Reserve a Table" />
                </div>
                <img
                    id="hero-image"
                    src={assets.restauranfood}
                    alt="hero-image"
                />
            </div>
        </div>
    );
};

export default Hero;
