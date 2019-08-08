import React from "react";
import "./style.css";
import Obama from "./images/obama.jpg";
import Trump from "./images/trump.jpg";
import Nav from "../Nav";

function Racer() {
    return (
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Select Racer</p>
                <div className="images">
                    <img src={Obama} />
                    <img src={Trump} />
                </div>
            </div>
        </div>
    );
}

export default Racer;