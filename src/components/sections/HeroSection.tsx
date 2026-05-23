import HeroImage from '../../assets/Property-1-Dark.png';
import { Section } from '../layout/Section';

export default function HeroSection() {
  return (
    <Section
      id='hero'
      className='min-h-screen relative mx-auto flex flex-col md:flex-row items-center justify-between gap-12'
    >
      <div className='w-auto xl:w-150 md:absolute flex flex-col gap-4 opacity-100 text-left'>
        <div className=''>
          <h1 className='text-4xl xl:text-6xl text-amber-50 md:text-4xl font-bold  tracking-tight mb-4'>
            Your Tech Partner for
            <span className='text-primary-200'> Smarter Growth</span>
          </h1>
          <p className='text-lg text-secondary dark:text-gray-300'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </div>
        {/* <div className='flex justify-center md:justify-start gap-4'>
          <Button variant='primary'>Lihat Pekerjaan</Button>
          <Button variant='secondary'>Hubungi Saya</Button>
        </div> */}
      </div>

      {/* Right Side: Image Container */}
      <div className='w-full md:w-1/2 flex justify-center md:justify-end md:ml-auto'>
        <img
          src={HeroImage}
          alt='Tech Partner Illustration'
          className='w-full max-w-md md:max-w-lg h-auto object-cover rounded-2xl shadow-xl'
        />
      </div>
    </Section>
  );
}
