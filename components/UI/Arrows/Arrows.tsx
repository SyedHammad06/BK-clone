import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import RightArrow from '../../../public/svg/right-arrow.svg';

interface Props {
  className: string;
  menu?: boolean;
}

export const Arrows: NextPage<Props> = ({ className, menu }) => {
  const [width, setWidth] = useState(0);
  const [scrollPos, setScrollPos] = useState(900);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const ele = document.querySelector(className);
    if (ele) {
      setWidth(ele.scrollWidth);
      if (window.innerWidth / ele.scrollWidth > 1.15) {
        console.log(window.innerWidth / ele.scrollWidth);
        setEnd(true);
      }
    }
  }, []);

  const scrollRight = () => {
    const ele = document.querySelector(className);
    if (ele) {
      if (width >= 2700) {
        ele.scrollTo({
          top: 0,
          left: 900,
          behavior: 'smooth',
        });
        setWidth(width - 900);
        setScrollPos(scrollPos + 900);
      } else {
        ele.scrollTo({
          top: 0,
          left: width,
          behavior: 'smooth',
        });
        setEnd(true);
        setWidth(width - 900);
        setScrollPos(scrollPos + 900);
      }
    }
  };

  const scrollLeft = () => {
    const ele = document.querySelector(className);
    if (ele) {
      if (scrollPos >= 2700) {
        ele.scrollTo({
          top: 0,
          left: scrollPos - 1800,
          behavior: 'smooth',
        });
        setWidth(width + 900);
        setScrollPos(scrollPos - 900);
      } else {
        ele.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        setEnd(false);
        setWidth(ele.scrollWidth);
        setScrollPos(scrollPos - 900);
      }
    }
  };

  return (
    <div className='Arrows__container'>
      <button
        className={menu ? 'Arrows__left Arrows__left--menu' : 'Arrows__left'}
        disabled={scrollPos <= 900}
        onClick={scrollLeft}
      >
        <RightArrow />
      </button>
      <button
        className={menu ? 'Arrows__right Arrows__right--menu' : 'Arrows__right'}
        disabled={end}
        onClick={scrollRight}
      >
        <RightArrow />
      </button>
    </div>
  );
};
