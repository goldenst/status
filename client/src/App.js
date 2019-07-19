import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import JobsAdd from "./components/pages/JobsAdd";
import Admin from "./components/admin/Admin";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import setAuthToken from './utils/setAuthToken';
import "./App.css";
import Navbar from "./components/layout/Navbar";
import JobState from "./components/context/job/JobState";
import AuthState from "./components/context/auth/AuthState";
import AlertState from "./components/context/alert/AlertState";
import Alerts from './components/layout/Alerts';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <JobState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div>
              <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/add" component={JobsAdd} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </JobState>
    </AuthState>
  );
};

export default App;
