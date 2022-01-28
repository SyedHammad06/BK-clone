import type { NextPage } from 'next';
import { KingDeals } from '../components/KingDeals/KingDeals';
import { Menu } from '../components/Menu/Menu';
import { Navbar } from '../components/Navbar/Navbar';
import { Slideshow } from '../components/Slideshow/Slideshow';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Menu />
      <KingDeals />
    </>
  );
};

export default Home;
