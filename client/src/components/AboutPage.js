import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class AboutPage extends Component {
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }

  render() {
    return (
      <div className="about_container">
        <section>
          <article>
            <h2> Why we built this </h2>
            <p>
              This app makes it easier to find, share and discuss events of
              interest to the London FAC community without having to wade
              through Meetup.com or monitor Gitter channels.
            </p>
          </article>
          <article>
            <h2> Profile </h2>
            <p>
              You sign into Eventfinder with your github account but help make
              this a friendly space by filling out the additional fields in your
              profile, including a brief bio. Others will be able to view it
              when looking at who else is interested in an event.
            </p>
          </article>
          <article>
            <h2> Contact Us </h2>
            <p>
              If you have any ideas about how to make this app more useful or
              enjoyable for you then please let us know! Contact info in footer.
            </p>
          </article>
        </section>
        <section>
          <article>
            <h2> Events & Hosts </h2>
            <p>
              You sign into Eventfinder with your github account but help make
              this a friendly space by filling out the additional fields in your
              profile, including a brief bio. Others will be able to view it
              when looking at who else is interested in an event.
            </p>
            <p>Events are drawn from three sources:</p>
            <ol>
              <li>
                Certain hosts have their events from meetup.com automatically
                included. See list of organizations and suggest more here.
              </li>
              <li>
                Any meetup url posted in the FAC London Gitter channel is
                automatically included.
              </li>
              <li>
                Events can be added by any user, either with a meetup url or
                manually, from the events page.
              </li>
            </ol>
            <p>
              The events page allows you to filter upcoming events. “My events”
              show events you have indicated interest in attending. Suggested
              events are those hosted by organizations you’ve tagged. Popular
              events show upcoming events with the most interest. All events
              show all events for the next 2 months. You must specify dates to
              search beyond that.
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default connect(null, actions)(AboutPage);
