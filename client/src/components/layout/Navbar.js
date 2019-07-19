import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Navbar = (title, icon) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fas fa-tools" /> <span>Status Board</span>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/add">Add Job</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Status Board",
  icon: "fas fa-tools"
};

export default Navbar;
