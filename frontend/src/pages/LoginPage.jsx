import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './AuthPage.css'; // import external CSS file

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(undefined);
  const { dispatch } = useContext(UserContext);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const json = await response.json();
      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
    } else {
      const errorMessage = await response.text();
      setError(errorMessage);
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="form">
      <h2>Login</h2>
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
            Password:
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
        <div className="button-container">
          <button type="submit" className="button">Login</button>
          <button type="button" onClick={handleRegisterClick} className="button">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
