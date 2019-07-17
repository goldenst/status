import React, { useState, useContext, useEffect } from "react";
import JobContext from "../context/job/JobContext";

const JobForm = () => {
  const jobContext = useContext(JobContext);

  const { addJob, current, clearCurrent, updateJob } = jobContext;

  useEffect(() => {
    if (current !== null) {
      setJob(current);
    } else {
      setJob({
        order: "",
        vehicle: "",
        jobdesc: "",
        parts: "",
        tech: "",
        promised: "",
        status: "",
        priorty: ""
      });
    }
  }, [jobContext, current]);

  const [job, setJob] = useState({
    order: "",
    vehicle: "",
    jobdesc: "",
    parts: "",
    tech: "",
    promised: "",
    status: "",
    priorty: ""
  });

  const {
    order,
    vehicle,
    jobdesc,
    parts,
    tech,
    promised,
    status,
    priorty
  } = job;

  const onChange = e =>
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if(current === null) {
      addJob(job);
    } else {
      updateJob(job);
    }
    
  };

  const clearAll = () => {
    clearCurrent();
  }

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={onSubmit}>
          <h2 className="text-primary"> {current ? 'Edit Job' : 'Add Job'}</h2>
          <input
            type="text"
            placeholder="Ro #"
            name="order"
            value={order}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Vehicle"
            name="vehicle"
            value={vehicle}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Job Description"
            name="jobdesc"
            value={jobdesc}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Parts Sts"
            name="parts"
            value={parts}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Tech"
            name="tech"
            value={tech}
            onChange={onChange}
          />
          <input
            type="date"
            placeholder="Promised By"
            name="promised"
            value={promised}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={status}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Priorty"
            name="priorty"
            value={priorty}
            onChange={onChange}
          />
          <input
            type="submit"
            value={current ? 'Edit Job' : 'Add Job'}
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
      {current && <div><button className='btn btn-light btn-block'onClick={clearAll} >Clear</button> </div>}
    </div>
  );
};

export default JobForm;
