import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../../application/store";
import CreatePasture from "../pages/CreatePasture";
import { PrivateRoute } from "../routes/PrivateRoute";
import { auth } from "../../infrastucture/firebase/firebase";
import AnimalsByPasture from "../pages/AnimalsByPasture";
import '../css/style.css'
import ListPasture from "../components/ListPasture";
import Layout from "../components/Layout";
import createAnimal from "../pages/CreateAnimal";
import ListAnimal from "../components/ListAnimal";

/**TODO: 
 * 
*/
class AppRouter extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true,
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false,
                });
            }
        });
    }

    render() {
        return this.state.loading === true ? (
            <i className="fa fa-cog fa-spin fa-3x fa-fw"><span className="sr-only">Loading...</span></i>

        ) : (
            <Router>
                <Provider store={store}>
                    <Layout>
                        <Header />
                        <Switch>
                            <PrivateRoute
                                exact
                                path="/pasture"
                                authenticated={this.state.authenticated}
                                component={CreatePasture}
                            />
                            <PrivateRoute
                                exact
                                path="/create-animal"
                                authenticated={this.state.authenticated}
                                component={createAnimal}
                            />
                            <PrivateRoute
                                exact
                                path="/animals"
                                authenticated={this.state.authenticated}
                                component={ListAnimal}
                            />
                            <PrivateRoute
                                exact
                                path="/list-pasture"
                                authenticated={this.state.authenticated}
                                component={ListPasture}
                            />
                            <PrivateRoute
                                exact
                                path="/list-animals-by-pasture"
                                authenticated={this.state.authenticated}
                                component={AnimalsByPasture}
                            />
                            <Route exact path="/" component={Home} />
                        </Switch>
                        <Footer />
                    </Layout>
                </Provider>
            </Router>
        )
    }
}

export default AppRouter;
