import { Routes } from '@config/route.config';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { DarkIcon, LightIcon } from '@components/icons';
import { themes } from '../../../config/theme.config';

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const navLinks = [
    {
      id: 1,
      label: 'About Us',
      url: Routes.about.main(),
    },
    {
      id: 2,
      label: 'Contact Us',
      url: Routes.contact.main(),
    },
  ];
  return (
    <nav
      className="sticky top-0 z-10"
      style={{
        backgroundColor: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      <div
        className="flex flex-wrap items-center justify-between mx-auto p-4 px-10"
        style={{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        }}
      >
        <a href={Routes.home.main()} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">MS</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="flex items-center gap-x-4">
          <button className="group flex items-center justify-center hover:color-[#00b0ff]" onClick={handleTheme}>
            {theme === 'light' ? <DarkIcon /> : <LightIcon />}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse">
              {navLinks?.map((eachLink) => (
                <li key={eachLink.id} className="relative group">
                  <a
                    href={eachLink.url}
                    className="block py-2 px-3 rounded group-hover:text-[#00b0ff]"
                    aria-current="page"
                  >
                    {eachLink.label}
                  </a>
                  <span
                    className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#00b0ff] transition-all duration-300 right-0 left-0`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
