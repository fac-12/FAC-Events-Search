import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class EventsPage extends Component {
  componentDidMount() {
    this.props.setLocation(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <h1> Events Page (to be built) </h1>
      </div>
    );
  }
}

export default connect(null, actions)(EventsPage);
