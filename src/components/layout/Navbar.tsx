import { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import Button from '../ui/Button';
import { menuItems } from '../../data/navigations';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import Hamburger from '../../assets/hamburger-menu.png';
import X from '../../assets/x-close.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const scrolledMenuClass: string =
    'bg-base-white/70 dark:bg-base-black/20 backdrop-blur-md '; //shadow-md
  const notscrolledMenuClass: string = 'shadow-none';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Let's talk details!");
  };

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
      className={`sticky md:fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${scrolledMenuClass}`
          : `${notscrolledMenuClass} text-base-white bg-transparent dark:bg-base-black`
      }`}
    >
      {/* <div className='container mx-auto px-4 flex justify-between items-center'> */}
      <div className='w-full max-w-290 z-10 mx-auto px-4 flex justify-between items-center h-16'>
        <div className='flex items-center gap-3 px-4 md:px-20'>
          <img
            src={logo}
            alt='Company Logo'
            className='h-full w-auto object-contain'
          />
          <span className='text-2xl font-semibold tracking-wider space-y-6 text-main-color whitespace-nowrap'>
            Your Logo
          </span>
        </div>

        {/* Desktop Menu Section */}
        <div className='hidden md:block bg-transparent'>
          <div className='ml-10 flex gap-2 justify-between'>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='block rounded-full px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-primary-200 hover:text-white text-main-color'
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <button
            onClick={toggleTheme}
            aria-label={
              theme === 'light'
                ? 'Switch to dark theme'
                : 'Switch to light theme'
            }
            className='group p-2 rounded-lg bg-transparent text-gray-700 dark:text-gray-400 transition-colors duration-200 shrink-0'
          >
            {theme === 'light' ? (
              <Moon
                size={20}
                className='transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12'
              />
            ) : (
              <Sun
                size={20}
                className='transition-transform duration-200 group-hover:scale-110 group-hover:rotate-45'
              />
            )}
          </button>

          <Button
            variant='primary'
            size='sm'
            onClick={handleClick}
            className='whitespace-nowrap'
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center space-x-2 md:hidden'>
          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='group p-2 rounded-lg bg-transparent text-main-color transition-colors duration-200 shrink-0'
          >
            {theme === 'light' ? (
              <Moon
                size={20}
                className='transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12'
              />
            ) : (
              <Sun
                size={20}
                className='transition-transform duration-200 group-hover:scale-110 group-hover:rotate-45'
              />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 rounded-lg hover:bg-primary-200 dark:hover:bg-gray-800'
            aria-label='Toggle menu'
          >
            <img
              src={isOpen ? X : Hamburger}
              alt={isOpen ? 'Close menu' : 'Open menu'}
              className='w-6 h-6 object-contain dark:invert transition-all'
            />
          </button>
        </div>
      </div>
      {/* </div> */}

      {/* Mobile Menu Panel */}
      <div
        className={`left-0 w-full px-4 pt-2 pb-4 space-y-1 ${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ${isScrolled ? `${scrolledMenuClass}` : `${notscrolledMenuClass}`}`}
        // className={`block md:hidden bg-base-black`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className=' block px-3 py-2 rounded-full text-base font-medium transition-colors duration-200 text-main-color bg-amber-100 hover:bg-primary-200 hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* <a href='#contact' className={`w-full ${ctaButtonClass}`}>
          Let's Talk
        </a> */}

        <Button
          variant='primary'
          size='sm'
          onClick={handleClick}
          className='w-full'
        >
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
