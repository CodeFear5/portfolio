import { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
 
function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['About', 'Projects', 'skills','Education'];

  // Resume link variable for easy reuse
  const resumeLink = 'https://drive.google.com/file/d/1GiBD7MX50nh07ERzpF21afGrvtCInNjw/view?usp=sharing';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold tracking-wider text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors"
            >
              Nagesh B C
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 px-1 py-2 text-sm font-medium relative group transition-colors"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              {/* Resume Button */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-green-500 text-white text-sm font-medium hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500 transition-colors"
              >
                Resume
              </a>
            </nav>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link}
              </a>
            ))}

            {/* Resume Button for mobile */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md bg-green-500 text-white text-base font-medium hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Spacer to account for fixed header */}
      <div className="h-16"></div>
    </>
  );
}

export default Header;
