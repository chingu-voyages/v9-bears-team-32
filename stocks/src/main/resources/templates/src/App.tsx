import React, { useReducer } from 'react';
import Routes from './Routes';
import GlobalContext from './context/GlobalContext/index';
import globalContextState from './context/GlobalContext/globalContextState';
import globalContextReducer from './context/GlobalContext/globalContextReducer';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import './App.scss';

const history = createBrowserHistory();

function App(): JSX.Element {
  const [state, dispatch] = useReducer<any>(globalContextReducer, globalContextState);

  return (
    <>
      <GlobalContext.Provider value={{state, dispatch}}>
        <Router history={history}>
          <Routes/>
        </Router>
      </GlobalContext.Provider>
    </>
  )
}

export default App;
