import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateEvent } from '../../actions/event';
import PropTypes from 'prop-types';

const EditEvent = ({ updateEvent, history }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    date: '',
    description: ''
  });

  const { id, name, date, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    updateEvent({ id, name, description, date });
    history.push('/dashboard');
  };

  return (
    <div>
      <div className="mt-4">
        <div className="row">
          <Link to="/dashboard" className="btn-link">
            Back to Events
          </Link>
        </div>
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-dark">Edit your event</span>
              </h1>
              <small className="text-danger">All fields are required</small>
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="id" className="col-form-label">
                    Event ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={id}
                    required
                    onChange={e => onChange(e)}
                  />
                  <small>
                    The ID can be found in the URL: /event/
                    <span className="text-danger">here-is-the-id</span>/edit
                    <br /> Just copy it and paste it here.
                  </small>
                </div>
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
                  value="Save changes"
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

EditEvent.propTypes = {
  updateEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateEvent }
)(EditEvent);
