import React from "react";
import "./Specials.css";
import Button from "../../helper components/Button/Button";
import Card from "../../helper components/Card/Card";
import {assets} from '../../Assets'
const Specials = () => {
    return (
        <div id="specials-container">
            <div id="specials-header">
                <h1 id="header-title">This weeks specials!</h1>
                <Button text="Online menu" />
            </div>
            <div className="cards">
                <Card dishName="Greek Salad" price="$12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. " imgSrc={assets.greeksalad}/>
                <Card dishName="Bruchetta" price="$ 5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " imgSrc={assets.bruschetta}/>
                <Card dishName="Lemon Dessert" price="$ 5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." imgSrc={assets.lemondessert}/>
            </div>
        </div>
    );
};

export default Specials;
