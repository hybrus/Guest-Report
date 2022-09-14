import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/user/Login';
import { PrivateRoute } from './helpers/PrivateRoute';
import { Navigation } from './elements/Navigation';
import { Guest } from './components/guest/Guests';
import { GuestForm } from './components/guest/GuestForm';
import { GuestLogout } from './components/guest/GuestLogout';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact component={Login} path="/login" />
          <PrivateRoute exact component={Guest} path="/" />
          <PrivateRoute exact component={GuestForm} path="/guest-in" />
          <PrivateRoute exact component={GuestLogout} path="/guest-out" />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
