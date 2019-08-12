import React from "react";
import "./style.css";
import Nav from "../Nav";

function Leaderboard(props) {
    return (
        <div>
            <Nav />
            <div className="container-2">
                <p className="select-title">LeaderBoard</p>
                <div className="images" onClick={() => props.handleClick(props.id)}>
                    
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;