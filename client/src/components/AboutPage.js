import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class AboutPage extends Component {
  componentDidMount() {
    this.props.setLocation(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <h1> About Page (to be built) </h1>
      </div>
    );
  }
}

export default connect(null, actions)(AboutPage);
