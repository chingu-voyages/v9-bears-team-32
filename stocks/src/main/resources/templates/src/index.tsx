//external
import React from 'react';
import { render } from 'react-dom';
//internal
import './global-scss/shared.scss'; // keep this at the top to control specificity.
import App from './App';

render(<App />, document.getElementById('app'));
