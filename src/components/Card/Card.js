import React from "react";
import "./Card.css";
import { assets } from "../Assets";
const Card = (props) => {
    return (
        <div class="container center">
            <img id="dish-image" src={props.imgSrc} alt="" />
            <div id="main-content">
                <div className="title-price">
                    <h4>{props.dishName}</h4>
                    <h5>{props.price}</h5>
                </div>
                <p className="description">{props.description}</p>
                <div className="delivery">
                    <h3>Order for delivery</h3>
                    <img src={assets.homeicon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Card;
