import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    const { github_username, name, email, cohort, bio } = this.props.auth[0];
    this.state = { github_username, name, email, cohort, bio };
  }
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }

  renderInput(field) {
    const { meta: { touched, error } } = field;
    console.log(field);
    return (
      <div className={field.className}>
        <label>{field.label}</label>
        <input
          className="profile_input"
          type={field.type || "text"}
          readOnly={field.readOnly || false}
          placeholder={field.placeholder || ""}
          {...field.input}
        />
        <div className="profile_error">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="profile_container">
        <h1> Your Profile </h1>
        <div className="profile_info">
          <form className="profile_form">
            <Field
              className="profile_field"
              label="Github Handle"
              name="github"
              readOnly
              component={this.renderInput}
            />
            <Field
              className="profile_field"
              label="Name"
              name="name"
              component={this.renderInput}
            />
            <Field
              className="profile_field"
              label="Email"
              name="email"
              component={this.renderInput}
            />
            <Field
              className="profile_field"
              label="FAC Cohort"
              name="cohort"
              type="number"
              placeholder="Please enter your cohort number"
              component={this.renderInput}
            />
            <Field
              className="profile_field"
              label="Brief Bio"
              name="bio"
              component={this.renderInput}
            />

            <button type="submit">Submit</button>
          </form>
          <img src={this.props.auth[0].photo_url} alt="user" />
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter a name";
  } else if (values.name.length > 100) {
    errors.name = "Names cannot exceed 100 characters";
  }
  if (!values.email) {
    errors.email = "Please enter your email";
  }
  if (!values.cohort) {
    errors.cohort = "Please enter your cohort number";
  }
  return errors;
}

const mapStateToProps = ({ auth }) => ({ auth, initialValues: auth[0] });

export default reduxForm({ validate, form: "ProfileForm" })(
  connect(mapStateToProps, actions)(ProfilePage)
);
