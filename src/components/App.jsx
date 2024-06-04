import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../components/store.js';
import Home from './Home/Home.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';
import UserMenu from '../components/UserMenu/UserMenu.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    /*<Provider store={store}>
      <div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </Provider>*/
    <Provider store={store}>
      {' '}
      {/* Obejmij RouterProvider Providerem */}
      <div className="App">
        <Navigation /> {/* Wyświetl nawigację na każdej stronie */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Strona główna */}
          <Route
            path="/login"
            element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
          />{' '}
          {/* Formularz logowania */}
          <Route path="/register" element={<RegisterForm />} />{' '}
          {/* Formularz rejestracji */}
          {isLoggedIn && (
            <Route
              path="/contacts"
              element={((<ContactForm />), (<Filter />), (<ContactList />))}
            />
          )}{' '}
          {/* Pełna funkcjonalność aplikacji */}
        </Routes>
        {isLoggedIn && <UserMenu />} {/* Wyświetl UserMenu po zalogowaniu */}
      </div>
    </Provider>
  );
};

export default App;
