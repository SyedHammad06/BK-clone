import { NextPage } from 'next';
import Image from 'next/image';
import {
  Showcase1,
  Showcase2,
  Showcase3,
  Showcase4,
} from '../../public/images/index';

export const Slideshow: NextPage = () => {
  return (
    <div className='Slideshow__container'>
      <div className='Slideshow'>
        <div className='Slideshow__slide'>
          <Image src={Showcase1} alt='Slideshow Image' placeholder='blur' />
        </div>
        <div className='Slideshow__slide'>
          <Image src={Showcase2} alt='Slideshow Image' placeholder='blur' />
        </div>
        <div className='Slideshow__slide'>
          <Image src={Showcase3} alt='Slideshow Image' placeholder='blur' />
        </div>
        <div className='Slideshow__slide'>
          <Image src={Showcase4} alt='Slideshow Image' placeholder='blur' />
        </div>
      </div>
    </div>
  );
};
