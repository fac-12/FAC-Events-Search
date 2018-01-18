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
    this.renderTitle = this.renderTitle.bind(this);
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
    this.props.setFilter(
      this.props.filter.filter,
      data.startDate || this.props.filter.startDate,
      data.endDate || this.props.filter.endDate,
      data.searchTerm || this.props.filter.searchTerm
    );
  }

  renderTitle() {
    if (this.props.events.length === 0) {
      if (this.props.filter.filter === ("all" || "popular")) {
        return (
          <h1 className="events_view_msg">
            There are no upcoming events in the database.{" "}
            <Link to="/event/new">Add some!</Link>
          </h1>
        );
      } else if (this.props.filter.filter === "suggested") {
        return (
          <h1 className="events_view_msg">
            You need to <Link to="/hosts">subscribe</Link> to some host
            organizations, so we can suggest events for you!
          </h1>
        );
      } else if (this.props.filter.filter === "interested") {
        return (
          <h1 className="events_view_msg">
            You haven't indicated interest in attending any events yet!
          </h1>
        );
      }
    }
    if (this.props.filter.filter === "all") {
      return (
        <h1 className="events_view_title">
          All Upcoming Events ({this.props.events.length})
        </h1>
      );
    }
    if (this.props.filter.filter === "suggested") {
      return (
        <h1 className="events_view_title">
          Suggested Upcoming Events ({this.props.events.length})
        </h1>
      );
    }
    if (this.props.filter.filter === "interested") {
      return (
        <h1 className="events_view_title">
          Events I'm Interested In ({this.props.events.length})
        </h1>
      );
    }
    if (this.props.filter.filter === "popular") {
      return (
        <h1 className="events_view_title">
          Popular Upcoming Events ({this.props.events.length})
        </h1>
      );
    }
  }

  render() {
    return (
      <div className="events_page_container">
        <nav className="sidebar_container">
          <Link to="/event/new" className="sidebar_btn sidebar_addEvent_btn">
            Add Event
          </Link>
          <section className="sidebar_filter">
            <h3>Filter Events</h3>
            <FilterOptions {...this.props.filter} onClick={this.onFilter} />
          </section>
          <SearchOptions onSearch={this.onSearch} />
        </nav>
        <section className="events_view">
          {this.renderTitle()}
          <section className="events_view">
            <EventCard user={this.props.auth.id} events={this.props.events} />
          </section>
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
