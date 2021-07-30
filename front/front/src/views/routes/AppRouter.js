import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../../application/store";
import Pasture from "../pages/Pasture";
import { PrivateRoute } from "../routes/PrivateRoute";
import { auth } from "../../infrastucture/firebase/firebase";
import Pastures from "../pages/Pastures";
import "../css/style.css";
import Layout from "../components/Layout";

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
      <h2>Loading...</h2>
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
                component={Pasture}
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
          </Layout>
        </Provider>
      </Router>
    );
  }
}

export default AppRouter;
