import React from "react";
import { Link } from 'react-router-dom'

const JobItem = ({ job }) => {

  const { order, vehicle, jobdesc, parts, tech, promised, status } = job;

  return(
    <div className='card'>
      <table className='table'>
      <tbody>
      <tr>
        <td width="5%">{job.order}</td>
        <td width="5%">{job.vehicle}</td>
        <td width="5%">{job.jobdesc}</td>
        <td width="5%">{job.parts}</td>
        <td width="5%">{job.tech}</td>
        <td width="5%">{job.status}</td>
        <td width="5%">{job.priorty}</td>
        <td width="2%">
        <button style={{float:'right'}} className='btn btn-dark btn-sm'>Edit</button>
          <button style={{float:'right'}} className='btn btn-danger btn-sm'>Delete</button>
        </td>
      </tr>
      </tbody>
      </table>
        </div>

  )
  
};

export default JobItem;
