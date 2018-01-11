import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import axios from "axios";

class HostsPage extends Component {
  constructor() {
    super();
    this.state = { url: "" };
  }

  componentDidMount() {
    this.props.setLocation(this.props.location.pathname);
  }

  postHostName = hostName => {
    axios
      .post("/api/hostName", {
        hostName
      })
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  checkMeetup = url => {
    if (url.includes("www.meetup.com")) {
      const hostName = url.split("/")[3];
      // this.postHostName(hostName);
      console.log(hostName);
    }
  };

  clickHandler = e => {
    e.preventDefault();
    const { url } = this.state;
    this.checkMeetup(url);
  };

  render() {
    return (
      <div className="Hosts">
        <section className="host_container">
          <section className="host-form">
            <section className="hosts-section">
              <h2 className="hosts-title">Hosts</h2>
              <p>
                These organizations’ meetup listings are automatically included
                in the events. Click on a name to see more information. Check
                the box to subscribe to an organization’s events and they will
                appear in your “suggested” events list.
              </p>
            </section>
            <section className="add-host">
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
            </section>
          </section>
          <section className="event-options">
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
        </section>
      </div>
    );
  }
}

export default connect(null, actions)(HostsPage);
