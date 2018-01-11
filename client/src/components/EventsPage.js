import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventCard from "./eventCard";
import * as actions from "../actions";
import AddEventPage from "./AddEventPage";
import "../style.css";
import axios from "axios";

class EventsPage extends Component {
  componentDidMount() {
    this.props.setLocation(this.props.location.pathname);
  }
  render() {
    return (
      <div>
        <section className="events-page-container">
          <section className="sideBar">
            <Router>
              <nav className="side-nav">
                <ul>
                  <li>
                    <Link to="/">Add Event</Link>
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
              </nav>
            </Router>
            <section>
              <section>
                <input type="text" />
                <button type="submit" />
              </section>
              <input type="date" />
            </section>
          </section>
          <section className="events-view">
            <h1 className="events-view-title"> Upcoming Events </h1>
            <EventCard />
          </section>
        </section>
      </div>
    );
  }
}
const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps, actions)(EventsPage);
