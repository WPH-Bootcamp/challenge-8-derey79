import React from 'react';
import type { SectionHeaderProps } from '../../types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={` ${className}`}>
      <h2 className='pb-4 text-section-title text-main-color font-bold'>
        {title}
      </h2>
      <p className='pb-4 text-sm md:text-lg text-content-color'>
        {description}
      </p>
    </div>
  );
};
