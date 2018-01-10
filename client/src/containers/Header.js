import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import Navbar from "../components/Navbar";

class Header extends Component {
  renderNav() {
    console.log("render state is:", this.props.auth, this.props.curLocation);
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
