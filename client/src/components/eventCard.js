import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import "../style.css";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events } = this.props;

    return (
      <div className="events-card-container">
        {events.map(item => (
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
              <p className="info-bar-interest"> 10 faccers are interested </p>
              <button> Add Me</button>
              <button> More Info </button>
            </section>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });
export default connect(mapStateToProps, actions)(EventCard);
