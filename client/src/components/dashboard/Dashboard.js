import React, {useContext, useEffect} from 'react'
import Jobs from '../../components/jobs/Jobs';
import JobForm from '../../components/jobs/JobForm';
import AuthContext from '../context/auth/AuthContext';

const Dashboard = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser()
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <Jobs />
    </div>
  )
}

export default Dashboard
