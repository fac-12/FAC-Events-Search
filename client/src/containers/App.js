import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import LandingPage from "../components/LandingPage";
import ProfilePage from "../components/ProfilePage";
import Header from "./Header";
import Footer from "../components/Footer";
import EventsPage from "../components/EventsPage";
import HostsPage from "../components/HostsPage";
import AboutPage from "../components/AboutPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props =>
              this.props.auth ? (
                <Redirect to="/events" />
              ) : (
                <LandingPage {...props} />
              )
            }
          />
          <Route
            exact
            path="/profile"
            render={props =>
              this.props.auth ? <ProfilePage {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/events"
            render={props =>
              this.props.auth ? <EventsPage {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/hosts"
            render={props =>
              this.props.auth ? <HostsPage {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/about"
            render={props =>
              this.props.auth ? <AboutPage {...props} /> : <Redirect to="/" />
            }
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(App);
