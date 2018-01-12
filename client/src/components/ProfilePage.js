import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    const { github_username, name, email, cohort, bio } = this.props.auth[0];
    this.state = { github_username, name, email, cohort, bio };
  }
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
                value={`@${this.state.github_username}`}
              />
            </div>
            <div className="profile_field">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>

            <div className="profile_field">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div className="profile_field">
              <label htmlFor="cohort">FAC Cohort:</label>
              <input
                type="number"
                placeholder="Please enter your cohort number"
                id="cohort"
                name="cohort"
                value={this.state.cohort}
                onChange={event =>
                  this.setState({ cohort: event.target.value })
                }
              />
            </div>
            <div className="profile_field">
              <label htmlFor="bio">Brief Bio:</label>
              <textarea
                id="bio"
                name="bio"
                onChange={event => this.setState({ bio: event.target.value })}
              >
                {this.state.bio}
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
