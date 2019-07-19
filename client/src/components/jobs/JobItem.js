import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import JobContext from "../context/job/JobContext";
import Moment from 'react-moment';


const JobItem = ({ job }) => {
  const jobContext = useContext(JobContext);
  const { deleteJob, setCurrent, clearCurrent } = jobContext;

  const { id, order, vehicle, jobdesc, parts, tech, promised, status, diag } = job;
  const dateToFormat = promised;
  
  

  const onDelete = () => {
    deleteJob(id);
    clearCurrent();
  };

  return (
    <div className="card">
      <div className="">
        <div className="row">
          <div className="col-1">{order}</div>
          <div className="col-2">{vehicle}</div>
          <div className="col-2">{jobdesc}</div>
          <div className="col-1">{parts}</div>
          <div className="col-1">{tech}</div>
          <div className="col-1">{status}{' '}{diag ? <i className="fas fa-heartbeat fa-lg"></i> : null }</div>
          <div className="col-1"><Moment  format="ddd/MM/DD HH:mm">{dateToFormat}</Moment></div>
          <div className="col-2">
            <button
              onClick={onDelete}
              style={{ float: "right" }}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
            <button
              onClick={() => setCurrent(job)}
              style={{ float: "right" }}
              className="btn btn-dark btn-sm"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobItem;
