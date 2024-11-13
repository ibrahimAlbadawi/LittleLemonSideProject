import React from "react";
import "./BookingMessage.css";
const BookingMessage = (props) => {
    return (
        <div id="card-container">
            <p id="card-title">Reservation information</p>
            <div id="card-info">
                <p className="card-date-time">Reservation date: <span className="span-higlight">{props.date}</span></p>
                <p className="card-date-time">Reservation time: <span className="span-higlight">{props.time}</span></p>
            </div>
        </div>
    );
};

export default BookingMessage;
