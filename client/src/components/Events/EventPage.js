import React, { Component } from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import * as actions from "../../actions";
import GoogleMap from "./GoogleMap";
import InterestedUser from "./InterestedUser";

class EventPage extends Component {
  componentDidMount() {
    this.props.getEventInterest(this.props.match.params.id);
  }
  render() {
    const { id } = this.props.match.params;
    const { events } = this.props;
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
        <div> {ReactHtmlParser(events[id].event_desc)} </div>
        <h2> Faccers who are interested </h2>
        <InterestedUser />
      </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });
export default connect(mapStateToProps, actions)(EventPage);
