import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // import external CSS file

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(undefined);
  const [confirmation, setConfirmation] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      setError(undefined);
      setConfirmation('User successfully created');
    } else {
      const errorMessage = await response.text();
      setConfirmation(undefined);
      setError(errorMessage);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">
            Username:
            <br />
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="password">
            Password
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        { error && <p className="error-message">{error}</p> }
        { confirmation && <p className="confirmation-message">{confirmation}</p> }
        <div className="button-container">
          <button type="submit" className="button">Register</button>
          <button type="button" style={{ backgroundColor: 'gray' }} onClick={handleLoginClick} className="button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
