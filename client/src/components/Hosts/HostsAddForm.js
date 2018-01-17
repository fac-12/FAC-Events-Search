import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize } from "redux-form";
import * as actions from "../../actions";

class HostsAddForm extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(initialize("HostsForm", this.props.initialValues));
  }

  onCheck = e => {
    const id = e.currentTarget.name.split("_")[1];
    if (e.target.checked) {
      this.props.addHostInterest(this.props.auth.id, id);
    } else {
      this.props.removeHostInterest(this.props.auth.id, id);
    }
  };

  renderFields(hosts) {
    return _.map(hosts, (host, index) => (
      <li className="host_list_item" key={host.id}>
        <label className="host_list_item_label">
          <Field
            label={host.name}
            name={`item_${host.id}`}
            type="checkbox"
            component="input"
            checked={host.suggested}
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
        <section className="host_interest_container">
          <h2 className="host_options_message">
            I am interested in events organized by:
          </h2>
          <ul className="host_list">
            {this.renderFields(this.props.initialValues)}
          </ul>
        </section>
      </form>
    );
  }
}

const mapStateToProps = ({ hosts, auth }) => ({ initialValues: hosts, auth });

export default reduxForm({
  form: "HostsForm"
})(connect(mapStateToProps, actions)(HostsAddForm));
