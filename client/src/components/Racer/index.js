import React from "react";
import "./style.css";
import Obama from "./images/obama.jpg";
import Trump from "./images/trump.jpg";

function Racer() {
    return(
        <div className="container-2">
            <h2 style={{color:"white"}}>Select Racer</h2>
            <div className="images">
            <img src={Obama}/>
            <img src={Trump}/>
            </div>
        </div>
    );
}

export default Racer;