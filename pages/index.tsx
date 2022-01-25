import type { NextPage } from 'next';
import { HomePage } from '../components/HomePage/HomePage';
import { Navbar } from '../components/Navbar/Navbar';
import { Slideshow } from '../components/Slideshow/Slideshow';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
    </>
  );
};

export default Home;
