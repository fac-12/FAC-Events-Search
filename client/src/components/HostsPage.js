import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import HostsAddForm from "./HostsAddForm";

class HostsPage extends Component {
  constructor() {
    super();
    this.state = { url: "" };
  }

  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }

  checkMeetup = url => {
    if (url.includes("www.meetup.com")) {
      this.props.addHost(url);
    }
  };

  clickHandler = e => {
    e.preventDefault();
    this.checkMeetup(this.state.url);
  };

  render() {
    return (
      <div className="about_container">
        <section className="hosts_info">
          <article className="hosts_about">
            <h2>Hosts</h2>
            <p>
              These organizations’ meetup listings are automatically included in
              the events. Click on a name to see more information. Check the box
              to subscribe to an organization’s events and they will appear in
              your “suggested” events list.
            </p>
          </article>
          <article className="add-host">
            <h2 className="add-host-title">Add New Host</h2>
            <p>
              Input the organization’s meetup url below to add a new host for
              automatic event inclusion.
            </p>
            <form>
              <input
                type="text"
                value={this.state.url}
                onChange={event => this.setState({ url: event.target.value })}
              />
              <input
                className="submit-btn"
                type="submit"
                value="submit"
                onClick={this.clickHandler}
              />
            </form>
          </article>
        </section>
        <HostsAddForm />
      </div>
    );
  }
}

export default connect(null, actions)(HostsPage);
