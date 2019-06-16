//external
import React, { useReducer } from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
//internal
import './global-scss/shared.scss'; // keep this at the top to control specificity.
import App from './App';
import GlobalContext from './context/GlobalContext/index';
import globalContextState from './context/GlobalContext/globalContextState';
import globalContextReducer from './context/GlobalContext/globalContextReducer';

const history = createBrowserHistory();

function MainJSX(): JSX.Element {
  const [state, dispatch] = useReducer(globalContextReducer, globalContextState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <Router history={history}>
        <App />
      </Router>
    </GlobalContext.Provider>
  )
}

render(<MainJSX />, document.getElementById('app'));
