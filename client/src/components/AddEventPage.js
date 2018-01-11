import React, { Component } from "react";
import axios from "axios";

class AddEventForm extends Component {
  constructor() {
    super();

    this.state = { url: "" };
  }

  postId = id => {
    axios
      .post("/api/addMeetupEvent", {
        id
      })
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  checkMeetup = url => {
    if (url.includes("www.meetup.com")) {
      const id = url.split("/")[5];
      this.postId(id);
    }
  };

  clickHandler = e => {
    e.preventDefault();
    const { url } = this.state;
    this.checkMeetup(url);
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

export default AddEventForm;
