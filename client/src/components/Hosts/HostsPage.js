import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import HostsAddForm from "./HostsAddForm";

class HostsPage extends Component {
  constructor() {
    super();
    this.state = { url: "" };
  }

  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.fetchHosts(this.props.auth.id);
    this.props.setLocation(this.props.location.pathname);
    this.props.resetMessage("addEvent");
  }

  clickHandler = e => {
    e.preventDefault();
    this.setState({ url: "" });
    if (this.state.url.includes("www.meetup.com")) {
      this.props.addHost(this.state.url);
    } else {
      this.props.addHostMessage(
        "Sorry, this feature only works with urls from meetup.com"
      );
    }
  };

  renderMessage = text => {
    if (text && text.length > 0) {
      return <p>{text}</p>;
    }
    return null;
  };

  render() {
    console.log(this.props.showMessage);
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
          <article className="hosts_add">
            <h2>Add New Host</h2>
            <p>
              Input the organization’s meetup url below to add a new host for
              automatic event inclusion.
            </p>
            <form>
              <input
                type="text"
                value={this.state.url}
                onChange={event => {
                  this.props.resetMessage("hosts");
                  this.setState({ url: event.target.value });
                }}
              />
              <button
                className="sidebar_btn hosts_add_btn"
                onClick={this.clickHandler}
              >
                Submit
              </button>
              {this.renderMessage(this.props.showMessage.hosts)}
            </form>
          </article>
        </section>
        <HostsAddForm />
      </div>
    );
  }
}
const mapStateToProps = ({ hosts, auth, showMessage }) => ({
  hosts,
  auth,
  showMessage
});

export default connect(mapStateToProps, actions)(HostsPage);
