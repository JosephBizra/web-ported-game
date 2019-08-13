import React from "react";
import "./style.css";
import Elizabeth from "./images/elizabeth.jpg";
import Trump from "./images/trump.jpg";
import Bluecar from "./images/bluecar.jpg";
import Redcar from "./images/redcar.jpg";
import Ovaloffice from "./images/ovaloffice.jpg";



import Nav from "../Nav";
import Wstart from "../wstart";
import Tstart from "../tstart";

function Racer(props) {
    const whichCharacter = () => {
        if(props.character==="elizabeth"){
            return (
            <div>
            <img src={Bluecar} id="elizabeth"/>
             <img src={Elizabeth} id="elizabeth"/>
             <img src={Ovaloffice} id="elizabeth"/>

            <Wstart />
            </div>)
        }else if( props.character==="trump")        {
            return (
            <div>
            <img src={Redcar} id="trump"/>
            <img src={Trump} id="trump"/>
            <img src={Ovaloffice} id="trump"/>
           <Tstart />
            </div> )
        }
    }
    return (
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">Click to change racer</p>
                <div className="images" onClick={() => props.changeCharacter("trump")}>
                    {whichCharacter()}
                </div>
            </div>
        </div>
    );
}

export default Racer;