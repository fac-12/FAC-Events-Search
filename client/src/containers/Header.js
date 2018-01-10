import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { bindActionCreators } from "redux";

class Header extends Component {
  render() {
    return <div> Header !</div>;
  }
}

export default Header;
