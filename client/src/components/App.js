import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
