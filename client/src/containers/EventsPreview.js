import React, { Component } from "react";
import { connect } from "react-redux";
import SmallEventCard from "../components/smallEventCard";

class EventsPreview extends Component {
  renderSmallCard(item) {
    const eventData = {
      id: item.id,
      title: item.event_name,
      host: item.host_org_name,
      date: "Jan 30",
      day: "Sat",
      time: "5 PM"
    };
    return <SmallEventCard key={item.id} data={eventData} />;
  }

  render() {
    return (
      <div className="eventsPreview_container">
        <div className="eventsPreview_content">
          <h1>Upcoming Events</h1>
          <ul>
            {this.props.events
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
