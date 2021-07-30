import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from '../../application/store'
import Pasture from "../pages/Pasture";
import { PrivateRoute } from "../routes/PrivateRoute"
import { auth } from "../../infrastucture/firebase/firebase"
import Pastures from "../pages/Pastures";
import '../css/style.css'
import ListPastureItems from "../components/ListPastureItems";


class AppRouter extends Component {

    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false
                });
            }
        });
    }

    render() {
        return this.state.loading === true ? (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        ) : (
            <Router>
                <Provider store={store}>
                    <Header />
                    <Switch>
                        <PrivateRoute
                            exact
                            path="/pasture"
                            authenticated={this.state.authenticated}
                            component={Pasture}
                        />
                        <PrivateRoute
                            exact
                            path="/order-by-length"
                            authenticated={this.state.authenticated}
                            component={ListPastureItems}
                        />
                        <PrivateRoute
                            exact
                            path="/list-pasture"
                            authenticated={this.state.authenticated}
                            component={Pastures}
                        />
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer />
                </Provider>
            </Router>
        )
    }
}

export default AppRouter;