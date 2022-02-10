import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import { Favorites } from '../components/Favorites/Favorites';
import { KingDeals } from '../components/KingDeals/KingDeals';
import { Menu } from '../components/Menu/Menu';
import { Navbar } from '../components/Navbar/Navbar';
import { Slideshow } from '../components/Slideshow/Slideshow';
import { Banner1, Banner2 } from '../public/images/index';
import { BKSpecials } from '../components/BKSpecials/BKSpecials';
import { Footer } from '../components/Footer/Footer';
import { Backdrop } from '../components/UI/Backdrop/Backdrop';
import { Login } from '../components/Login/Login';

const Home: NextPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <div className={showLogin ? 'hidden-scrollbar' : ''}>
      <Navbar auth={auth} setShowLogin={setShowLogin} />
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
      {showLogin ? (
        <Backdrop>
          <Login setAuth={setAuth} goBack={setShowLogin} />
        </Backdrop>
      ) : null}
    </div>
  );
};

export default Home;
