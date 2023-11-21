import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiURI } from '../apiURL';

export const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint for sign-up
      const response = await axios.post(`${ apiURI }/login`, {
        email,
        password,
      });

      // Handle the response (e.g., show a success message)
      console.log('Sign-in successful:', response.data);
      alert( response.data.message)
      if (response.data.role === 'admin') {
        navigateTo('/appointments')
      }


    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Sign-in failed:', error.response.data);
      alert(error.response.data.message);
    }
  };


  return (
    <div className="login-container">
      <h1>Hospital Management</h1>
      <div className="form" id="login-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            id="login-email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="login-password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>

        <p id="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
