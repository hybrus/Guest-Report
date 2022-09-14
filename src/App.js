import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/User/Login';
import { PrivateRoute } from './helpers/PrivateRoute';
import { Navigation } from './elements/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import { Visitor } from './components/visitors/Visitor';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact component={Login} path="/login" />
          <PrivateRoute exact component={Dashboard} path="/" />
          <PrivateRoute exact component={Visitor} path="/visitors" />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
