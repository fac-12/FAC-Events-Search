import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { bindActionCreators } from "redux";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <a> EventFinder </a>
        </div>
        <ul>
          <a href="/auth/github"> Sign In </a>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
