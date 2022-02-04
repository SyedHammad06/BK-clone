import type { NextPage } from 'next';
import { FormEventHandler, useRef } from 'react';

const Login: NextPage = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (username.current && password.current) {
      const userName = username.current.value;
      const passWord = password.current.value;
      const body = { username: userName, password: passWord };

      console.log(body);

      fetch('http://localhost:3000/api/auth/credentials', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => submitHandler(event)}>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' id='username' ref={username} />
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' ref={password} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
