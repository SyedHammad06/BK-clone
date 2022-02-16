import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
// import { useSession, signIn } from 'next-auth/react';
import { NextPage } from 'next';
import Image from 'next/image';

import { Logo2, Google, FB } from '../../public/images';
import BackArrow from '../../public/svg/back-arrow.svg';
import {
  LiteralUnion,
  SignInAuthorisationParams,
  SignInOptions,
} from 'next-auth/react/types';
import { BuiltInProviderType } from 'next-auth/providers';

interface Props {
  setAuth: Dispatch<SetStateAction<boolean>>;
  goBack: Dispatch<SetStateAction<boolean>>;
  signIn: (
    provider?: LiteralUnion<BuiltInProviderType, string> | undefined,
    options?: SignInOptions | undefined,
    authorizationParams?: SignInAuthorisationParams | undefined
  ) => {};
}

export const Login: NextPage<Props> = ({ setAuth, goBack, signIn }) => {
  // const { data: session } = useSession();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [signup, setSignUp] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (
      usernameRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current
    ) {
      usernameRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    }
  }, [signup]);

  // useEffect(() => {
  //   if (session?.user) {
  //     console.log(session.user.name);
  //     setAuth(true);
  //     goBack(false);
  //   }
  // }, []);

  const checkValidity = () => {
    if (passwordRef.current && confirmPasswordRef.current) {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        confirmPasswordRef.current.setCustomValidity("Passwords Don't Match");
      }
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      signup &&
      usernameRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current
    ) {
      const data = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      usernameRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';

      if (!data.success) {
        setError(data.error);
      } else {
        setAuth(true);
        goBack(false);
      }
    } else if (usernameRef.current && passwordRef.current) {
      const data = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      usernameRef.current.value = '';
      passwordRef.current.value = '';

      if (!data.success) {
        setError(data.error);
      } else {
        setAuth(true);
        goBack(false);
      }
    }
  };

  // const handleLogin = async (provider: string) => {
  //   try {
  //     await signIn(provider, { redirect: false });
  //     setAuth(true);
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <div className='Login'>
      <div className='Login__top'>
        <div className='Login__navigation' onClick={() => goBack(false)}>
          <BackArrow />
        </div>
        <div className='Login__img-container'>
          <Image src={Logo2} alt='Logo2' placeholder='blur' />
        </div>
        <h2 className='Login__heading'>{signup ? 'Signup' : 'Login'}</h2>
        <form className='Login__form' onSubmit={(e) => submitHandler(e)}>
          <div>
            <label htmlFor='username'>Username :-</label>
            <input
              type='text'
              id='username'
              maxLength={25}
              placeholder='John Doe'
              autoComplete='off'
              ref={usernameRef}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password :-</label>
            <input
              type='password'
              id='password'
              minLength={8}
              placeholder='Password'
              ref={passwordRef}
              required
            />
          </div>
          {signup ? (
            <div>
              <label htmlFor='confirmPassword'>Confirm Password :-</label>
              <input
                type='password'
                id='confirmPassword'
                minLength={8}
                placeholder='Confirm Password'
                ref={confirmPasswordRef}
                required
              />
            </div>
          ) : null}
          <button
            type='submit'
            className='Login__submit'
            onClick={() => checkValidity()}
          >
            Submit
          </button>
        </form>
        {!signup ? (
          <p className='Login__signup'>
            If your new <u onClick={() => setSignUp(true)}>signup</u>
          </p>
        ) : (
          <p className='Login__signup'>
            Already have an account{' '}
            <u onClick={() => setSignUp(false)}>login</u>
          </p>
        )}
        <div className='Login__or-container'>
          <div className='Login__line Login__line--1'></div>
          <p className='Login__or'>or</p>
          <div className='Login__line Login__line--2'></div>
        </div>
        <div className='Login__alternatives-container'>
          <p className='Login__alternatives--heading'>Login using:</p>
          <div className='Login__alternatives'>
            <button
              onClick={() => signIn('facebook', { redirect: false })}
              className='Login__alternatives--1'
            >
              <Image src={FB} alt='Facebook' width={20} height={20} />
              <p className='Login__alternatives--text'>Facebook</p>
            </button>
            <button
              onClick={() => signIn('google', { redirect: false })}
              className='Login__alternatives--2'
            >
              <Image src={Google} alt='Google' width={20} height={20} />
              <div className='Login__alternatives--text'>Google</div>
            </button>
          </div>
        </div>
      </div>
      <div className='Login__bottom'>
        <p className='Login__legal'>
          By continuing, you agree for our <u>Terms & Conditions</u>,{' '}
          <u>Privacy Policy</u>, and <u>Content Policy</u>.
        </p>
      </div>
      {error ? (
        <p className='Login__error' onClick={() => setError('')}>
          {error}
          <span>&#10006;</span>
        </p>
      ) : null}
    </div>
  );
};
