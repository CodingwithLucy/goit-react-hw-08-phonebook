import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // Obsługa zarejestrowanych danych (np. wysłanie na serwer)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        ref={register({ required: true })}
      />
      {errors.name && <p>Name is required</p>}

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

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
