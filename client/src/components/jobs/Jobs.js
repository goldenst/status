import React, { Fragment, useContext } from "react";
import JobContext from "../context/job/JobContext";
import JobItem from "./JobItem";

const Jobs = () => {
  const jobContext = useContext(JobContext);

  const { Jobs } = jobContext;

  return (
    <Fragment>
      
        <JobItem  />
    
    </Fragment>
  );
};

export default Jobs;
