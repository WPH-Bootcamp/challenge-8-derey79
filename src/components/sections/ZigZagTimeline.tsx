import React from 'react';
import { motion } from 'framer-motion';
import { type ZigZagTimelineProps } from '../../types';

export const ZigZagTimeline: React.FC<ZigZagTimelineProps> = ({ items }) => {
  return (
    <div className='w-full max-w-5xl mx-auto p-4 flex flex-col gap-4 '>
      {items.map((item, index) => {
        const isEven = index % 2 === 1;
        const isLast = index === items.length - 1;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            /* 
              Desktop: Menggunakan grid 3 kolom yang presisi.
              Kolom kiri & kanan otomatis mengunci ukuran w-card-half (532px) berkat flex-shink-0 di dalam elemennya.
            */
            className='grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full relative '
          >
            {/* ====== DESKTOP LEFT: Teks Baris Ganjil ====== */}
            <div
              className={`
                hidden md:flex flex-col p-6 rounded-2xl border border-natural-900 bg-natural-950 
                w-card-half h-card-row md:order-1 shrink-0
                ${isEven ? 'invisible pointer-events-none' : ''}
              `}
            >
              <h3 className='text-base-white font-bold text-left'>
                {item.text}
              </h3>
              <p className='text-neutral-400 text-sm text-left mt-1 font-medium'>
                {item.description}
              </p>
            </div>

            {/* ====== CENTER: Icon Number & Garis Putus-putus ====== */}
            <div className='flex justify-center items-center md:order-2 z-10 relative h-full w-16 md:w-32'>
              {!isLast && (
                <div className='absolute top-1/2 h-full w-0 border border-natural-900 left-1/2 -translate-x-1/2 z-0' />
              )}

              {/* Lingkaran Ikon */}
              <div className='w-12 h-12 rounded-full bg-primary-200 text-white flex items-center justify-center font-bold text-lg shadow-md relative z-10 shrink-0'>
                {item.id}
              </div>
            </div>

            {/* ====== MOBILE & DESKTOP RIGHT: Teks Baris Genap / Semua Teks Mobile ====== */}
            <div
              className={`
                flex flex-col justify-center p-6 border rounded-2xl border-natural-900 bg-natural-950
                h-card-row w-full md:w-card-half md:order-3 shrink-0
                ${isEven ? '' : 'md:invisible md:pointer-events-none'}
              `}
            >
              <h3 className='text-base-white font-bold text-left'>
                {item.text}
              </h3>
              <p className='text-neutral-400 text-sm text-left mt-1 font-medium'>
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
