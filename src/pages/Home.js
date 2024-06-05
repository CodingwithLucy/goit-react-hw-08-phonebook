import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PHONEBOOK by Lucy</title>
      </Helmet>
      <h1 className="app-name">PHONEBOOK by Lucy</h1>
    </div>
  );
};

export default Home;
