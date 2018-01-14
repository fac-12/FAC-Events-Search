import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class HostsAddForm extends Component {
  render() {
    return (
      <section className="hosts_options">
        <h2>I am interested in events organized by:</h2>
        <label>
          <input type="checkbox" /> Node Girls
        </label>
        <label>
          <input type="checkbox" /> Queer Code London
        </label>
        <label>
          <input type="checkbox" /> Founders & Coders
        </label>
        <label>
          <input type="checkbox" /> The JS Roundabout
        </label>
        <label>
          <input type="checkbox" /> UX Playground
        </label>
        <label>
          <input type="checkbox" /> London Halfstack
        </label>
        <label>
          <input type="checkbox" /> Ladies of Code
        </label>
        <label>
          <input type="checkbox" /> Codebar
        </label>
        <label>
          <input type="checkbox" /> Journocoders
        </label>
        <label>
          <input type="checkbox" /> London Node Users Group
        </label>
      </section>
    );
  }
}

export default connect(null, actions)(HostsAddForm);
