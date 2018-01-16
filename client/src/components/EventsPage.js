import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EventCard from "./eventCard";
import * as actions from "../actions";
import "../style.css";

class EventsPage extends Component {
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }
  render() {
    return (
      <div className="events_page_container">
        <nav className="sidebar_container">
          <Link to="/event/new" className="sidebar_addEvent_btn">
            Add Event
          </Link>
          <section className="sidebar_filter">
            <h3>Filter Events</h3>
            <ul>
              <li>
                <Link to="/events">My Events</Link>
              </li>
              <li>
                <Link to="/events">Popular</Link>
              </li>
              <li>
                <Link to="/events">Suggested</Link>
              </li>
              <li>
                <Link to="/events">All Events</Link>
              </li>
            </ul>
          </section>
          <section className="sidebar_search">
            <h3>Search for Events</h3>
            <input type="text" placeholder="Search" />
            <button type="submit" className="sidebar_search_btn">
              Search
            </button>
          </section>
        </nav>
        <section className="events_view">
          <h1 className="events_view_title">
            Upcoming Events ({_.size(this.props.events)})
          </h1>
          <EventCard />
        </section>
      </div>
    );
  }
}
const mapStateToProps = ({ events, filter }) => ({ events, filter });

export default connect(mapStateToProps, actions)(EventsPage);
