import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import {
  Showcase1,
  Showcase2,
  Showcase3,
  Showcase4,
} from '../../public/images/index';

export const Slideshow: NextPage = () => {
  const [current, setCurrent] = useState(1);
  const [clearing, setClearing] = useState(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    if (!clearing) {
      run();
    }
  }, [current]);

  const run = () => {
    timeout = setTimeout(() => {
      current === 4 ? setCurrent(1) : setCurrent(current + 1);
    }, 4000);
  };

  const clear = (id: number) => {
    setClearing(true);
    clearTimeout(timeout);
    setCurrent(id);
    setClearing(false);
  };

  return (
    <div className='Slideshow'>
      <Image
        className={
          current === 1
            ? 'Slideshow__slide Slideshow__slide--active'
            : 'Slideshow__slide'
        }
        src={Showcase1}
        layout='fill'
        objectFit='cover'
        alt='Slideshow Image'
        placeholder='blur'
      />
      <Image
        className={
          current === 2
            ? 'Slideshow__slide Slideshow__slide--active'
            : 'Slideshow__slide'
        }
        src={Showcase2}
        layout='fill'
        objectFit='cover'
        alt='Slideshow Image'
        placeholder='blur'
      />
      <Image
        className={
          current === 3
            ? 'Slideshow__slide Slideshow__slide--active'
            : 'Slideshow__slide'
        }
        src={Showcase3}
        layout='fill'
        objectFit='cover'
        alt='Slideshow Image'
        placeholder='blur'
      />
      <Image
        className={
          current === 4
            ? 'Slideshow__slide Slideshow__slide--active'
            : 'Slideshow__slide'
        }
        src={Showcase4}
        layout='fill'
        objectFit='cover'
        alt='Slideshow Image'
        placeholder='blur'
      />
      <div className='Slideshow__dots-container'>
        <div
          className={
            current === 1
              ? 'Slideshow__dots Slideshow__dots--active'
              : 'Slideshow__dots'
          }
          onClick={() => clear(1)}
        ></div>
        {/* Dots */}
        <div
          className={
            current === 2
              ? 'Slideshow__dots Slideshow__dots--active'
              : 'Slideshow__dots'
          }
          onClick={() => clear(2)}
        ></div>
        <div
          className={
            current === 3
              ? 'Slideshow__dots Slideshow__dots--active'
              : 'Slideshow__dots'
          }
          onClick={() => clear(3)}
        ></div>
        <div
          className={
            current === 4
              ? 'Slideshow__dots Slideshow__dots--active'
              : 'Slideshow__dots'
          }
          onClick={() => clear(4)}
        ></div>
      </div>
    </div>
  );
};
