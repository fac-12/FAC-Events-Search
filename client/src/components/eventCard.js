import _ from "lodash";
import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import "../style.css";

class EventCard extends Component {
  onClick = e => {
    const { id: eventId } = e.target;
    if (e.target.checked) {
      this.props.addEventInterest(this.props.user, eventId);
    } else {
      this.props.removeEventInterest(this.props.user, eventId);
    }
  };

  render() {
    const { events } = this.props;
    return (
      <div className="events-card-container">
        {_.map(events, item => (
          <div key={item.id} className="event-card">
            <section className="events-container">
              <section className="event-info">
                <h2> {item.event_name} </h2>
                <p> {item.host_org_name} </p>
                <p> {item.venue_name} </p>
              </section>
              <section className="event-date">
                <p> Jan 15 </p>
                <p> Wed </p>
                <p> {item.event_time} </p>
              </section>
            </section>
            <section className="info-bar">
              <p className="info-bar-interest">
                {item.num_interested} faccers are interested
              </p>
              <input
                type="checkbox"
                checked={item.interested}
                onChange={this.onClick}
                id={item.id}
              />
              <a href={item.event_url} target="_blank">
                More Info
              </a>
            </section>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(null, actions)(EventCard);
