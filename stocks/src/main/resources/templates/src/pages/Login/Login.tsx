// external
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// internal
import { postAjax } from '../../shared/helpers';
import '../../global-scss/sections/credentials.scss';

function Login(): JSX.Element {
  return (
    <div className="Global-max-width o-Credentials__wrapper">
      <h1 className="o-Credentials__heading">Login</h1>
      <form
        action="/api/login"
        className="o-Credentials__inputs-wrap"
        method="POST"
      >
        <div className="o-Credentials__label">Username</div>
        <input
          className="Global-input"
          id="username"
          name="username"
        />
        <div className="o-Credentials__label">Password</div>
        <input
          className="Global-input"
          id="password"
          name="password"
          type="password"
        />
        <button
          className="o-Credentials__button"
          type="submit"
        >
          Login
        </button>
        <div className="Global-link">
          <Link to="/register">Don't have an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
