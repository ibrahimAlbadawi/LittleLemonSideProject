import React from "react";
import Logo from "../../Assets/logo.png";
import Nav from "./Nav/Nav";
import './Header.css'
const Header = () => {
    return (
        <header>
            <a href="#"><img id="Logo" src={Logo} /></a>
            <Nav />
        </header>
    );
};

export default Header;
