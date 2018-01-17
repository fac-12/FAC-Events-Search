import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize } from "redux-form";
import * as actions from "../actions";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(initialize("ProfileForm", this.props.initialValues));
  }
  componentDidMount() {
    // sets the location on redux state to enable navbar highlighting
    this.props.setLocation(this.props.location.pathname);
  }

  renderInput(field) {
    const { meta: { touched, error } } = field;
    return (
      <div className={field.className}>
        <label>{field.label}</label>
        <div>
          <input
            className={touched && error ? "red profile_input" : "profile_input"}
            type={field.type || "text"}
            readOnly={field.readOnly || false}
            placeholder={field.placeholder || ""}
            {...field.input}
          />
          <div className="profile_error">{touched ? error : ""}</div>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // console.log("values are", values);
    this.props.updateProfile(values, () => {
      this.props.history.push("/events");
    });
  }

  render() {
    // console.log("current state is", this.props.initialValues);
    const { handleSubmit } = this.props;
    return (
      <div className="profile_container">
        <h1> Your Profile </h1>
        <div className="profile_info">
          <form
            className="profile_form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <Field
              className="profile_field"
              label="Github Handle"
              name="github_username"
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
              type="text"
              placeholder="Please enter your cohort number"
              component={this.renderInput}
            />
            <div className="profile_field">
              <label>Brief Bio</label>
              <Field name="bio" component="textarea" />
            </div>
            <button type="submit">Save</button>
          </form>
          <img src={this.props.initialValues.photo_url} alt="user" />
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

const mapStateToProps = ({ auth }) => ({ initialValues: auth });

export default reduxForm({
  validate,
  form: "ProfileForm"
})(connect(mapStateToProps, actions)(ProfilePage));
