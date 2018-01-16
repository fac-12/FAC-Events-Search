import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
import GoogleMap from "./google_map";
import "../style.css";

class EventPage extends Component {
  render() {
    const { id } = this.props.match.params;
    const { events } = this.props;
    console.log(events[id]);
    return (
      <div className="event-page-container">
        <div className="event-page-title">
          <h1> {events[id].event_name} </h1>
          <p> Hosted By {events[id].host_org_name}</p>
        </div>

        <div className="event-map-container">
          <GoogleMap
            lat={Number(events[id].venue_lat)}
            lon={Number(events[id].venue_lon)}
          />
          <section className="event-map-info">
            <p>{events[id].event_name}</p>
            <p>{events[id].venue_name}</p>
            <p>{events[id].venue_address}</p>
          </section>
        </div>
        <h2> Details </h2>
        <p> {events[id].event} </p>
        <h2> Faccers who are interested </h2>
      </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });
export default connect(mapStateToProps, actions)(EventPage);
