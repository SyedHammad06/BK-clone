import { NextPage } from 'next';
import Search from '../public/svg/location.svg';

export const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Search />
    </div>
  );
};
