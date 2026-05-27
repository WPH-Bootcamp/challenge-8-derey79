import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface SolutionCardProps {
  title: string;
  description: string;
  iconImg: string;
  iconAlt?: string;
}

export const HoverCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  iconImg,
  iconAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Added overflow-visible to the root wrapper so the absolute icon can break out safely
    <motion.div
      className='relative h-44 w-72 cursor-pointer rounded-2xl bg-slate-900 p-px flex items-center justify-center m-8'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 20px 40px -15px rgba(59, 130, 246, 0.15)',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Spinning Gradient Border Layer */}
      <AnimatePresence>
        {isHovered && (
          // Added rounded-2xl and overflow-hidden here to constrain the spinning gradient container
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute inset-0 rounded-2xl overflow-hidden'
          >
            <motion.div
              className='absolute inset-[-50%] origin-center'
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 40%, var(--color-primary-200), var(--color-primary-300), var(--color-primary-200))',
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Card Content */}
      {/* Changed border-2 to border-transparent, and added z-10 so it sits cleanly above the animated background */}
      <div className='relative h-full w-full rounded-2xl bg-slate-950 p-4 pt-10 flex flex-col justify-between border-2 border-transparent z-10'>
        {/* Icon Container */}
        <div className='absolute top-0 left-2 w-20 h-20 -translate-y-1/2 flex  items-center justify-center rounded-xl shadow-lg shadow-orange-950/20 z-20'>
          <img
            src={iconImg}
            className='size-full object-contain p-2'
            alt={iconAlt}
          />
        </div>

        <div className='flex flex-col items-start mt-4'>
          <h3 className='mb-2 text-xl font-bold tracking-wide text-left'>
            {title}
          </h3>
          <p className='text-sm items-start text-slate-400 leading-relaxed lines-clamp-2 text-left'>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
