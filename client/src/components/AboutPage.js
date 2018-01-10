import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style.css";

export default () => (
  <div className="About">
    <Navbar />
    <div>
      <section>
        <h1> Why we built this </h1>
        <p>
          This app makes it easier to find, share and discuss events of interest
          to the London FAC community without having to wade through Meetup.com
          or monitor Gitter channels.
        </p>
      </section>
      <section>
        <h1> Profile </h1>
        <p>
          You sign into Eventfinder with your github account but help make this
          a friendly space by filling out the additional fields in your profile,
          including a brief bio. Others will be able to view it when looking at
          who else is interested in an event.
        </p>
      </section>
      <section>
        <h1> Events & Hosts </h1>
        <p>
          You sign into Eventfinder with your github account but help make this
          a friendly space by filling out the additional fields in your profile,
          including a brief bio. Others will be able to view it when looking at
          who else is interested in an event.
        </p>
      </section>
      <section>
        <h1> Events & Hosts </h1>
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
          The events page allows you to filter upcoming events. “My events” show
          events you have indicated interest in attending. Suggested events are
          those hosted by organizations you’ve tagged. Popular events show
          upcoming events with the most interest. All events show all events for
          the next 2 months. You must specify dates to search beyond that.
        </p>
        <p>
          If you have any ideas about how to make this app more useful or
          enjoyable for you then please let us know! Contact info in footer.
        </p>
      </section>
    </div>
  </div>
);
