import React, { useState, useContext } from "react";
import JobContext from '../context/job/JobContext';

const JobForm = () => {

  const jobContext = useContext(JobContext);

  const [job, setJob] = useState({
    order: "",
    vehicle: "",
    jobdesc: "",
    parts: "",
    tech: "",
    promised: "",
    status: ""
  });

  const { order, vehicle, jobdesc, parts, tech, promised, status } = job;

  const onChange = e =>
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });

    const onSubmit = e => {
      e.preventDefault();
      jobContext.addJob(job)
      setJob({
        order: "",
        vehicle: "",
        jobdesc: "",
        parts: "",
        tech: "",
        promised: "",
        status: ""
      })
    }

  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-primary">Add Job</h3>
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
        type="submit"
        value="Add Job"
        className="btn btn-primary btn-block"
      />
    </form>
  );
};

export default JobForm;
