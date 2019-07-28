import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/event';
import PropTypes from 'prop-types';

const CreateEvent = ({ addEvent, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: ''
  });

  const { name, date, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addEvent({ name, description, date });
    history.push('/dashboard');
  };

  return (
    <div className="mt-4">
      <div className="row">
        <Link to="/dashboard" className="btn-link">
          Back to Events
        </Link>
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-dark">Create and publish your event</span>
              </h1>
              <small className="text-danger">All fields are required</small>
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <label className="mt-2" htmlFor="name">
                    Event name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    required
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={date}
                    required
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    value={description}
                    required
                    onChange={e => onChange(e)}
                  />
                </div>
                <input
                  type="submit"
                  value="Publish"
                  className="btn btn-dark btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateEvent.propTypes = {
  addEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEvent }
)(CreateEvent);
