import React, { useReducer } from "react";
import uuid from "uuid";
import JobContext from "./JobContext";
import JobReducer from "./JobReducer";

import {
  ADD_JOB,
  DELETE_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_JOB,
  FILTER_JOB,
  CLEAR_FILTER
} from '../types';

const JobState = props => {
  const initalState = {
   order: null,

    
  }

  const [state, dispatch] = useReducer(JobReducer, initalState)

  // Get Contacts
  const getJobs = async () => {
    try {
      const res = await axios.get('/api/jobs');

      dispatch({
        type: GET_JOBD,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

   // Add Contact
   const addContact = async jobs => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/jobs', jobs, config);

      dispatch({
        type: ADD_JOB,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
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
      job: state.job,
      addJob
   }} >
   {props.children}
   </JobContext.Provider>
 )
}

export default JobState
