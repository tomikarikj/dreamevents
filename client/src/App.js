import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/layout/Navbar/Navbar';
import Dashboard from './components/layout/Dashboard';
import CreateEvent from './components/events/CreateEvent';
import EditEvent from './components/events/EditEvent';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Fragment>
              <div className="container">
                <Redirect exact from="/" to="/login" />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/event/add" component={CreateEvent} />
                <PrivateRoute
                  exact
                  path="/event/:id/edit"
                  component={EditEvent}
                />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </div>
            </Fragment>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
