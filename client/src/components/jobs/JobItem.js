import React from "react";

const JobItem = ({ jobs }) => {

  //const { order, vehicle, jobdesc, parts, tech, promised, status } = jobs;

  return(
    <div className="card bg-light">
    <div className='row '>
     15845  19 Ford Fusion  Timming Belt water pump  on order ED 11//19  WPO
     <p>
      <button style={{float:'right'}} className='btn btn-dark btn-sm'>Edit</button>
      <button style={{float:'right'}}className='btn btn-danger btn-sm'>Delete</button>
    </p>
    </div>
    
    </div>
  )
  
};

export default JobItem;
