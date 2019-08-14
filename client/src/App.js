import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Login from "./components/auth/Login";
import Racer from "./components/Racer";
import Cart from "./components/Cart";
import Track from "./components/Track";
import Leaderboard from "./components/Leaderboard";
// import ScoreSubmit from "./components/ScoreSubmit";
import Level from "./components/Level";
import Unity, { UnityContent } from "react-unity-webgl";
import "./App.css";

import "./App.css";
  

const characters = ["elizabeth", "trump"]

class App extends Component {
  constructor(props) {
    super(props);
 
    this.unityContent = new UnityContent(
      "./PresRaceAlpha1-Warren/Game/PresRaceAlpha1-Warren.json",
      "./PresRaceAlpha1-Warren/Game/UnityLoader.js"
    );
    this.unityContent2 = new UnityContent(
      "./PresRaceAlpha1-Trump/Game/PresRaceAlpha1-Trump.json",
      "./PresRaceAlpha1-Trump/Game/UnityLoader.js"
    );
  }
   state = {
     characters: ["elizabeth", "trump"],
     index: 0
    //  character: "obama"
   }
   changeCharacter = () =>{

     this.setState({
       index: (this.state.index + 1) % this.state.characters.length
      })
   }
   getCharacter = () => {
     return this.state.characters[this.state.index]
   }
  render() {
    return (
      <div>
      <Router>
        <div className="App">
          <Title />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/nav" component={Nav} />
            {/* <Route exact path="/scoresubmit" component={ScoreSubmit} /> */}
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/racer" component={()=>{
              return (
              <Racer changeCharacter={()=>this.changeCharacter()} character={this.getCharacter()}
              />
              )
            }} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/track" component={Track} />
            <Route exact path="/level" component={Level} />
            <Route exact path="/game"> <Unity unityContent={this.unityContent} /> </Route>
            <Route exact path="/game2"> <Unity unityContent={this.unityContent2} /> </Route>
          </Switch>
        </div>
      </Router>
      
    </div>  
    );
  }
}

export default App;