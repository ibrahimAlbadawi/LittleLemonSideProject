import React from "react";
import { useState } from "react";
// import "./BookingForm.css";
const BookingForm = () => {
    const [infos, setInfos] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date: "", //add date picker library here
        time: "", //make it options where each one is 2 hours in length
        numOfGuests: "", //make it options 1-2 ...  10+
        occasion: "", //make it options birthday, annivrsary, other
    });

    const handleChange = (e) => {
        setInfos({ ...infos, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(infos)
        resetInputs();
        console.log("form submitted!");
    };

    const resetInputs = () => {
        setInfos({
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            time: "",
            numOfGuests: "",
            occasion: "",
        });
    };
    return (
        <div id="booking-form">
            <h1>Reserve a table</h1>
            <form onSubmit={handleSubmit}>
                <div id="inputs">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        type="text"
                        value={infos.firstName}
                        name="firstName"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter first name"
                        required
                    />

                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        type="text"
                        value={infos.lastName}
                        name="lastName"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter last name"
                        required
                    />

                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        value={infos.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="date">Date*</label>
                    <input
                        type="date"
                        value={infos.date}
                        name="date"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="time">Time*</label>
                    <input
                        type="time"
                        step="3600000"
                        value={infos.time}
                        name="time"
                        onChange={(e) => handleChange(e)}
                        required
                    />

                    <label htmlFor="numOfGuests">Number of guests*</label>

                    <input
                        type="number"
                        value={infos.numOfGuests}
                        min="1"
                        max="5"
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="occasion">Occasion*</label>

                    <div>
                        <label htmlFor="anniversary">Anniversary</label>
                        <input
                            name="anniversary"
                            type="radio"
                            value="anniversary"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>

                <button type="submit">Book a table</button>
            </form>
        </div>
    );
};

export default BookingForm;
