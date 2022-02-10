import { NextPage } from 'next';

export const Backdrop: NextPage = ({ children }) => {
  return <div className='Backdrop'>{children}</div>;
};
