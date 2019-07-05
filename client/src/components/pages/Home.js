import React from 'react'
import Jobs from '../jobs/Jobs';
import JobForm from '../jobs/JobForm';

const Home = () => {
  return (
    <div className='grid-2'>
    <div>
    <JobForm />
    </div>
    <div>
    <Jobs />
    </div>
   
    </div>
  )
}

export default Home
