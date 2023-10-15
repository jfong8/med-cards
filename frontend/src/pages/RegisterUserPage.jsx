import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterUserPage.css'; // import external CSS file

function Register() {
  // Define state variables to store user input
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication here (right now hard coded to username:cs, password:222)
    if (username === 'cs' && password === '222') {
      navigate('/carousel');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
