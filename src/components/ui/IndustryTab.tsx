import React from 'react';

// Define the structure for individual industry tabs
export interface IndustryTab {
  id: string;
  label: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

interface IndustryCardProps {
  // title?: string;
  // subtitle?: string;
  tabs: IndustryTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    // <div className='w-full bg-black text-white p-8 md:p-16 font-sans'>
    <div className='max-w-6xl mx-auto space-y-12'>
      {/* Content Section */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
        {/* Left: Tab Navigation */}
        <div className='lg:col-span-4 flex flex-col space-y-4'>
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`text-left pl-4 py-1 border-l-2 transition-all duration-200 text-sm md:text-base font-medium ${
                  isActive
                    ? 'border-orange-500 text-white'
                    : 'border-transparent text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right: Description & Visual Content */}
        <div className='lg:col-span-8 space-y-6'>
          <p className='text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl min-h-12'>
            {activeTab?.description}
          </p>

          {/* Glowing Image Wrapper */}
          <div className='relative rounded-2xl overflow-hidden aspect-video w-full border border-zinc-800 bg-zinc-950'>
            <img
              src={activeTab?.imageSrc}
              alt={activeTab?.imageAlt || activeTab?.label}
              className='w-full h-full object-cover object-center'
            />
            {/* Subtle overlay matching the warm light effect */}
            <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
