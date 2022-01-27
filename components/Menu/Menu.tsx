import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import RightArrow from '../../public/svg/right-arrow.svg';
import {
  MainMenu1,
  MainMenu2,
  MainMenu3,
  MainMenu4,
  MainMenu5,
  MainMenu6,
  MainMenu7,
  MainMenu8,
  MainMenu9,
} from '../../public/images/index';

export const Menu: NextPage = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const ele = document.querySelector('.Menu__bottom');
    if (ele) {
      setScrollPos(ele.scrollLeft);
    }
  }, []);

  const scrollLeft = () => {
    const ele = document.querySelector('.Menu__bottom');
    if (ele) {
      ele.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setScrollPos(0);
    }
  };

  const scrollRight = () => {
    const ele = document.querySelector('.Menu__bottom');
    if (ele) {
      ele.scrollTo({
        top: 0,
        left: ele?.scrollWidth,
        behavior: 'smooth',
      });
      setScrollPos(ele?.scrollWidth);
    }
  };

  return (
    <div className='Menu'>
      <div className='Menu__top'>
        <h2 className='Menu__heading'>Our Menu</h2>
        <div className='Menu__see-all'>
          <p className='Menu__see-all--text'>
            See All
            <RightArrow />
          </p>
        </div>
      </div>
      <div className='Menu__bottom'>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu5} alt='Menu Image 1' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Top Picks</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu4} alt='Menu Image 2' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Home Delight Combos</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu2} alt='Menu Image 3' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Whooper</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu3} alt='Menu Image 4' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Burgers</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu4} alt='Menu Image 5' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Stunner Menu at 50 / 70</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu6} alt='Menu Image 6' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Chicken Wings</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu7} alt='Menu Image 7' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Beverages</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu8} alt='Menu Image 8' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Deserts</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu1} alt='Menu Image 9' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Friends and Family Combo</div>
        </div>
        <div className='Menu__item'>
          <div className='Menu__item--img'>
            <Image src={MainMenu9} alt='Menu Image 10' placeholder='blur' />
          </div>
          <div className='Menu__item--text'>Sides</div>
        </div>
      </div>
      <div className='Menu__arrow--container'>
        <button
          className='Menu__arrow--left'
          disabled={scrollPos === 0}
          onClick={scrollLeft}
        >
          <RightArrow />
        </button>
        <button
          className='Menu__arrow--right'
          disabled={scrollPos > 0}
          onClick={scrollRight}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
