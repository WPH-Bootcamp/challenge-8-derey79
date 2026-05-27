import { SectionLayout } from '../layout/SectionLayout';
import { IndustryCard, type IndustryTab } from '../ui/IndustryTab';
import { useState } from 'react';

// import React from 'react';
const mockTabs: IndustryTab[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    imageSrc: 'https://unsplash.com', // Replace with your card graphic
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    description:
      'Grow your retail footprint with high-conversion storefronts, dynamic inventory management, and ultra-fast global checkout pipelines.',
    imageSrc: 'https://unsplash.com',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description:
      'HIPAA-compliant, security-first digital health ecosystems engineered to streamline patient tracking, diagnostics, and telehealth.',
    imageSrc: 'https://unsplash.com',
  },
];

export default function IndustySection() {
  const [activeTab, setActiveTab] = useState('fintech');
  return (
    <SectionLayout
      id='industry'
      className='min-h-screen bg-black px-4 py-4 sm:px-6 lg:px-8'
    >
      <div className='flex flex-col gap-3 md:gap-4'>
        {/** border-2 hanya sementara */}
        <h2 className='text-2xl font-bold tracking-wider leading-9 md:text-3xl xl:text-4xl'>
          Built for Your Industry
        </h2>
        <p className='pb-4 text-sm md:text-lg font-medium text-neutral-400'>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>

      <div className='flex flex-col gap-3 md:gap-4 '>
        <IndustryCard
          tabs={mockTabs}
          activeTabId={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </SectionLayout>
  );
}
