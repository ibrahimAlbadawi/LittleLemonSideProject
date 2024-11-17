import React from "react";
// import { useState } from "react";
import "./BookingForm.css";
// import { Context } from "../EventContext";
// import { useContext } from "react";
const BookingForm = (props) => {
    //DONE STATE LIFTING TO App.js
    // const [infos, setInfos] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     date: "", //add date picker library here
    //     time: "", //make it options where each one is 2 hours in length
    //     numOfGuests: "", //make it options 1-2 ...  10+
    //     occasion: "", //make it options birthday, annivrsary, other
    // });

    // const { setEventContext } = useContext(Context);

    // const handleChange = (e) => {
    //     setEventContext(e);
    //     props.setInfos({ ...props.infos, [e.target.name]: [e.target.value] });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.infos);
        resetInputs();
        console.log("form submitted!");
    };

    const resetInputs = () => {
        props.setInfos({
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            time: "",
            numOfGuests: "",
            occasion: "",
        });
    };

    const dayTimes = [
        { label: "10:00am-11:30am", value: "10am" },
        { label: "12:00pm-1:30pm", value: "12pm" },
        { label: "2:00pm-3:30pm", value: "2pm" },
        { label: "4:00pm-5:30pm", value: "4pm" },
    ];

    const nightTimes = [
        { label: "6:00pm-7:30am", value: "6pm" },
        { label: "8:00pm-9:30pm", value: "8pm" },
        { label: "10:00pm-11:30pm", value: "10pm" },
        { label: "12:00am-1:30am", value: "12am" },
    ];

    const numOfGuests = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
        { label: "8 or more", value: "8+" },
    ];

    const occasions = [
        { label: "Anniversary", value: "anniversary" },
        { label: "Birthday", value: "birhday" },
        { label: "Other occasion", value: "else" },
    ];

    return (
        <div id="booking-form">
            <h1>Reserve a table</h1>
            <form onSubmit={handleSubmit}>
                <div id="inputs">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        id="firstName"
                        type="text"
                        value={props.infos.firstName}
                        name="firstName"
                        onChange={(e) => props.handleChange(e)}
                        placeholder="Enter first name"
                        required
                    />

                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        id="lastName"
                        type="text"
                        value={props.infos.lastName}
                        name="lastName"
                        onChange={(e) => props.handleChange(e)}
                        placeholder="Enter last name"
                        required
                    />

                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        type="email"
                        value={props.infos.email}
                        name="email"
                        onChange={(e) => props.handleChange(e)}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="date">Date*</label>
                    <input
                        id="date"
                        type="date"
                        value={props.infos.date}
                        name="date"
                        onChange={(e) => props.handleChange(e)}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="time">Time*</label>
                    <select
                        name="time"
                        id="time"
                        onChange={(e) => props.handleChange(e)}
                    >
                        <optgroup label="Day">
                            {dayTimes.map((time) => (
                                <option value={time.value}>{time.label}</option>
                            ))}
                        </optgroup>
                        <optgroup label="Night">
                            {nightTimes.map((time) => (
                                <option value={time.value}>{time.label}</option>
                            ))}
                        </optgroup>
                    </select>

                    <label htmlFor="numOfGuests">Number of guests*</label>
                    <select
                        name="numOfGuests"
                        id="numOfGuests"
                        onChange={(e) => props.handleChange(e)}
                    >
                        {numOfGuests.map((num) => (
                            <option value={num.value}>{num.label}</option>
                        ))}
                    </select>

                    <label htmlFor="occasion">Occasion*</label>
                    <select
                        name="occasion"
                        id="occasion"
                        onChange={(e) => props.handleChange(e)}
                    >
                        {occasions.map((occasion) => (
                            <option value={occasion.value}>
                                {occasion.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" id="booking-button">
                    Book a table
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
