import _ from "lodash";
import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style.css";

class InterestedUser extends Component {
  render() {
    const { eventusers } = this.props;
    console.log(this.props);
    return (
      <div className="user-card-container">
        {_.map(eventusers, item => (
          <div key={item.id} className="user-card">
            <section>
              <h2> {item.name} </h2>
              <p> {item.github_username} </p>
              <img src={item.photo_url} className="user-card-img" />
            </section>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ eventusers }) => ({ eventusers });
export default connect(mapStateToProps, actions)(InterestedUser);
