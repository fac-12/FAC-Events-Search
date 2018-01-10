import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
import Header from "../containers/Header";
import Footer from "./Footer";
import EventsPage from "./EventsPage";
import HostsPage from "./HostsPage";
import AboutPage from "./AboutPage";

export default class App extends Component {
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
