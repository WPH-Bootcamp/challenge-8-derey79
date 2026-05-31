import React from 'react';
import { type SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`overflow-hidden bg-base-white dark:bg-base-black ${className}`.trim()}
      // className={`overflow-hidden bg-base-white dark:bg-base-black pt-12 pb-8 ${className}`.trim()}
    >
      {children}
    </section>
  );
};
