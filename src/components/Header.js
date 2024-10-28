import React from "react";
import { ReactComponent as Logo } from "../Assets/Logo.svg";
import Nav from "./Nav";
const Header = () => {
    return (
        <header>
            <Logo />
            <Nav />
        </header>
    );
};

export default Header;
