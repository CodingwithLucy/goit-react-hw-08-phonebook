import { useAuth } from '../useAuth.js';
import React from 'react';
import axios from 'axios';

/*export const UserMenu = () => {
  const dispatch = useDispatch();*/

export const UserMenu = () => {
  const { user } = useAuth();
  const handleLogout = async () => {
    try {
      await axios.post(
        'https://connections-api.herokuapp.com/api/users/logout'
      );
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
