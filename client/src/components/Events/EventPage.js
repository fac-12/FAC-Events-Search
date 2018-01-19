import React, { Component } from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import * as actions from "../../actions";
import GoogleMap from "./GoogleMap";
import InterestedUser from "./InterestedUser";
import { parseDateTime } from "../../helpers/conversions";

class EventPage extends Component {
  componentDidMount() {
    this.props.getEventInterest(this.props.match.params.id);
  }
  render() {
    const { id } = this.props.match.params;
    const { events } = this.props;
    console.log(this.props.eventusers);
    const datetime = parseDateTime(parseInt(events[id].event_datetime, 10));
    return (
      <div className="event-page-container">
        <div className="event-page-title">
          <h1>{events[id].event_name}</h1>
          <p> Hosted By {events[id].host_org_name}</p>
        </div>

        <div className="event-map-container">
          <GoogleMap
            lat={Number(events[id].venue_lat)}
            lon={Number(events[id].venue_lon)}
          />
          <section className="event-map-info">
            <p className="s">{datetime.date}</p>
            <p className="">{datetime.day}</p>
            <p className="">{datetime.time}</p>
            <section className="event-venue-info-container">
              <p>{events[id].venue_name}</p>
              <p>{events[id].venue_address}</p>
            </section>
          </section>
        </div>
        <section className="event-page-info-title">
          <h2> Details </h2>
        </section>
        <section className="event-page-info-container">
          <div className="details-info">
            {ReactHtmlParser(events[id].event_desc)}
          </div>
          <div className="event-page-interested-container">
            {this.props.eventusers ? <InterestedUser /> : <div />}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ events, eventusers }) => ({ events, eventusers });
export default connect(mapStateToProps, actions)(EventPage);
