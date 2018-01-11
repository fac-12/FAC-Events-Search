import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Header extends Component {
  renderNav() {
    switch (this.props.auth) {
    case null:
      return;
    case false:
      return (
        <a className="header_signin" href="/auth/github">
            Sign In
        </a>
      );
    default:
      return <Navbar curLocation={this.props.curLocation} />;
    }
  }

  render() {
    return (
      <nav className="header_container">
        <header className="header_title">
          <Link to={this.props.auth ? "/events" : "/"}>FAC Eventfinder</Link>
        </header>
        {this.renderNav()}
      </nav>
    );
  }
}

const mapStateToProps = ({ auth, curLocation }) => ({ auth, curLocation });
export default connect(mapStateToProps)(Header);
