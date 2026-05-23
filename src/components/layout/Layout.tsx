import React from 'react';
import { type LayoutProps } from '../../types';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='mx-auto min-h-screen max-w-7xl overflow-hidden bg-base-black px-4 lg:px-32'>
      {children}
    </div>
  );
};
