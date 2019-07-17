import React, { Fragment, useContext } from "react";
import JobContext from "../context/job/JobContext";
import JobItem from "./JobItem";

const Jobs = () => {
  const jobContext = useContext(JobContext);

  const { jobs } = jobContext;

  return (
    <Fragment>
    <table>
    <thead>
      <td width="5%">Repair order</td>
      <td width="5%">Vehicle</td>
      <td width="5%">Work Requested</td>
      <td width="5%">Parts</td>
      <td width="5%">Tech</td>
      <td width="5%">Status</td>
      <td width="5%">Promised</td>
      <td width="5%">Priorty</td>
      <td width="10%"></td>

    </thead>
    </table>

      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </Fragment>
  );
};

export default Jobs;
