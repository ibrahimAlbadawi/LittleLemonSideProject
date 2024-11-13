import React from "react";
import "./Reservations.css";
import BookingForm from "../../helper components/BookingForm/BookingForm";

const Reservations = (props) => {


    return (
        <div id="reservations-container">
            <BookingForm infos={props.infos} setInfos={props.setInfos} handleChange={props.handleChange} />
        </div>
    );
};

export default Reservations;
