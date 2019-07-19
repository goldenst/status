import React, { Fragment, useContext, useEffect } from "react";
import JobContext from "../context/job/JobContext";
import JobItem from "./JobItem";
import { Link } from 'react-router-dom';

const Jobs = () => {
  
  const jobContext = useContext(JobContext);

  const { jobs, getJobs, loading } = jobContext;

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  },[])

  if(jobs !== null && jobs.length === 0 && !loading) {
    return <h3>Please Add A Job </h3>
  }

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
            <Link to='/add' className='btn btn-danger'>Add Job</Link>
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
