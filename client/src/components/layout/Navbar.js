import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import JobContext from '../context/job/JobContext';

import PropTypes from "prop-types";

const Navbar = (title, icon) => {
  const authContext = useContext(AuthContext);
  const jobContext = useContext(JobContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearjobs } = jobContext;

  const onLogout = () => {
    logout();
    clearjobs();

  };

  const authLinks = (
    <Fragment>
      <li>Hello{" "} {user && user.shop}</li>
      <li>
      <Link to="/dashboard">{" "}Job Board</Link>
    </li>
      <li>
      <Link to="/add">Add Job</Link>
    </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fas fa-tools" /> <span>Status Board</span>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
