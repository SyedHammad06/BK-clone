import { NextPage } from 'next';
import Image from 'next/image';

import logo from '../public/images/logo.png';


export const Navbar: NextPage = () => {
  return (
    <div className='Navbar'>
      {/* Logo */}
      <div className="Navbar__logo-container">
        <Image src={logo} alt="Logo" placeholder="blur" />
      </div>
      {/* Center */}
      <div className="Navbar__center">
        {/* Slider */}
        <div className="Navbar__slider-container">
          <div className="Navbar__slider-left">
            <p className="Navbar__slider--text">Dine In/Takeaway</p>
          </div>
          <div className="Navbar__slider">
            <div className="Navbar__slider--round"></div>
          </div>
          <div className="Navbar__slider-right">
            <p className="Navbar__slider--text">Delivery</p>
          </div>
        </div>
        {/* Line */}
        <hr className="Navbar__vertical-line" />
        {/* Location */}
        <div className="Navbar__location-container">
          
        </div>
      </div>
    </div>
  )
}