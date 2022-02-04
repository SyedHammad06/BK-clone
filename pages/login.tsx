import type { NextPage } from 'next';
import { FormEventHandler, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login: NextPage = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (username.current && password.current) {
      const userName = username.current.value;
      const passWord = password.current.value;
      const body = { username: userName, password: passWord };
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <h2 onClick={() => signIn()}>Sign in</h2>
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
