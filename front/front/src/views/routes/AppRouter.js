import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";
import { Provider } from "react-redux";
import store from '../../application/store'

const AppRouter = () => {
    return (
        <Router>
            <Provider store={store}>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/login"} component={Login} />
                </Switch>
                <Footer />
            </Provider>
        </Router>
    )
}

export default AppRouter;