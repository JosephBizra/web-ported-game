import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Racer from "./components/Racer";
import Cart from "./components/Cart";
import Track from "./components/Track";
import Level from "./components/Level";
import "./App.css";

function App() {
    return (  
        <Router>
            <div>
                <Title />
                <Nav />
                <Switch>
                    {/* <Route exact path="/" component={Nav} /> */}
                    <Route path="/racer" component={Racer} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/track" component={Track} />
                    <Route path="/level" component={Level} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;