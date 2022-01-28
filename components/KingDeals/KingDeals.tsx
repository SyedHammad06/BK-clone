import { NextPage } from 'next';
import Image from 'next/image';

import { KingDeal1, KingDeal2, KingDeal3 } from '../../public/images/index';

export const KingDeals: NextPage = () => {
  return (
    <div className='KingDeals'>
      <h2 className='KingDeals__heading'>King Deals Of The Day</h2>
      <div className='KingDeals__card--container'>
        <div className='KingDeals__card'>
          <Image src={KingDeal3} alt='Free Delivery' placeholder='blur' />
        </div>
        <div className='KingDeals__card'>
          <Image src={KingDeal1} alt='Deal 1' placeholder='blur' />
        </div>
        <div className='KingDeals__card'>
          <Image src={KingDeal2} alt='Deal 2' placeholder='blur' />
        </div>
      </div>
    </div>
  );
};
