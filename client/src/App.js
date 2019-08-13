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
import UnityFile from "./components/Unity";
import Unity, { UnityContent } from "react-unity-webgl";
//import J from "./MyGame/Build/PressraceAlpha1-Trump.json";
//import UnityLoader from "./MyGame/Build/UnityLoader.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
 
    this.unityContent = new UnityContent(
      "../public/MyGame/Build/PressraceAlpha1-Trump.json",
      "../public/MyGame/TemplateData/UnityProgress.js",
      "../public/MyGame/Build/UnityLoader.js" 
    );
  }
  
//   handleClick() {
//   state={
//     racer:""
//   };

//   this.setState({
//     [name]: value
//   });
// }
   
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
            <Route exact path="/game"> <Unity unityContent={this.unityContent}></Unity> </Route>
          </Switch>
        </div>
      </Router>
      
    </div>  
    );
  }
}

export default App;