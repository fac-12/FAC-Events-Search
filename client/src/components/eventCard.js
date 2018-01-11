import React, { Component } from "react";
import * from '../actions';

class EventCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { Host, EventName, Venue, Time } = this.props;
    return (
      <div>
        <section>
          <h2>{Host}</h2>
          <p>{EventName}</p>
          <p>{Venue}</p>
        </section>
        <section>
          <p>{Time}</p>
        </section>
        <section>
          <button> Add Me</button>
          <button> More Info </button>
        </section>
      </div>
    );
  }
}

export default EventCard;
