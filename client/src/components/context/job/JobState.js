import React, { useReducer } from "react";
import uuid from "uuid";
import JobContext from "./JobContext";
import JobReducer from "./JobReducer";
import axios from "axios";

import {
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_JOB,
  FILTER_JOB,
  CLEAR_FILTER,
  JOB_ERROR,
  GET_JOB
} from "../types";

const JobState = props => {
  const initalState = {
    jobs: [
      {
        order: "23234",
        vehicle: "88 Chevy pu 1500",
        jobdesc: "Water Pump, Radiator, Timming Belt",
        parts: "Back Ordered",
        tech: " ED ",
        promised: "2019-07-20T07:00:00.000Z",
        status: "50% done",
        priorty: 2
      },
      {
        order: "23456",
        vehicle: "92 Chevy pu 1500",
        jobdesc: ", Timming Belt",
        parts: "here",
        tech: " , Joe",
        promised: "2019-07-20T07:00:00.000Z",
        status: "wait for tech",
        priorty: 1
      },
      {
        order: "25856",
        vehicle: "92 Ford Escort",
        jobdesc: " Timming Belt",
        parts: "NA",
        tech: "Mark",
        promised: "2019-07-20T07:00:00.000Z",
        status: "Wait for Auth",
        priorty: 3
      }
    ]
  };
  
  const [state, dispatch] = useReducer(JobReducer, initalState);

  // Get Contacts
  const getJob = async () => {
    try {
      const res = await axios.get("/api/jobs");

      dispatch({
        type: GET_JOB,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response
      });
    }
  };

  // Add Contact
  const addJob = async jobs => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/jobs", jobs, config);

      dispatch({
        type: ADD_JOB,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response
      });
    }
  };

  // delete job

  //set current job

  //clear current

  //update job

  //filter job

  // clear filter

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        addJob
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;
