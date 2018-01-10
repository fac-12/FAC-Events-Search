import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { bindActionCreators } from "redux";

class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <div> Header !</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
