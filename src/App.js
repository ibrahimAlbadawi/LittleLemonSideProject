import React from "react";
import Main from './components/Main/Main.js'
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Menu from "../src/components/pages/Menu";
import Reservations from "./components/pages/Reservations.js";
import OrderOnline from "../src/components/pages/OrderOnline";
import Login from "../src/components/pages/Login";
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
                        <Route path="/Home" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Menu" element={<Menu />}/>
                        <Route path="/Reservations" element={<Reservations />}/>
                        <Route path="/OrderOnline" element={<OrderOnline />}/>
                        <Route path="/Login" element={<Login />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
