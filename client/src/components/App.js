import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import LandingPage from "./Landing/LandingPage";
import ProfilePage from "./ProfilePage";
import Header from "./Header/Header";
import Footer from "./Footer";
import EventsPage from "./Events/EventsPage";
import HostsPage from "./Hosts/HostsPage";
import AboutPage from "./AboutPage";
import AddEventPage from "./Events/AddEventPage";
import EventPage from "./Events/EventPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(user => this.props.fetchAllEvents(user));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body_container">
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
            path="/event/new"
            render={props =>
              this.props.auth ? (
                <AddEventPage {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/events/:id"
            render={props =>
              this.props.auth ? <EventPage {...props} /> : <Redirect to="/" />
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
