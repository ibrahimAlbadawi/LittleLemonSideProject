import React from "react";
import "./Hero.css";
import { assets } from "../../Assets";
import Button from "../../helper components/Button/Button";
const Hero = (props) => {
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
                    <button id="hero-button"><Button text="Reserve a Table" /></button>
                </div>
                <img
                    id="hero-image"
                    src={assets.restauranfood}
                    alt="hero-image"
                />
                {(props.infos !== '' && props.infos !== '')&& <h1 style={{color: 'black'}}>hello</h1>}
            </div>
    );
};

export default Hero;
