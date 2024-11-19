import React from "react";
import { useState, useEffect } from "react";
import "./BookingForm.css";

//Here is a weird thing that is happening right now with this code in this state...
//at the moment everything seems to work just fine but here is the catch...
//if I hit submit without filling or choosing any option, It will display all the errors message
//and the errors state will be filled with all of the errors messages EXCEPT the one with the are input type "text"
//and it will be filled with them if I hit another submit...wierd isn't it?!

const BookingForm = (props) => {
    const [errors, setErrors] = useState({});

    const validateForm = (props) => {
        if (!props.infos.firstName.trim()) {
            // errors.firstName = "First name is required";
            setErrors((errors) => ({
                ...errors,
                firstName: "First name is required",
            }));
        } else if (props.infos.firstName.length < 2) {
            // errors.firstName = "First name must be at least 2 characters long";
            setErrors((errors) => ({
                ...errors,
                firstName: "First name must be at least 2 characters long",
            }));
        }

        if (!props.infos.lastName.trim()) {
            // errors.lastName = "Last name is required";
            setErrors((errors) => ({
                ...errors,
                lastName: "Last name is required",
            }));
        } else if (props.infos.lastName.length < 2) {
            // errors.lastName = "Last name must be at least 2 characters long";
            setErrors((errors) => ({
                ...errors,
                lastName: "Last name must be at least 2 characters long",
            }));
        }

        if (!props.infos.email.trim()) {
            // errors.email = "Email is required";
            setErrors((errors) => ({
                ...errors,
                email: "Email is required",
            }));
        } else if (!/\S+@\S+\.\S+/.test(props.infos.email)) {
            errors.email = "Email is invalid";
            setErrors((errors) => ({
                ...errors,
                email: "Email is invalid",
            }));
        }

        if (!props.infos.date) {
            errors.date = "Date is required";
            setErrors((errors) => ({
                ...errors,
                date: "Date is required",
            }));
        }

        if (!props.infos.time) {
            errors.time = "Time is required";
            setErrors((errors) => ({
                ...errors,
                time: "Time is required",
            }));
        }

        if (!props.infos.numOfGuests) {
            errors.numOfGuests = "Number of guests is required";
            setErrors((errors) => ({
                ...errors,
                numOfGuests: "Number of guests is required",
            }));
        }

        if (!props.infos.occasion) {
            errors.occasion = "Occasion is required";
            setErrors((errors) => ({
                ...errors,
                occasion: "Occasion is required",
            }));
        }
    };

    useEffect(() => {}, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm(props);

        if (Object.keys(errors).length === 0) {
            console.log("form submitted!");
            // resetInputs();
        } else {
            console.log(
                "form hasn't been submitted, make sure your inputs match the required specifications"
            );
            console.log(Object.keys(errors).length);
            console.log(errors);
            // setErrors({});
        }
    };

    // const resetInputs = () => {
    //     props.setInfos({
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         date: "",
    //         time: "",
    //         numOfGuests: "",
    //         occasion: "",
    //     });
    // };

    const today = new Date().toISOString().split("T")[0];

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
        { label: "8 or more", value: "+8" },
    ];

    const occasions = [
        { label: "Anniversary", value: "anniversary" },
        { label: "Birthday", value: "birthday" },
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
                    />
                    {errors.firstName && (
                        <p className="error-message">{errors.firstName}</p>
                    )}

                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        id="lastName"
                        type="text"
                        value={props.infos.lastName}
                        name="lastName"
                        onChange={(e) => props.handleChange(e)}
                        placeholder="Enter last name"
                    />
                    {errors.lastName && (
                        <p className="error-message">{errors.lastName}</p>
                    )}

                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        type="email"
                        value={props.infos.email}
                        name="email"
                        onChange={(e) => props.handleChange(e)}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <p className="error-message">{errors.email}</p>
                    )}

                    <label htmlFor="date">Date*</label>
                    <input
                        id="date"
                        type="date"
                        value={props.infos.date}
                        name="date"
                        onChange={(e) => props.handleChange(e)}
                        min={today}
                        placeholder="Enter your email"
                    />
                    {errors.date && (
                        <p className="error-message">{errors.date}</p>
                    )}

                    <label htmlFor="time">Time*</label>
                    <select
                        name="time"
                        id="time"
                        onChange={(e) => props.handleChange(e)}
                    >
                        <option disabled selected value>
                            Select a time
                        </option>
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
                    {errors.time && (
                        <p className="error-message">{errors.time}</p>
                    )}

                    <label htmlFor="numOfGuests">Number of guests*</label>
                    <select
                        name="numOfGuests"
                        id="numOfGuests"
                        onChange={(e) => props.handleChange(e)}
                    >
                        <option disabled selected value>
                            Select number of guests
                        </option>

                        {numOfGuests.map((num) => (
                            <option value={num.value}>{num.label}</option>
                        ))}
                    </select>
                    {errors.numOfGuests && (
                        <p className="error-message">{errors.numOfGuests}</p>
                    )}

                    <label htmlFor="occasion">Occasion*</label>
                    <select
                        name="occasion"
                        id="occasion"
                        onChange={(e) => props.handleChange(e)}
                    >
                        <option disabled selected value>
                            Select occasion
                        </option>

                        {occasions.map((occasion) => (
                            <option value={occasion.value}>
                                {occasion.label}
                            </option>
                        ))}
                    </select>
                    {errors.occasion && (
                        <p className="error-message">{errors.occasion}</p>
                    )}
                </div>

                <button
                    type="submit"
                    id="booking-button"
                    onClick={(e) => props.handleChange(e)}
                >
                    Book a table
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
