import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/login"} component={Login} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;