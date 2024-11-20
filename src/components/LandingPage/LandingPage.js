import { Outlet, Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import Footer from "../Footer/Footer";
import "./LandingPage.css";
const Layout = () => {
    return (
        <>
            <header>
                <a href="./">
                <Link to="/Home"><img id="home-Logo" src={Logo} alt="Little lemon" /></Link>
                </a>
                <nav>
                    <ul id="landing-page-list">
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/Reservations">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/OrderOnline">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
