import type { NextPage } from 'next';
import Image from 'next/image';

import { Favorites } from '../components/Favorites/Favorites';
import { KingDeals } from '../components/KingDeals/KingDeals';
import { Menu } from '../components/Menu/Menu';
import { Navbar } from '../components/Navbar/Navbar';
import { Slideshow } from '../components/Slideshow/Slideshow';
import { Banner1, Banner2 } from '../public/images/index';
import { BKSpecials } from '../components/BKSpecials/BKSpecials';
import { Footer } from '../components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Menu />
      <KingDeals />
      <Favorites />
      <div className='banner'>
        <Image
          src={Banner1}
          className='rounded-banner'
          alt='banner-img'
          layout='responsive'
          placeholder='blur'
        />
      </div>
      <BKSpecials />
      <div className='banner'>
        <Image
          src={Banner2}
          className='rounded-banner'
          alt='banner-img'
          layout='responsive'
          placeholder='blur'
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
