import { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import { menuItems } from '../../data/navigations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label='Navigasi Utama'
      // className='text-slate-100 sticky md:fixed top-0 inset-x-0  z-50 p-4 shadow-sm'
      className={`sticky md:fixed p-4 top-0  text-slate-100 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base-black/20 backdrop-blur-md shadow-sm' : 'bg-base-black text-gray-800 shadow-none'}`}
    >
      {/* <div className='container mx-auto px-4 flex justify-between items-center'> */}
      <div className='px-4 lg:px-32 mx-auto flex justify-between items-center h-16'>
        {/* Logo Section */}
        <div className='shrink-0'>
          <span className='text-xl font-bold tracking-wider text-white'>
            <img src={logo} alt='Company Logo' width='200' />
          </span>
        </div>

        {/* Desktop Menu Section */}
        <div className='hidden md:block'>
          <div className='ml-10 flex items-baseline space-x-8'>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className='hidden md:block'>
          <a
            href='#contact'
            /* 
              - px-5 py-2.5: Padding yang proporsional untuk tombol navbar
              - text-sm font-semibold: Ukuran teks yang tegas namun bersih
              - bg-gray-900 / dark:bg-white: Skema warna kontras tinggi (Desain Tren v4)
              - hover:scale-[1.02]: Efek mikro-interaksi saat kursor menyentuh tombol
            */
            className='inline-flex w-48 items-center justify-center px-5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 bg-primary-200 dark:bg-white shadow-button-inset hover:bg-primary-300 dark:hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-95 transform-gpu'
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div> */}
      </div>
      {/* </div> */}

      {/* Mobile Menu Panel */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
