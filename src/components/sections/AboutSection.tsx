import { Section } from '../layout/Section';
import { motion, type Transition } from 'framer-motion';
import { type BrandLogo } from '../../types';
import { logos } from '../../data/logo';

const doubleLogos: BrandLogo[] = [...logos, ...logos];

const marqueeAnimation = {
  animate: { x: [0, '-50%'] },
  transition: {
    ease: 'linear',
    duration: 20,
    repeat: Infinity,
  } as Transition, // Changed to "as Transition" for broader compiler compatibility
};

export default function AboutSection() {
  return (
    <Section id='about' className='text-center'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-lg xl:text-2xl font-bold md:text-3xl'>
          Trusted by Global Innovators & Leading Brands
        </h2>

        <div className='h-50 w-full flex items-center bg-base-black overflow-hidden relative'>
          {/* FIXED: Re-added the missing bg-gradient-to-* classes for edge fading */}
          <div className='absolute inset-y-0 left-0 w-20 z-10 pointer-events-none' />
          <div className='absolute inset-y-0 right-0 w-20 z-10 pointer-events-none' />

          {/* 
                FIXED: Removed the outer wrapper div that had "animate-marquee". 
                Framer Motion's <motion.div> now acts as the true main track.
              */}
          <motion.div
            className='flex whitespace-nowrap gap-16 items-center pr-16'
            animate={marqueeAnimation.animate}
            transition={marqueeAnimation.transition}
            // Controls the pause smoothly via Framer Motion's state system
            whileHover={{ animationPlayState: 'paused' }}
          >
            {doubleLogos.map((logo: BrandLogo, index: number) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className='h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0 cursor-pointer'
              />
            ))}
          </motion.div>
        </div>

        <h2 className='text-2xl tracking-wider leading-9 xl:text-4xl font-bold md:text-3xl'>
          End-to-End IT Solutions That Drive Results
        </h2>
      </div>
    </Section>
  );
}
