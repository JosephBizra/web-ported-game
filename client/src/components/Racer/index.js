import React, { Component } from "react";
import "./style.css";
import Obama from "./images/obama.jpg";
import Trump from "./images/trump.jpg";
import Warren from "./images/elzabeth.jpg";
import Nav from "../Nav";

class Racer extends Component {
    state = {
        clickedImages: {
            trump: false,
            warren: false
        }
    };

    handleClick = name => {
        console.log(name + " was clicked on")
        const updatedState = this.state;
        updatedState.clickedImages[name] = !updatedState.clickedImages[name]

        this.setState(updatedState);
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container-2">
                    <p className="select-title">Select Racer</p>
                    <div className="images">
                        <div className="trump">
                            <img className={`image-trump${this.state.clickedImages.trump ? " highlight":""}`} src={Trump} id="trump" onClick={() => this.handleClick("trump")}
                            />
                        </div>
                        <div className="warren">
                            <img className={`image-warren${this.state.clickedImages.warren ? " highlight":""}`} src={Warren} id="warren" onClick={() => this.handleClick("warren")}/>
                        </div>
                        <div className="obama">
                            <img src={Obama} id="obama"/>
                            <i className="fas fa-lock lock"></i>
                        </div>   
                    </div>
                </div>
            </div>
        );
    };
}

export default Racer;