import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EventCard from "./EventListing";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { filterEvents } from "../../selectors/filterEvents";
import DatePicker from "./DatePicker";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
    this.onDateSearch = this.onDateSearch.bind(this);
  }
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }
  onFilter(e) {
    this.props.setFilter(e.target.id);
  }

  onDateSearch(data) {
    this.props.setFilter(
      this.props.filter.filter,
      data.startDate,
      data.endDate
    );
    console.log("date picker data", data);
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
            <DatePicker onDateSearch={this.onDateSearch} />
          </section>
        </nav>
        <section className="events_view">
          <h1 className="events_view_title">
            Upcoming Events ({_.size(this.props.events)})
          </h1>
          <EventCard user={this.props.auth.id} events={this.props.events} />
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  filter: state.filter,
  events: filterEvents(state)
});

export default connect(mapStateToProps, actions)(EventsPage);
