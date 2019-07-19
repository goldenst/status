import React, { Fragment, useContext } from "react";
import JobContext from "../context/job/JobContext";
import JobItem from "./JobItem";

const Jobs = () => {
  const jobContext = useContext(JobContext);

  const { jobs } = jobContext;

  return (
    <Fragment>
      <div className="card-body text-primary mb-1 pd-1">
        <div className="">
          <div className="row">
            <div className="col-1">Ro#</div>
            <div className="col-2">Vehicle</div>
            <div className="col-2">Work</div>
            <div className="col-1">Parts</div>
            <div className="col-1">Tech</div>
            <div className="col-1">status</div>
            <div className="col-1">Promised</div>
            <div className="col-2" />
          </div>
        </div>
      </div>
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </Fragment>
  );
};

export default Jobs;
