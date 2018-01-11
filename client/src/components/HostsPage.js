import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class HostsPage extends Component {
  componentDidMount() {
    this.props.setLocation(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <h1> Hosts Page (to be built) </h1>
      </div>
    );
  }
}

export default connect(null, actions)(HostsPage);
