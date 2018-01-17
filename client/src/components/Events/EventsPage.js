import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EventCard from "./EventListing";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { filterEvents } from "../../selectors/filterEvents";
import SearchOptions from "./SearchOptions";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }
  onFilter(e) {
    this.props.setFilter(
      e.target.id,
      this.props.filter.startDate,
      this.props.filter.endDate,
      this.props.filter.searchTerm
    );
  }

  onSearch(data) {
    console.log("data received", data);
    // this.props.setFilter(
    //   this.props.filter.filter,
    //   data.startDate || this.props.filter.startDate,
    //   data.endDate || this.props.filter.endDate,
    //   data.searchTerm || this.props.filter.searchTerm
    // );
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
          <SearchOptions onSearch={this.onSearch} />
        </nav>
        <section className="events_view">
          <h1 className="events_view_title">
            Upcoming Events ({this.props.events.length})
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
