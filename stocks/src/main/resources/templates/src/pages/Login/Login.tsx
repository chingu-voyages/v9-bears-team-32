import React, { useState } from 'react';
import { postAjax } from '../../shared/helpers';
import './Login.scss';

function Login(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => await postAjax('/login', JSON.stringify({username, password}));

  return (
    <div className="Global-max-width c-Login__wrapper">
      <h1 className="c-Login__heading">Login</h1>
      <div className="c-Login__inputs-wrap">
        <div className="c-Login__label">Username</div>
        <input
          className="Global-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="c-Login__label">Password</div>
        <input
          className="Global-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          className="c-Login__button"
          onClick={login}
        >
          Login
        </button>
        <div className="c-Login__no-account">Don't have an account?</div>
      </div>
    </div>
  )
}

export default Login;
