import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation.jsx';
import { Provider } from 'react-redux';
import { store } from '../components/store.js';
import { Layout } from './Layout.js';
import { PrivateRoute } from './PrivateRoute.jsx';
import { RestrictedRoute } from './RestrictedRoute.jsx';
import { refreshUser } from '../redux/auth/authSlice.js';
import { useAuth } from './hooks/useAuth.js';

const HomePage = lazy(() => import('../pages/Home.js'));
const RegisterPage = lazy(() => import('../pages/Register.js'));
const LoginPage = lazy(() => import('../pages/Login.js'));
const ContactsPage = lazy(() => import('../pages/Contacts.js'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  /* return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<RegisterForm />} />
          {isLoggedIn && (
            <Route
              path="/contacts"
              element={((<ContactForm />), (<Filter />), (<ContactList />))}
            />
          )}
        </Routes>
        {isLoggedIn && <UserMenu />}
      </div>
    </Provider>
  );
};
*/

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};
