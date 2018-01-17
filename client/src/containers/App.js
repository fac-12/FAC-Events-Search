import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import LandingPage from "../components/TheLandingPage";
import ProfilePage from "../components/ProfilePage";
import Header from "./Header";
import Footer from "../components/TheFooter";
import EventsPage from "../components/EventsPage";
import HostsPage from "../components/HostsPage";
import AboutPage from "../components/AboutPage";
import AddEventPage from "../components/AddEventPage";
import EventPage from "../components/EventPage";

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
