import logoFooter from '../../assets/logo-footer.png';

export default function FooterSection() {
  return (
    <footer
      className='w-full bg-neutral-900 text-neutral-300'
      aria-label='Site Footer'
    >
      <div className='max-w-5xl h-82 mx-auto p-4 pb-8'>
        <div className='flex flex-col-reverse items-start justify-between gap-6 rounded-2xl card-base p-6 md:flex-row'>
          <h2 className='w-full md:w-64 text-center text-3xl font-semibold tracking-tight text-main-color md:text-left md:text-4xl'>
            Let's Discuss Your Ideas
          </h2>
          <div className='flex items-center gap-3' aria-hidden='true'>
            <img
              src={logoFooter}
              alt='Company Logo'
              className='h-8 w-auto object-contain'
            />
            <span className='select-none text-2xl font-bold tracking-tighter text-main-color'>
              Your Logo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
