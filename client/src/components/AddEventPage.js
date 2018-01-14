import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { addEvent, manualAddEvent } from "../actions/eventActions";

class AddEventForm extends Component {
  constructor() {
    super();
    this.state = { url: "" };
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    // const className = `form-container ${touched && error ? "error" : ""}`;
    return (
      <div className="form_field">
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        <div>{touched ? error : ""}</div>
      </div>
    );
  }

  checkMeetup = url => {
    if (url.includes("www.meetup.com")) {
      const id = url.split("/")[5];
      this.props.addEvent(id);
    } else {
      //handle if not a meetup url
    }
  };

  onSubmit(values) {
    this.props.manualAddEvent(values, () => {
      this.props.history.push("/events");
    });
  }

  clickHandler = e => {
    e.preventDefault();
    this.checkMeetup(this.state.url);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form_container">
        <h1 className="form_title"> Add Event </h1>
        <p>If you have a meetup url, you can leave the other fields blank.</p>
        <form
          className="form_fields_container"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <section class="form_left">
            <Field
              label="EventName"
              name="EventName"
              component={this.renderField}
            />
            <Field
              label="startDate"
              name="startDate"
              component={this.renderField}
            />
            <Field label="Host" name="Host" component={this.renderField} />
            <Field label="Time" name="Time" component={this.renderField} />
          </section>
          <section class="form_right">
            <Field
              label="VenueName"
              name="VenueName"
              component={this.renderField}
            />

            <Field
              label="VenueAddress"
              name="VenueAddress"
              component={this.renderField}
            />
            <Field
              label="PostCode"
              name="PostCode"
              component={this.renderField}
            />
            <Field
              label="Url"
              name="Url"
              value={this.state.url}
              onChange={event => this.setState({ url: event.target.value })}
              component={this.renderField}
            />
          </section>
          <section className="interaction">
            <label>
              <button type="submit" onClick={this.clickHandler}>
                save
              </button>
            </label>
            <Link to="/events">cancel</Link>
          </section>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

export default reduxForm({
  validate,
  form: "PostEventForm"
})(connect(null, { addEvent, manualAddEvent })(AddEventForm));
