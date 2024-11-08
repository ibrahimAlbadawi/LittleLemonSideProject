import React from "react";
import Main from "./components/Main/Main.js";
import About from "../src/components/Main/About/About.js";
import Menu from "../src/components/pages/Menu/Menu";
import Reservations from "./components/pages/Reservations/Reservations.js";
import OrderOnline from "../src/components/pages/OrderOnline/OrderOnline";
import Login from "../src/components/pages/Login/Login";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";

const App = () => {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}>
                        <Route index element={<Main />} />
                        <Route path="/Home" element={<Main />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Menu" element={<Menu />} />
                        <Route
                            path="/Reservations"
                            element={<Reservations />}
                        />
                        <Route path="/OrderOnline" element={<OrderOnline />} />
                        <Route path="/Login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
