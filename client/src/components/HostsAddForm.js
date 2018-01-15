import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize } from "redux-form";
import * as actions from "../actions";

class HostsAddForm extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(initialize("HostsForm", this.props.initialValues));
  }

  onCheck = e => {
    const key = e.currentTarget.name.split("_")[1];
    const node = this.props.initialValues[key];
    if (e.target.checked) {
      this.props.addHostInterest(this.props.auth.id, node.id);
    } else {
      this.props.removeHostInterest(this.props.auth.id, node.id);
    }
  };

  renderFields(hosts) {
    return hosts.map((host, index) => (
      <li className="host_list_item" key={host.id}>
        <label>
          <Field
            label={host.name}
            name={`item_${index}`}
            type="checkbox"
            component="input"
            checked={Number(host.case)}
            onChange={this.onCheck}
          />
          {host.name}
        </label>
      </li>
    ));
  }
  render() {
    if (!this.props.initialValues) {
      return;
    }
    return (
      <form className="hosts_options">
        <h2>I am interested in events organized by:</h2>
        <ul>{this.renderFields(this.props.initialValues)}</ul>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

const mapStateToProps = ({ hosts, auth }) => ({ initialValues: hosts, auth });

export default reduxForm({
  validate,
  form: "HostsForm"
})(connect(mapStateToProps, actions)(HostsAddForm));
