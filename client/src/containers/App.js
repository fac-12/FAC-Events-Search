import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/hosts" component={HostsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
