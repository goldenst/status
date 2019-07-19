import React, { useReducer } from "react";
//import uuid from "uuid";
import JobContext from "./JobContext";
import JobReducer from "./JobReducer";
import axios from "axios";

import {
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_JOB,
  JOB_ERROR,
  GET_JOB,
  CLEAR_JOB
} from "../types";

const JobState = props => {
  const initalState = {
    jobs: [],
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(JobReducer, initalState);

  // Get Contacts
  const getJobs = async () => {
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
  const addJob = async job => {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/jobs", job, config);

      dispatch({
        type: ADD_JOB,
        payload: res.data,
        
      });
      
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg
      });
    }
  };

  // delete job
  const deleteJob = async id => {
    try {
      await axios.delete(`/api/jobs/${id}`);

      dispatch({ type: DELETE_JOB, payload: id });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Clear jobs
  const clearJobs = () => {
    dispatch({ type: CLEAR_JOB });
  };

  //set current job

  const setCurrent = job => {
    dispatch({ type: SET_CURRENT, payload: job });
  };

  //clear current

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update job
  const updateJob = async job => {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/api/jobs/${job._id}`, job, config);

      dispatch({
        type: UPDATE_JOB,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg
      });
    }
  };
  //filter job

  // clear filter

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        current: state.current,
        error: state.error,
        getJobs,
        addJob,
        deleteJob,
        setCurrent,
        clearCurrent,
        updateJob,
        clearJobs
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;
