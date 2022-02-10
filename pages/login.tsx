import type { NextPage } from 'next';
import { FormEventHandler, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login: NextPage = () => {
  const username = useRef<HTMLInputElement>(null);
  const username2 = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const password2 = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

  const loginSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (username.current && password.current) {
      const userName = username.current.value;
      const passWord = password.current.value;
      const body = { username: userName, password: passWord };
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((res) => console.log(res));
    }
  };

  const signupSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (username2.current && password2.current) {
      const userName2 = username2.current.value;
      const passWord2 = password2.current.value;
      const body = { username: userName2, password: passWord2 };
      fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((res) => console.log(res));
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        {session ? <h2 onClick={() => signIn()}>Sign in</h2> : null}
        <form onSubmit={(event) => loginSubmitHandler(event)}>
          <label htmlFor='username1'>Username</label>
          <input type='text' name='username' id='username1' ref={username} />
          <br />
          <label htmlFor='password1'>Password</label>
          <input
            type='password'
            name='password'
            id='password1'
            ref={password}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        <h2>SignUp</h2>
        <form onSubmit={(event) => signupSubmitHandler(event)}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' id='username' ref={username2} />
          <br />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            ref={password2}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
