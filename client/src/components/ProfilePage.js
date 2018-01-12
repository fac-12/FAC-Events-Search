import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props.auth);
    this.props.setLocation(this.props.location.pathname);
  }

  render() {
    return (
      <div className="profile_container">
        <h1> Your Profile </h1>
        <div className="profile_info">
          <form className="profile_form">
            <div className="profile_field">
              <label htmlFor="github">Github Handle:</label>
              <input
                readOnly
                id="github"
                name="github"
                value={`@${this.props.auth[0].github_username}`}
              />
            </div>
            <div className="profile_field">
              <label htmlFor="name">Name:</label>
              <input id="name" name="name" value={this.props.auth[0].name} />
            </div>

            <div className="profile_field">
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" value={this.props.auth[0].email} />
            </div>
            <div className="profile_field">
              <label htmlFor="cohort">FAC Cohort:</label>
              <input
                type="number"
                placeholder="Please enter your cohort number"
                id="cohort"
                name="cohort"
              />
            </div>
            <div className="profile_field">
              <label htmlFor="bio">Brief Bio:</label>
              <textarea id="bio" name="bio">
                {this.props.auth[0].bio}
              </textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <img src={this.props.auth[0].photo_url} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(ProfilePage);
