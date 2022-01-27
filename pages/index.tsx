import type { NextPage } from 'next';
import { Menu } from '../components/Menu/Menu';
import { Navbar } from '../components/Navbar/Navbar';
import { Slideshow } from '../components/Slideshow/Slideshow';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Menu />
    </>
  );
};

export default Home;
