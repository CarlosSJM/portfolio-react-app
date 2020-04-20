import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Loader from "../screens/Loader";

export default function Nav() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Loader} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    );
}