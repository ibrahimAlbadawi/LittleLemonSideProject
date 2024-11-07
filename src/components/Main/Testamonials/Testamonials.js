import React from "react";
import "./Testamonials.css";
import TestMessage from "../../helper components/Testamonials-message/TestMessage";
const Testamonials = () => {
    return (
        <div id="testamonials-container">
            <div id="testamonials-header">
                <h1>Testamonials</h1>
            </div>

            <div id="message">
                <TestMessage />
                <TestMessage />
                <TestMessage />
                <TestMessage />
            </div>
        </div>
    );
};

export default Testamonials;
