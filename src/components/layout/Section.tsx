import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 lg:py-24 dark:border-gray-700/50 ${className}`.trim()}
    >
      {children}
    </section>
  );
};
