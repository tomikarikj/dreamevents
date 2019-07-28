import React from 'react';
import Events from '../events/Events';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="row mt-4">
      <div className="col-md-10">
        <Events />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
