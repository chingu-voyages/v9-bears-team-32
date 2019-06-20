import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, Login, Register } from './pages/index';
import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        {/* @TODO create landing page and 404 page */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  )
}

export default App;
