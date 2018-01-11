import React from "react";
import { Link } from "react-router-dom";

const highlight = {
  fontWeight: 400,
  color: "#c6971f"
};

const navOptions = {
  paths: ["/events", "/profile", "/hosts", "/about"],
  names: ["Events", "Profile", "Hosts", "About"]
};

const renderLink = (path, name, location) => (
  <li key={path}>
    <Link to={path} style={location === path ? highlight : {}}>
      {name}
    </Link>
    <span>|</span>
  </li>
);

const Navbar = props => (
  <ul className="nav_container">
    {navOptions.paths.map((item, i) =>
      renderLink(item, navOptions.names[i], props.curLocation)
    )}
    <li>
      <a href="/api/logout">Log out</a>
      <span />
    </li>
  </ul>
);

export default Navbar;
