import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/event';
import { deleteEvent, updateEvent } from '../../actions/event';

const Events = ({
  getEvents,
  deleteEvent,
  event: { events },
  auth,
  history,
  updateEvent
}) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  // const [formData, setFormData] = useState({
  //   id: '',
  //   name: '',
  //   date: '',
  //   description: ''
  // });

  // const { id, name, date, description } = formData;

  // const onChange = e =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   updateEvent({ id, name, description, date });
  //   history.push('/dashboard');
  // };

  if (events) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-calendar-alt" /> Events
            </h2>
          </div>
          <div className="col-md-6" />
        </div>

        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {events.map(event1 => (
              <tr key={event1._id}>
                <td>{event1.name}</td>
                <td>{event1.date}</td>
                <td>{event1.description}</td>

                <td>
                  {!auth.loading && auth.user._id === event1.createdBy && (
                    <Fragment>
                      <Link
                        to={`/event/${event1._id}/edit`}
                        className="btn btn-secondary btn-sm mr-3"
                      >
                        Edit
                      </Link>
                      {/* Delete modal */}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target="#exampleModalCenterOne"
                      >
                        <i className="fas fa-times" />
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModalCenterOne"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitleOne"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-body">
                              Are you sure you want to delete this event?
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="btn btn-success"
                                data-dismiss="modal"
                                onClick={e => deleteEvent(event1._id)}
                              >
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getEvents, deleteEvent, updateEvent }
)(Events);
