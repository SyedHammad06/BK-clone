import { NextPage } from 'next';
import Image from 'next/image';

import Veg from '../../public/svg/veg.svg';
import NonVeg from '../../public/images/chicken.png';
import { BS1, BS2, BS3, BS4, BS5, BS6, BS7 } from '../../public/images/index';
import { Arrows } from '../UI/Arrows/Arrows';

export const BKSpecials: NextPage = () => {
  return (
    <div className='BK-Specials'>
      {/* Heading */}
      <div className='BK-Specials__top'>
        <h2 className='BK-Specials__heading'>BK Specials</h2>
      </div>
      <div className='BK-Specials__bottom'>
        {/* BK-Specials */}
        <div className='BK-Specials__card-container'>
          <div className='BK-Specials__card--row BK-Specials__card--row--1'>
            {/* 1 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS1}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  objectFit='cover'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>Cheese Meltdown</h3>
                  <Veg />
                </div>
                <p className='BK-Specials__card--contents'>
                  A BK Original Burger With Cheese oozing Spicy Veg.{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 169</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS2}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>
                    Crispy Veg Burger
                  </h3>
                  <Veg />
                </div>
                <p className='BK-Specials__card--contents'>
                  Crispy Veg Patty Burger, our Best Seller.{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 55</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS3}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>
                    Fiery Chicken Burger
                  </h3>
                  <img src={NonVeg.src} alt='Veg or Non-veg?' />
                </div>
                <p className='BK-Specials__card--contents'>
                  Too hot to handle chicken burger. You are warned!{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 179</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS4}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>
                    BK Classic Chicken
                  </h3>
                  <img src={NonVeg.src} alt='Veg or Non-veg?' />
                </div>
                <p className='BK-Specials__card--contents'>
                  Our tribute to the classic american taste.{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 99</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
          </div>
          <div className='BK-Specials__card--row'>
            {/* 5 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS5}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>
                    Crispy Chicken Burger
                  </h3>
                  <img src={NonVeg.src} alt='Veg or Non-veg?' />
                </div>
                <p className='BK-Specials__card--contents'>
                  Crispy Chicken Patty Burger, out best seller.{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 80</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS6}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>BK Classic Veg</h3>
                  <Veg />
                </div>
                <p className='BK-Specials__card--contents'>
                  Our tribute to the classic american veg burger.{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 79</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div className='BK-Specials__card'>
              <div className='BK-Specials__card--left'>
                <Image
                  src={BS7}
                  className='rounded-img'
                  alt='BK-Specials Image'
                  layout='fill'
                />
              </div>
              <div className='BK-Specials__card--right'>
                <div className='BK-Specials__card--top'>
                  <h3 className='BK-Specials__card--title'>Fries (King)</h3>
                  <Veg />
                </div>
                <p className='BK-Specials__card--contents'>
                  The perfect crispy partner.{' '}
                </p>
                <div className='BK-Specials__card--bottom'>
                  <h3 className='BK-Specials__card--price'>&#8377; 99</h3>
                  <button className='BK-Specials__card--btn'>ADD +</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <Arrows className='.BK-Specials__card-container' />
      </div>
    </div>
  );
};
