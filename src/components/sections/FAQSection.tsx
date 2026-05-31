import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../data/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Default item pertama terbuka

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className='w-full max-w-6xl mx-auto px-4 py-16 bg-white'>
      {/* 1. Header Section */}
      <header className='flex flex-col md:flex-row md:justify-between md:items-end border-b border-gray-100 pb-8 mb-12 gap-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 tracking-tight'>
          Need Help? Start
          <br />
          Here.
        </h2>
        <p className='text-sm md:text-base text-gray-500 max-w-xs md:text-right'>
          Everything you need to know — all in one place.
        </p>
      </header>

      {/* 2. Responsive Grid Container */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full'>
        {/* Kiri: Accordion FAQ List (Lebar 7 Kolom) */}
        <div className='lg:col-span-7 flex flex-col w-full divide-y divide-gray-100'>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className='py-5 first:pt-0 last:pb-0 w-full'>
                <button
                  type='button'
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className='flex justify-between items-center w-full text-left gap-4 group cursor-pointer'
                >
                  <span
                    className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
                      isOpen
                        ? 'text-gray-900'
                        : 'text-gray-800 group-hover:text-gray-600'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Plus/Minus Indicator Icon */}
                  <span className='text-2xl font-light text-gray-500 select-none w-6 h-6 flex items-center justify-center'>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Animated Dropdown Answer Frame */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <p className='pt-3 text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl'>
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <aside className='lg:col-span-5 w-full flex justify-center lg:justify-end'>
          <div className='w-full max-w-100 bg-[#C84B31] rounded-3xl p-8 flex flex-col text-white shadow-xs'>
            <h3 className='text-2xl md:text-3xl font-bold leading-tight mb-2'>
              Let's talk it
              <br />
              through
            </h3>
            <p className='text-sm text-white/80 leading-relaxed mb-6'>
              book a free consultation with our team.
            </p>

            {/* Thumbnail Box */}
            <figure className='w-full aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100/10 mb-6'>
              <img
                src='https://unsplash.com' // Ganti dengan path asset Anda
                alt='team meeting consulting'
                className='w-full h-full object-cover'
              />
            </figure>

            {/* Action Button */}
            <button
              type='button'
              className='w-full bg-black hover:bg-zinc-900 active:scale-98 text-white font-medium py-3 rounded-full text-sm transition-all cursor-pointer'
            >
              Free Consultation
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
