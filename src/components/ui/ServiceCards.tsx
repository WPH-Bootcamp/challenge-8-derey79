import { Card } from './Card';
// import ItIcon from '../../assets/it-consulting.png';
import phoneIcon from '../../assets/mobile-app.png';
import webIcon from '../../assets/it-Infrastructure.png';
import quotesIcon from '../../assets/quote-filled.png';

// import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Mobile App Development',
    desc: 'Native & cross-platform apps tailored to user needs.',
    icon: phoneIcon,
  },
  {
    id: 2,
    title: 'Web Development',
    desc: 'High-performance websites built with modern frameworks.',
    icon: webIcon,
  },
  {
    id: 3,
    title: 'UI/UX Product Design',
    desc: 'Beautiful and intuitive user interfaces designed for conversion.',
    icon: quotesIcon,
  },
];

export const ServiceCards = () => {
  return (
    <section className='min-h-screen bg-black px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto mb-12'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          {servicesData.map((service) => (
            <Card
              key={service.id}
              iconUrl={service.icon}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
