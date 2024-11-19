import Main from "./components/Main/Main.js";
import About from "../src/components/Main/About/About.js";
import Menu from "../src/components/pages/Menu/Menu";
import Reservations from "./components/pages/Reservations/Reservations.js";
import OrderOnline from "../src/components/pages/OrderOnline/OrderOnline";
import Login from "../src/components/pages/Login/Login";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage.js";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [infos, setInfos] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date: "", //add date picker library here
        time: "", //make it options where each one is 2 hours in length
        numOfGuests: "", //make it options 1-2 ...  10+
        occasion: "", //make it options birthday, annivrsary, other
        isSubmitted: false,
    });

    const handleChange = (e) => {
        if (e.target.type === "submit") {
            if (
                infos.firstName !== "" &&
                infos.lastName !== "" &&
                infos.email !== "" &&
                infos.date !== "" &&
                infos.time !== "" &&
                infos.numOfGuests !== "" &&
                infos.occasion !== ""
            )
                setInfos({ ...infos, isSubmitted: true });
            console.log(infos);
        } else setInfos({ ...infos, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        //we use the useEffect hook here in order to tell React to update the infos state we it lies in app and all of it's children
    }, [infos]);

    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}>
                        <Route
                            index
                            element={
                                <Main
                                    infos={infos}
                                    setInfos={setInfos}
                                    handleChange={handleChange}
                                />
                            }
                        />
                        <Route
                            path="/Home"
                            element={
                                <Main
                                    infos={infos}
                                    setInfos={setInfos}
                                    handleChange={handleChange}
                                />
                            }
                        />
                        <Route path="/About" element={<About />} />
                        <Route path="/Menu" element={<Menu />} />
                        <Route
                            path="/Reservations"
                            element={
                                <Reservations
                                    infos={infos}
                                    setInfos={setInfos}
                                    handleChange={handleChange}
                                />
                            }
                        />
                        <Route path="/OrderOnline" element={<OrderOnline />} />
                        <Route path="/Login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>{" "}
        </div>
    );
};

export default App;
