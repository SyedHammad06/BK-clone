import type { NextPage } from 'next';
import { FormEventHandler, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { StoresType } from '../models/Stores';

const Login: NextPage = () => {
  const name = useRef<HTMLInputElement>(null);
  const time = useRef<HTMLInputElement>(null);
  const time2 = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const distance = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

  const loginSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      name.current &&
      time.current &&
      address.current &&
      distance.current &&
      time2.current
    ) {
      const body: StoresType = {
        name: name.current.value,
        address: address.current.value,
        distance: Number(distance.current.value),
        timings: [time.current.value, time2.current.value],
      };
      fetch('http://localhost:3000/api/stores', {
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
        <h1>Stores</h1>
        <form onSubmit={(event) => loginSubmitHandler(event)}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' ref={name} />
          <br />
          <label htmlFor='timings'>Timing:</label>
          <input type='time' name='timings' id='timings' ref={time} />
          <input type='time' name='timings' id='timings2' ref={time2} />
          <br />
          <label htmlFor='name'>Address:</label>
          <input type='text' name='name' id='name' ref={address} />
          <label htmlFor='name2'>Distance:</label>
          <input type='text' name='name' id='name2' ref={distance} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
