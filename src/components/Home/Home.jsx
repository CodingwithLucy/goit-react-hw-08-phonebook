import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="app-name">PHONEBOOK by Lucy</h1>
      <Link to="/login">Log in</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
