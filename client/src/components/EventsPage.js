import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EventCard from "./eventCard";
import * as actions from "../actions";
import FilterOptions from "./FilterOptions";
import filterEvents from "../helpers/filterEvents";

import "../style.css";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = filterEvents(this.props.filter, this.props.events);
  }
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
    this.onFilter = this.onFilter.bind(this);
  }
  onFilter(e) {
    this.props.setFilter(e.target.id);
    console.log(filterEvents(e.target.id, this.props.events));
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
            <FilterOptions {...this.props.filter} onClick={this.onFilter} />
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
