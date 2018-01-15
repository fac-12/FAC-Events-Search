import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

// renderField(field) {
//   const { meta: { touched, error } } = field;
//   // const className = `form-container ${touched && error ? "error" : ""}`;
//   return (
//     <div className="form_field">
//       <label>{field.label}</label>
//       <input type="checkbox" {...field.input} />
//       <div>{touched ? error : ""}</div>
//     </div>
//   );
// }

// onSubmit(values) {

// }

class HostsAddForm extends Component {
  render() {
    return (
      <form
        className="hosts_options"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <h2>I am interested in events organized by:</h2>
        <Field
          label="node-girls"
          name="host_org_name"
          component={this.renderField}
        />
        <Field
          label="Queer-Code-London"
          name="host_org_name"
          component={this.renderField}
        />
        <Field
          label="Founders-&-Coders"
          name="host_org_name"
          component={this.renderField}
        />
        <Field
          label="The-JS-oundabout"
          name="host_org_name"
          component={this.renderField}
        />
        <Field
          label="UX-Playground"
          name="venue_address"
          component={this.renderField}
        />
        <Field
          label="London-Halfstack"
          name="venue_address"
          component={this.renderField}
        />
        <Field
          label="Ladies-of-Code"
          name="venue_address"
          component={this.renderField}
        />
        <Field
          label="Codebar"
          name="venue_address"
          component={this.renderField}
        />
        <Field
          label="Journocoders"
          name="venue_address"
          component={this.renderField}
        />
        <Field
          label="London Node User Group"
          name="venue_address"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

const mapStateToProps = ({ hosts }) => ({ hosts });

export default reduxForm({
  validate,
  form: "PostInterestForm"
})(connect(mapStateToProps, actions)(HostsAddForm));
