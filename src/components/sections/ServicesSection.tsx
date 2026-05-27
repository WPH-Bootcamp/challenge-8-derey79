// import React from 'react';
import { Section } from '../layout/Section';
import { ZigZagTimeline } from './ZigZagTimeline';
import { dataTimeLine } from '../../data/timeline';
// import { ServiceCards } from './ServiceCards';
import { HoverCard } from '../ui/CardSample';

import phoneIcon from '../../assets/mobile-app.png';
import webIcon from '../../assets/it-Infrastructure.png';
import ItIcon from '../../assets/it-consulting.png';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'Build fast, scalable, and SEO-friendly websites.',
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
    icon: ItIcon,
  },
  {
    id: 4,
    title: 'UI/UX Product Design',
    desc: 'Beautiful and intuitive user interfaces designed for conversion.',
    icon: ItIcon,
  },
  {
    id: 5,
    title: 'UI/UX Product Design',
    desc: 'Beautiful and intuitive user interfaces designed for conversion.',
    icon: ItIcon,
  },
  {
    id: 6,
    title: 'UI/UX Product Design',
    desc: 'Beautiful and intuitive user interfaces designed for conversion.',
    icon: ItIcon,
  },
];

export default function ServicesSection() {
  return (
    <Section id='service' className='text-center'>
      <div className='flex flex-col gap-3 md:gap-4'>
        <h2 className='text-2xl font-bold tracking-wider leading-9 md:text-3xl xl:text-4xl'>
          Our Process
        </h2>
        <p className='pb-4 text-sm md:text-lg font-medium'>
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>
      <div className='min-h-screen bg-base-black py-10 '>
        <ZigZagTimeline items={dataTimeLine} />
      </div>

      <div className='flex flex-col gap-3 md:gap-4'>
        <h2 className='text-2xl font-bold tracking-wider leading-9 md:text-3xl xl:text-4xl'>
          Smart IT Solutions That Grow With You
        </h2>
        <p className='pb-4 text-sm md:text-lg font-medium'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      {/* <div className='min-h-screen bg-base-black py-10 '>
        <ServiceCards />
      </div>

      <div className='flex flex-col gap-3 md:gap-4'>
        <h2 className='text-2xl font-bold tracking-wider leading-9 md:text-3xl xl:text-4xl'>
          Our Process
        </h2>
        <p className='pb-4 text-sm md:text-lg font-medium'>
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div> */}

      {/* <div className='mx-auto grid  max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center rounded-2xl p-4'> */}
      <div className='mx-auto grid  max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center rounded-2xl p-4'>
        {servicesData.map((service) => (
          <HoverCard
            // key={service.id}
            iconImg={service.icon}
            title={service.title}
            description={service.desc}
          />
        ))}
      </div>
    </Section>
  );
}
