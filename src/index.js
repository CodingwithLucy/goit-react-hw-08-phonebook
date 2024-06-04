import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/components/store.js';
import App from './components/App.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <RegisterForm /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/contacts', element: <div>Contacts Page</div> },
]);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
