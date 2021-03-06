import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

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
        <div>
          <input type="text" {...field.input} />
          <div className="form_error">{touched ? error : ""}</div>
        </div>
      </div>
    );
  }

  renderDate(field) {
    const { meta: { touched, error } } = field;
    const className = `${touched && error ? "error" : "form_field"}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="date" {...field.input} />
        <div className="form_error">{touched ? error : ""}</div>
      </div>
    );
  }

  renderTime(field) {
    const { meta: { touched, error } } = field;
    const className = `${touched && error ? "error" : ""}`;
    return (
      <div className="form_field">
        <label>{field.label}</label>
        <input type="time" {...field.input} />
        <div>{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.addEvent(values);
  }

  render() {
    const { handleSubmit, showMessage } = this.props;
    if (showMessage !== null) {
      return (
        <div className="form_message_container">
          <div className="form_message">
            {showMessage}
            <Link
              to="/events"
              onClick={() => {
                this.props.resetMessage("addEvent");
              }}
            >
              Back to Events
            </Link>
            <Link
              to="/event/new"
              onClick={() => {
                this.props.resetMessage("addEvent");
              }}
            >
              Add another event
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="form_container">
        <h1 className="form_title"> Add Event </h1>
        <p>If you have a meetup url, you can leave the other fields blank.</p>
        <form
          className="form_fields_container"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            label="Event Name"
            name="event_name"
            component={this.renderField}
          />
          <Field
            label="Host"
            name="host_org_name"
            component={this.renderField}
          />
          <Field label="Date" name="event_date" component={this.renderDate} />
          <Field label="Time" name="event_time" component={this.renderTime} />
          <Field
            label="Venue Name"
            name="venue_name"
            component={this.renderField}
          />

          <Field
            label="Venue Address"
            name="venue_address"
            component={this.renderField}
          />
          <Field
            label="Post Code"
            name="venue_postcode"
            component={this.renderField}
          />
          <Field
            label="URL"
            name="event_url"
            placeholder="Please enter a event url"
            value={this.state.url}
            onChange={event => this.setState({ url: event.target.value })}
            component={this.renderField}
          />

          <section className="form_interaction">
            <button type="submit">save</button>
            <Link to="/events">cancel</Link>
          </section>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.event_url) {
    errors.event_url = "Please enter a event url";
  }
  return errors;
}

const mapStateToProps = ({ showMessage }) => ({
  showMessage: showMessage.addEvent
});

export default reduxForm({
  validate,
  form: "PostEventForm"
})(connect(mapStateToProps, actions)(AddEventForm));
