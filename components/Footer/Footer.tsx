import type { NextPage } from 'next';
import Image from 'next/image';
import { AppStore, LogoLight, PlayStore } from '../../public/images';
import FB from '../../public/svg/fb.svg';
import Insta from '../../public/svg/insta.svg';
import Twitter from '../../public/svg/twitter.svg';
import Youtube from '../../public/svg/youtube.svg';

export const Footer: NextPage = () => {
  return (
    <div className='Footer'>
      <div className='Footer__top'>
        <div className='Footer__col'>
          <h3 className='Footer__sub-heading'>BK Info</h3>
          <ul className='Footer__list'>
            <li className='Footer__items'>About BK</li>
            <li className='Footer__items'>Fresh Taste</li>
            <li className='Footer__items'>Investor Relations</li>
          </ul>
        </div>
        <div className='Footer__col'>
          <h3 className='Footer__sub-heading'>Contact</h3>
          <ul className='Footer__list'>
            <li className='Footer__items'>Help & Support</li>
            <li className='Footer__items'>Write to us:</li>
            <div className='Footer__sub-list'>
              <li className='Footer__items'>Careers</li>
              <li className='Footer__items'>Customer Care</li>
              <li className='Footer__items'>Supply Chain Queries</li>
              <li className='Footer__items'>Investor Relations</li>
              <li className='Footer__items'>Corporate Communication</li>
              <li className='Footer__items'>Franchising</li>
            </div>
          </ul>
        </div>
        <div className='Footer__col'>
          <h3 className='Footer__sub-heading'>BK Cares</h3>
          <ul className='Footer__list'>
            <li className='Footer__items'>Nutrition Information</li>
            <li className='Footer__items'>Creating Brighter Futures</li>
            <li className='Footer__items'>Trust & Taste</li>
            <li className='Footer__items'>Covid-19 Safety</li>
          </ul>
        </div>
        <div className='Footer__col'>
          <h3 className='Footer__sub-heading'>Legal</h3>
          <ul className='Footer__list'>
            <li className='Footer__items'>Terms and Conditions</li>
            <li className='Footer__items'>Privacy Policy</li>
          </ul>
        </div>
        <div className='Footer__col'>
          <h3 className='Footer__sub-heading'>Download our app</h3>
          <div className='Footer__img-container'>
            <div>
              <Image src={AppStore} alt='app store image' placeholder='blur' />
            </div>
            <div>
              <Image
                src={PlayStore}
                alt='play store image'
                placeholder='blur'
              />
            </div>
          </div>
        </div>
      </div>
      <hr className='Footer__divider' />
      <div className='Footer__bottom'>
        <div className='Footer__img-container'>
          <Image
            src={LogoLight}
            alt='logo'
            width={50}
            height={50}
            placeholder='blur'
          />
        </div>
        <p className='Footer__copyright'>
          TM & Copyright 2019 Burger King India Limited. All Rights Registered.
        </p>
        <div className='Footer__socials'>
          <FB />
          <Insta />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </div>
  );
};
