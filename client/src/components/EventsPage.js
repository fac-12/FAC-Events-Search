import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventCard from "./eventCard";
import axios from 'axios';

class EventsPage extends Component {
  componentDidMount() {
    this.props.setLocation(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <section>
          <Router>
            <ul>
              <li>
                <Link to="/addEvent" component={AddEventPage}>
                  Add Event
                </Link>
              </li>
              <li>
                <Link to="">My Events</Link>
              </li>
              <li>
                <Link to="">Popular</Link>
              </li>
              <li>
                <Link to="">Suggested</Link>
              </li>
              <li>
                <Link to="">All Events</Link>
              </li>
            </ul>
          </Router>
          <input type="text" />
          <button type="submit" />
          <input type="date" />
        </section>
        <section>
          <h1> Upcoming Events </h1>
          <EventCard  Host={} EventName={} Venue={} Time={} />
        </section>
      </div>
    );
  }
}

export default connect(null, actions)(EventsPage);
