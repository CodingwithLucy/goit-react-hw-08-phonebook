import React from 'react';
import axios from 'axios';

export const RegisterForm = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      const token = response.data.token;
      console.log('Logged in successfully. Token:', token);
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
