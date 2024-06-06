import React from 'react';
import { routsPath } from '../../path/routes.js';
import { NavLink } from 'react-router-dom';

const { logIn, signUp } = routsPath;

export const AuthNav = () => {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <NavLink to={logIn} style={{ color: 'inherit' }}>
        Login
      </NavLink>
      <NavLink to={signUp} style={{ color: 'inherit' }}>
        Sign Up
      </NavLink>
    </div>
  );
};
