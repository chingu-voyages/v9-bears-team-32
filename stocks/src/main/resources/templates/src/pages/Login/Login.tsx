// external
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// internal
import { postAjax } from '../../shared/helpers';
import '../../global-scss/sections/credentials.scss';

function Login(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => await postAjax('/login', JSON.stringify({username, password}));

  return (
    <div className="Global-max-width o-Credentials__wrapper">
      <h1 className="o-Credentials__heading">Login</h1>
      <div className="o-Credentials__inputs-wrap">
        <div className="o-Credentials__label">Username</div>
        <input
          className="Global-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="o-Credentials__label">Password</div>
        <input
          className="Global-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          className="o-Credentials__button"
          onClick={login}
        >
          Login
        </button>
        <div className="Global-link">
          <Link to="/register">Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
