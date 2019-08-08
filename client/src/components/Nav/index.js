import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function Nav() {
    return (
        <div className="container-1">
            <div className="nav">
                <div className="racer">
                    <Link to="/nav/racer">Racer</Link>
                </div>
                <div className="cart">
                    <Link to="/nav/cart">Cart</Link>
                </div>
                <div className="track">
                    <Link to="/nav/track">Track</Link>
                </div>
                <div className="level">
                    <Link to="/nav/level">Difficulty</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;