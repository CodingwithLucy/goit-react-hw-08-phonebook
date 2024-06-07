import React, { useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { routsPath } from '../path/routes';
import { Link } from 'react-router-dom';

const { login, signUp } = routsPath;

const Home = () => {
  const el = useRef(null);
  const { isLoggedIn } = useAuth();

  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: '20px 100px',
          color: '#fff',
        }}
      >
        <h1
          style={{
            fontSize: '50px',
            textAlign: 'center',
            fontWeight: '700',
            width: '650px',
            marginBottom: '10px',
          }}
        >
          Welcome to the Phonebook
        </h1>
        <div style={{ marginBottom: '40px', height: '60px' }}>
          <span
            style={{
              display: 'inline',
              fontSize: '46px',
              fontWeight: '500',
            }}
            ref={el}
          ></span>
        </div>
        {isLoggedIn ? (
          <p>
            You can view your{' '}
            <Link
              to="/ContactsApp"
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              contacts
            </Link>
          </p>
        ) : (
          <div style={{ flexDirection: 'column' }}>
            <p
              style={{
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              Please{' '}
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  padding: '5px',
                }}
                to={login}
              >
                log in
              </Link>{' '}
              to your account to view your contacts.
            </p>
            <p
              style={{
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              If you are not registered yet, please{' '}
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  padding: '5px',
                }}
                to={signUp}
              >
                register
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
