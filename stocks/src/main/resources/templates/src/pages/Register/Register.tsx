// external
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// internal
import { postAjax } from '../../shared/helpers';
import '../../global-scss/sections/credentials.scss';


function Register(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  const register = async () => {
    if(password === confirmPass) {
      const payload: string = JSON.stringify({ username, password, displayName, email });
      postAjax('/register-user', payload);
    } else {
      alert('Passwords do not match');
    }
  }

  return (
    <div className="Global-max-width o-Credentials__wrapper">
      <h1 className="o-Credentials__heading">Register</h1>
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
        <div className="o-Credentials__label">Confirm Password</div>
        <input
          className="Global-input"
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
        />
        <div className="o-Credentials__label">Display Name</div>
        <input
          className="Global-input"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <div className="o-Credentials__label">Email</div>
        <input
          className="Global-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="o-Credentials__button"
          onClick={register}
          type="button"
        >
          Register
        </button>
        <div className="Global-link">
          <Link to="/login">Already Registered?</Link>
        </div>
      </div>
    </div>
  )
}

export default Register;
