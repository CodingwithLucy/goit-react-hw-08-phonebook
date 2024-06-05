import React from 'react';
import axios from 'axios';

export const LoginForm = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/api/users/login',
        { email, password }
      );
      const token = response.data.token;
      console.log('Logged in successfully. Token:', token);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
