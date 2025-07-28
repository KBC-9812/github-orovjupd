
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const showBlogLink = location.pathname !== '/blog' && !location.pathname.startsWith('/blog/');
  const showAdminLink = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerBg = useTransform(scrollY, [0, 100], ['rgba(17, 24, 39, 0.1)', 'rgba(17, 24, 39, 0.5)']);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'why-automation', label: 'Why Automation' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const handleNavClick = (id) => {
    if (isHomePage) {
      if(id === 'blog') {
        const element = document.getElementById(id);
        if(element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
         scrollToSection(id, headerHeight);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      ref={headerRef}
      style={{ backgroundColor: headerBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-between w-full"
        >
          <Link to="/" className="flex items-center gap-1">
            <img class="h-10 w-auto" alt="BobsonTech Logo" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/329dabb4-0580-40d2-b930-fe2ad61a6feb/f5f781a83618abc05ffc1f54c6ae98cd.png" />
            <span className="font-display text-xl font-bold text-white">
              BobsonTech
            </span>
          </Link>

          <div className="hidden md:flex flex-grow justify-end items-center space-x-1 lg:space-x-2">
            {isHomePage && navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-300 hover:text-white hover:bg-blue-800/40 transition-all duration-300 font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full"
              >
                {link.label}
              </button>
            ))}
            {isHomePage && showBlogLink && (
              <button onClick={() => handleNavClick('blog')} className="text-gray-300 hover:text-white hover:bg-blue-800/40 transition-all duration-300 font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full">Blog</button>
            )}
            {!isHomePage && (
              <>
                <Link to="/" className="text-gray-300 hover:text-white hover:bg-blue-800/40 transition-all duration-300 font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full">Home</Link>
                {showBlogLink && <Link to="/blog" className="text-gray-300 hover:text-white hover:bg-blue-800/40 transition-all duration-300 font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full">Blog</Link>}
                {showAdminLink && <Link to="/admin" className="text-gray-300 hover:text-white hover:bg-blue-800/40 transition-all duration-300 font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full">Admin</Link>}
              </>
            )}
            <Link to="/contact">
              <Button
                className="bg-white text-gray-900 px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg text-sm lg:text-base ml-2"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 p-2 rounded-md hover:bg-blue-900/50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 p-4 bg-secondary/90 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-4 pt-4">
               {isHomePage && navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2"
                >
                  {link.label}
                </button>
              ))}
              {isHomePage && showBlogLink && (
                 <button onClick={() => handleNavClick('blog')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2">Blog</button>
              )}
              {!isHomePage && (
                <>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  {showBlogLink && <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>}
                  {showAdminLink && <Link to="/admin" className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2" onClick={() => setIsMenuOpen(false)}>Admin</Link>}
                </>
              )}
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full text-lg py-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
