import { NextPage } from 'next';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

import { Logo } from '../../public/images/index';
import LocationPin from '../../public/svg/location.svg';
import NearbyStores from '../../public/svg/nearby-stores.svg';
import KingDeals from '../../public/svg/king-deals.svg';
import Profile from '../../public/svg/profile.svg';
import Cart from '../../public/svg/cart.svg';
import Search from '../../public/svg/search.svg';

interface Props {
  auth: boolean;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: NextPage<Props> = ({ auth, setShowLogin }) => {
  const [slider, setSlider] = useState<Boolean>(false);

  return (
    <header>
      <div className='Navbar'>
        {/* Logo */}
        <div className='Navbar__logo-container'>
          <Image src={Logo} alt='Logo' placeholder='blur' />
        </div>
        {/* Center */}
        <div className='Navbar__center'>
          {/* Slider */}
          <div className='Navbar__slider--container'>
            <div className='Navbar__slider--left'>
              <h3
                className={
                  slider
                    ? 'Navbar__slider--text-1 Navbar__slider--text-1--active'
                    : 'Navbar__slider--text-1'
                }
              >
                Dine In/Takeaway
              </h3>
            </div>
            <div
              className={
                slider
                  ? 'Navbar__slider Navbar__slider--active'
                  : 'Navbar__slider'
              }
              onClick={() => setSlider(!slider)}
            >
              <div
                className={
                  slider
                    ? 'Navbar__slider--round Navbar__slider--round--active'
                    : 'Navbar__slider--round'
                }
              ></div>
            </div>
            <div className='Navbar__slider-right'>
              <h3
                className={
                  slider
                    ? 'Navbar__slider--text-2 Navbar__slider--text-2--active'
                    : 'Navbar__slider--text-2'
                }
              >
                Delivery
              </h3>
            </div>
          </div>
          {/* Line */}
          <div className='Navbar__vertical-line'></div>
          {/* Location */}
          <div className='Navbar__location-container'>
            <div className='Navbar__location'>
              <LocationPin />
            </div>
          </div>
        </div>
        {/* Menu */}
        <nav className='Navbar__menu'>
          <div className='Navbar__menu--1 Navbar__menu--item'>
            <NearbyStores />
            <h3 className='Navbar__menu--text'>Nearby Stores</h3>
          </div>
          <div className='Navbar__menu--2 Navbar__menu--item'>
            <KingDeals />
            <h3 className='Navbar__menu--text'>King Deals</h3>
          </div>
          <div
            className='Navbar__menu--3 Navbar__menu--item'
            onClick={() => setShowLogin(true)}
          >
            <Profile />
            <h3 className='Navbar__menu--text'>{auth ? 'Profile' : 'Login'}</h3>
          </div>
          <div className='Navbar__menu--4 Navbar__menu--item'>
            <Cart />
            <h3 className='Navbar__menu--text'>Cart</h3>
          </div>
        </nav>
        {/* Search */}
        <div
          className={
            slider
              ? 'Navbar__search-container Navbar__search-container--active'
              : 'Navbar__search-container'
          }
        >
          <Search />
        </div>
      </div>
    </header>
  );
};
