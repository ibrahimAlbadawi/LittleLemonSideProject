import React from "react";
import "./BookingMessage.css";
const BookingMessage = (props) => {
    return (
        <div id="card-container">
            <p id="card-title">You have a reservation!</p>
            <div id="card-info">
                <p className="card-date-time">Reservation date: <span className="span-highlight">{props.infos.date}</span></p>
                <p className="card-date-time">Reservation time: <span className="span-highlight">{props.infos.time}</span></p>
            </div>
        </div>
    );
};

export default BookingMessage;
