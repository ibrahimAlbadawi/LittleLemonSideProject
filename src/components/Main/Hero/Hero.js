import "./Hero.css";
import { assets } from "../../Assets";
import Button from "../../helper components/Button/Button";
import BookingMessage from "../../helper components/BookingMessage/BookingMessage";
import { Link } from "react-router-dom";

const Hero = (props) => {
    return (
        <div id="hero-container">
            {props.infos.date !== "" && props.infos.time !== "" && (
                <div id="hero-booking-message">
                    <BookingMessage
                        date={props.infos.date}
                        time={props.infos.time}
                    />
                </div>
            )}
            <div id="hero">
                <div id="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
