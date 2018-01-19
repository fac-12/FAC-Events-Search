import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { parseDateTime } from "../../helpers/conversions";
import { renderInterested } from "../../helpers/conversions";

class EventCard extends Component {
  onClick = e => {
    const { id: eventId } = e.target;
    if (e.target.checked) {
      this.props.addEventInterest(this.props.user, eventId);
    } else {
      this.props.removeEventInterest(this.props.user, eventId);
    }
  };

  renderAddMe = added => {
    return (
      <svg
        aria-hidden="true"
        data-fa-processed=""
        data-prefix="fas"
        data-icon="user-plus"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        className="addme_icon"
      >
        {added ? (
          <path
            fill="currentColor"
            d="M224 32c77.32 0 140 62.68 140 140s-62.68 140-140 140S84 249.32 84 172 146.68 32 224 32zm160.373 292.093l-62.399-15.6c-65.557 47.154-145.021 36.631-195.948 0l-62.399 15.6C26.233 333.442 0 367.04 0 405.585V438c0 23.196 18.804 42 42 42h364c23.196 0 42-18.804 42-42v-32.415c0-38.545-26.233-72.143-63.627-81.492zM587.897 256l48.596-48.598c4.675-4.675 4.675-12.256 0-16.931l-26.964-26.964c-4.675-4.675-12.256-4.675-16.931 0L544 212.105l-48.598-48.598c-4.675-4.675-12.256-4.675-16.931 0l-26.964 26.964c-4.675 4.675-4.675 12.256 0 16.931L500.103 256l-48.596 48.598c-4.675 4.675-4.675 12.256 0 16.931l26.964 26.964c4.675 4.675 12.256 4.675 16.931 0L544 299.897l48.598 48.596c4.675 4.675 12.256 4.675 16.931 0l26.964-26.964c4.675-4.675 4.675-12.256 0-16.931L587.897 256z"
          />
        ) : (
          <path
            fill="currentColor"
            d="M367.598 278.536l-7.622-2.178C369.414 261.154 384 232.031 384 192c0-88.312-71.573-160-160-160-88.312 0-160 71.573-160 160 0 40.06 14.607 69.189 24.025 84.358l-7.622 2.178C19.457 295.949 0 351.374 0 385.127v21.73C0 447.188 32.812 480 73.143 480h301.714C415.188 480 448 447.188 448 406.857v-21.73c0-32.887-18.858-89.007-80.402-106.591zM224 80c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112S162.144 80 224 80zm176 326.857C400 420.743 388.743 432 374.857 432H73.143C59.257 432 48 420.743 48 406.857v-21.73c0-28.064 18.604-52.729 45.589-60.439l29.583-8.452C163.711 349.212 206.592 352 224 352c17.489 0 60.312-2.807 100.828-35.763l29.583 8.452c26.985 7.71 45.589 32.374 45.589 60.439v21.729zM640 244v24c0 6.627-5.373 12-12 12h-76v76c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12v-76h-76c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h76v-76c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v76h76c6.627 0 12 5.373 12 12z"
          />
        )}
      </svg>
    );
  };

  render() {
    const { events } = this.props;
    return (
      <div className="event_cards_container">
        {events.map(item => {
          const datetime = parseDateTime(parseInt(item.event_datetime, 10));
          return (
            <div className="event_card">
              <Link
                to={`events/${item.id}`}
                key={item.id}
                className="eventCard_content"
              >
                <section className="event_info">
                  <h2> {item.event_name} </h2>
                  <h3>
                    <span>hosted by </span>
                    {item.host_org_name}
                    <span> at </span>
                    {item.venue_name}
                  </h3>
                </section>
                <section className="event_date">
                  <h3>
                    {datetime.day} {datetime.date}
                  </h3>
                  <p> {datetime.time} </p>
                </section>
              </Link>
              <section className="info-bar">
                <span title="Add or remove interest">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox_hidden"
                      checked={item.interested}
                      onChange={this.onClick}
                      id={item.id}
                    />
                    {this.renderAddMe(item.interested)}
                  </label>
                </span>
                <div className="info-bar-interest">
                  {renderInterested(item.num_interested)}
                </div>
                <Link className="moreInfo" to={`events/${item.id}`}>
                  More Info
                  <svg
                    aria-hidden="true"
                    data-fa-processed=""
                    data-prefix="fal"
                    data-icon="arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="moreInfo_arrow"
                  >
                    <path
                      fill="currentColor"
                      d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"
                    />
                  </svg>
                </Link>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(null, actions)(EventCard);
