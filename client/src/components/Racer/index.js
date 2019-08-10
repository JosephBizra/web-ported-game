import React from "react";
import "./style.css";
import Obama from "./images/obama.jpg";
import Trump from "./images/trump.jpg";
import Nav from "../Nav";

function Racer(props) {
    return (
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Select Racer</p>
                <div className="images" onClick={() => props.handleClick(props.id)}>
                    <img src={Obama} id="obama"/>
                    <img src={Trump} id="trump"/>
                </div>
            </div>
        </div>
    );
}

export default Racer;