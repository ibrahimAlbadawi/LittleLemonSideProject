import "./Hero.css";
import { assets } from "../../Assets";
import Button from "../../helper components/Button/Button";
import BookingMessage from "../../helper components/BookingMessage/BookingMessage";
import { Link } from "react-router-dom";

const Hero = (props) => {
    return (
        <div id="hero-container">
            {props.infos.date !== "" && props.infos.time !== "" && props.infos.isSubmitted && (
                <div id="hero-booking-message">
                    <BookingMessage
                        infos={props.infos}
                        handleChange ={props.handleChange}
                    />
                </div>
            )}
            <div id="hero">
                <div id="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Little Lemon is a cozy, family-owned restaurant offering
                        fresh, vibrant Mediterranean dishes crafted with
                        seasonal ingredients, delivering a warm and flavorful
                        dining experience.
                    </p>
                    <button id="hero-button">
                        <Link to="/Reservations">
                            <Button text="Reserve a Table" />
                        </Link>
                    </button>
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
