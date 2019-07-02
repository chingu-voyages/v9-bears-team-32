// external
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../App';

// internal
import { postAjax } from '../../shared/helpers';
import '../../global-scss/sections/credentials.scss';


function Register(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const register = async () => {
    if(password === confirmPass) {
      const payload: string = JSON.stringify({ username, password, displayName, email });
      postAjax('/register-user', payload);
      history.push('/login');
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
