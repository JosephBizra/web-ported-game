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
import Level from "./components/Level";
import Unity, { UnityContent } from "react-unity-webgl";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
 
    this.unityContent = new UnityContent(
      "./build/PresRaceAlpha1-Warren/Game/PresRaceAlpha1-Warren.json",
      "./build/PresRaceAlpha1-Warren/Game/UnityLoader.js"
    );
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
            <Route exact path="/racer" component={Racer} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/track" component={Track} />
            <Route exact path="/level" component={Level} />
            <Route exact path="/game"> <Unity unityContent={this.unityContent} /> </Route>
          </Switch>
        </div>
      </Router>
      
    </div>  
    );
  }
}

export default App;