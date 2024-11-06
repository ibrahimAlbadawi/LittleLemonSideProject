import React from "react";
import "./Testamonials.css";
import TestMessage from "../../helper components/Testamonials-message/TestMessage";
const Testamonials = () => {
    return (
        <div id="testamonials-container">
            <h1 id="header">Testamonials</h1>

            <div id="messages-container">
                <div id="message">
                    <TestMessage />
                    <TestMessage />
                    <TestMessage />
                    <TestMessage />
                </div>
            </div>
        </div>
    );
};

export default Testamonials;
