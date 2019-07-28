import axios from 'axios';
import {
  GET_EVENTS,
  GET_EVENT,
  EVENT_ERROR,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from './types';

export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/events');

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getEventById = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/events/${id}`);

    dispatch({
      type: GET_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const addEvent = ({ name, date, description }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    name,
    date,
    description
  });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/events',
      body,
      config
    );

    dispatch({
      type: ADD_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });

    // console.error(err);
    // dispatch({
    //   type: EVENT_ERROR
    // });
  }
};

export const updateEvent = ({
  id,
  name,
  date,
  description
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    id,
    name,
    date,
    description
  });

  try {
    const res = await axios.put(
      `http://localhost:5000/api/events/${id}`,
      body,
      config
    );

    dispatch({
      type: UPDATE_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });

    // console.error(err);
    // dispatch({
    //   type: EVENT_ERROR
    // });
  }
};

export const deleteEvent = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/api/events/${id}`);

    dispatch({
      type: DELETE_EVENT,
      payload: { id }
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
