import { NavLink } from "react-router-dom";

import "./Header.css";


function Header() {
    return (
        <header className="Header">
            <h1>Epic Albums</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/albums">Albums</NavLink>
                <NavLink to="/create">New album</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}

export default Header;
