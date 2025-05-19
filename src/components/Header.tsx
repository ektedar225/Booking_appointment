import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black bg-opacity-95 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gold font-serif text-2xl md:text-3xl font-bold">Hind Tabreed</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden lg:flex items-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-white hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="btn-primary ml-4"
          >
            {t('nav.appointment')}
          </a>
        </motion.nav>

        {/* Desktop Phone */}
        <motion.div 
          className="hidden md:flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="tel:0508716361" 
            className="flex items-center text-white hover:text-gold transition-colors duration-300"
          >
            <Phone className="w-5 h-5 mr-2 text-gold" />
            <span>0508716361</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gold" />
          ) : (
            <Menu className="w-6 h-6 text-gold" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-black-dark bg-opacity-95 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-gold">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-gold text-xl my-3 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="btn-primary mt-6"
              onClick={toggleMenu}
            >
              {t('nav.appointment')}
            </a>
            <a
              href="tel:0508716361"
              className="flex items-center text-white hover:text-gold mt-8 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2 text-gold" />
              <span>0508716361</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;