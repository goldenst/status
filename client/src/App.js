import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import JobsAdd from "./components/pages/JobsAdd";
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import "./App.css";
import Navbar from "./components/layout/Navbar";
import JobState from "./components/context/job/JobState";


const App = () => {
  return (
    <JobState>
      <Router>
        <Fragment>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={JobsAdd} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </JobState>
  );
};

export default App;
