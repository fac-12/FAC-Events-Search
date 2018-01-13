import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class AddEventForm extends Component {
  constructor() {
    super();
    this.state = { url: "" };
  }

  checkMeetup = url => {
    console.log(url);
    if (url.includes("www.meetup.com")) {
      const id = url.split("/")[5];
      this.props.addEvent(id);
    } else {
      //handle if not a meetup url
    }
  };

  clickHandler = e => {
    e.preventDefault();
    this.checkMeetup(this.state);
  };

  render() {
    return (
      <form>
        <label>
          <input type="submit" onClick={this.clickHandler} />
        </label>
        <input
          type="text"
          value={this.state.url}
          onChange={event => this.setState({ url: event.target.value })}
        />
      </form>
    );
  }
}

export default connect(null, actions)(AddEventForm);
