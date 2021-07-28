import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>Finca Ganadera</Link>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link mr-3"
                        to={"/pasture"}>Pasture </Link>
                    <Link className="nav-item nav-link mr-3"
                        to={"/login"}>Login </Link>
                    <Link className="nav-item nav-link mr-3"
                        to={"/"}>Home </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;