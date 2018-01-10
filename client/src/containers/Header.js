import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { bindActionCreators } from "redux";
import Navbar from "../components/Navbar";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
    case null:
      return;
    case false:
      return (
        <li>
          <a href="/auth/github"> Sign In </a>
        </li>
      );
    default:
      return <Navbar />;
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div>
            <a> EventFinder </a>
          </div>
          <ul>{this.renderContent()}</ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
