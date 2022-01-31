import { NextPage } from 'next';
import Image from 'next/image';

import Veg from '../../public/svg/veg.svg';
import NonVeg from '../../public/images/chicken.png';
import {
  Fav1,
  Fav2,
  Fav3,
  Fav4,
  Fav5,
  Fav6,
  Fav7,
} from '../../public/images/index';
import { Arrows } from '../UI/Arrows/Arrows';

export const Favorites: NextPage = () => {
  return (
    <div className='Favorites'>
      {/* Heading */}
      <div className='Favorites__top'>
        <h2 className='Favorites__heading'>Favorites</h2>
      </div>
      <div className='Favorites__bottom'>
        {/* Favorites */}
        <div className='Favorites__card-container'>
          {/* 1 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav1}
                className='rounded-img'
                alt='Favorites Image'
                objectFit='cover'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>
                  Anytime Combo (Chicken)
                </h3>
                <img src={NonVeg.src} alt='Veg or Non-veg?' />
              </div>
              <p className='Favorites__card--contents'>
                2 Crispy Chicken Double Patty + 1 King Peri Peri fries.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 594</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav2}
                className='rounded-img'
                alt='Favorites Image'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>WFH Combo (Veg)</h3>
                <Veg />
              </div>
              <p className='Favorites__card--contents'>
                2 Veg Whoopers + 1 King Peri Peri Fries + 1 Veggie Stripes.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 694</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav3}
                className='rounded-img'
                alt='Favorites Image'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>
                  1 Crispy Chicken + 1 Chocolate Shake
                </h3>
                <img src={NonVeg.src} alt='Veg or Non-veg?' />
              </div>
              <p className='Favorites__card--contents'>
                1 Crispy Chicken + 1 Chocolate Thick Shake.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 218</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav4}
                className='rounded-img'
                alt='Favorites Image'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>
                  1 Crispy Veg + 1 Chocolate Shake
                </h3>
                <Veg />
              </div>
              <p className='Favorites__card--contents'>
                1 Crispy Chicken + 1 Chocolate Thick Shake.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 204</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav5}
                className='rounded-img'
                alt='Favorites Image'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>
                  2 Lite Whooper JR Chicken + 1 King...
                </h3>
                <img src={NonVeg.src} alt='Veg or Non-veg?' />
              </div>
              <p className='Favorites__card--contents'>
                2 Lite Whooper JR Chicken + 1 King Fries + 1 Chicken Fries.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 416</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav6}
                className='rounded-img'
                alt='Favorites Image'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>
                  2 Crispy Chicken Double Patty +...
                </h3>
                <img src={NonVeg.src} alt='Veg or Non-veg?' />
              </div>
              <p className='Favorites__card--contents'>
                2 Crispy Chicken Double Patty + 1 King Fries + 1 Chicken Fries.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 416</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
          {/* 7 */}
          <div className='Favorites__card'>
            <div className='Favorites__card--left'>
              <Image
                src={Fav7}
                className='rounded-img'
                alt='Favorites Image'
                layout='fill'
              />
            </div>
            <div className='Favorites__card--right'>
              <div className='Favorites__card--top'>
                <h3 className='Favorites__card--title'>
                  2 Crispy Veg Double Patty + 1 King Fries...
                </h3>
                <Veg />
              </div>
              <p className='Favorites__card--contents'>
                2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Fries.{' '}
              </p>
              <div className='Favorites__card--bottom'>
                <h3 className='Favorites__card--price'>&#8377; 416</h3>
                <button className='Favorites__card--btn'>ADD +</button>
              </div>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <Arrows className='.Favorites__card-container' />
      </div>
    </div>
  );
};
