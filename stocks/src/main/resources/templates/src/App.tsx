import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './pages';
import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </>
  )
}

export default App;
