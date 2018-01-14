import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { addEvent } from "../actions/eventActions";

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

  checkMeetup = values => {
    if (values.Url.includes("www.meetup.com")) {
      const id = values.Url.split("/")[5];
      this.props.addEvent(id);
    } else {
      this.props.addEvent(values);
    }
  };

  onSubmit(values) {
    this.checkMeetup(values);
  }

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

          <section className="interaction">
            <label>
              <button type="submit">save</button>
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
})(connect(null, { addEvent })(AddEventForm));
