import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import SmallEventCard from "./SmallEventCard";
import { parseDateTime } from "../../helpers/conversions";

class EventsPreview extends Component {
  renderSmallCard(item) {
    const datetime = parseDateTime(parseInt(item.event_datetime, 10));
    const eventData = {
      id: item.id,
      title: item.event_name,
      host: item.host_org_name,
      date: datetime.date,
      day: datetime.day,
      time: datetime.time,
      num_interested: item.num_interested
    };
    return <SmallEventCard key={item.id} data={eventData} />;
  }

  render() {
    return (
      <div className="eventsPreview_container">
        <div className="eventsPreview_content">
          <h1>Upcoming Events</h1>
          <ul>
            {_.values(this.props.events)
              .slice(0, 10)
              .map(item => this.renderSmallCard(item))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps)(EventsPreview);
