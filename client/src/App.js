import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import JobsAdd from "./components/pages/JobsAdd";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import JobState from "./components/context/job/JobState";

const App = () => {
  return (
    <JobState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={JobsAdd} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </JobState>
  );
};

export default App;
