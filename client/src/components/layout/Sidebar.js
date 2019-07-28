import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Link to="/event/add" className="btn btn-success btn-block">
      <i className="far fa-calendar-plus" /> New Event
    </Link>
  );
};

export default Sidebar;
