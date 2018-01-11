import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events } = this.props;
    const month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <div>
        {events.map(item => (
          <div key={item.id}>
            <section>
              <h2> {item.event_name} </h2>
              <p> {item.host_org_name} </p>
              <p> {item.venue_name} </p>
            </section>
            <section>
              <p> {console.log(item.event_date.split(":")[0])} </p>
            </section>
            <section>
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
