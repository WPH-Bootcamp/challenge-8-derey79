import React from 'react';
import { type SectionProps } from '../../types';
import { useTheme } from '../../context/ThemeContext';

export const SectionLayout: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
}) => {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      // className={`py-12 md:py-20 lg:py-24 dark:border-gray-700/50 overflow-hidden ${className}`.trim()}

      // className={`overflow-hidden ${className}`.trim()}
      className={`overflow-hidden bg-base-white dark:bg-base-black ${className}`.trim()}
    >
      <h1>`{theme}`</h1>
      {children}
    </section>
  );
};
