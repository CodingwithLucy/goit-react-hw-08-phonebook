import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // Obsługa zalogowanych danych (np. wysłanie na serwer)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        ref={register({ required: true })}
      />
      {errors.email && <p>Email is required</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
