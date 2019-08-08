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
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Title />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/nav" component={Nav} />
            <Route exact path="/nav/racer" component={Racer} />
            <Route exact path="/nav/cart" component={Cart} />
            <Route exact path="/nav/track" component={Track} />
            <Route exact path="/nav/level" component={Level} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;