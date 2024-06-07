import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth.js';
import { logout } from '../../redux/auth/operations.js';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = e => {
    dispatch(logout());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '35px',
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        <NavLink
          to="/ContactsApp"
          style={{
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,2)',
            },
            '&:focus': {
              backgroundColor: 'rgba(0,0,0,2)',
            },
            color: 'inherit',
          }}
        >
          Contacts
        </NavLink>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span style={{ fontSize: '16px', lineHeight: 1.6 }}>
          Hello, {user.name}
        </span>
      </div>
      <div>
        <Link
          to="/ContactsApp"
          style={{
            display: 'block',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '8px 15px',
            borderRadius: '10px',
          }}
          onClick={handleLogOut}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
