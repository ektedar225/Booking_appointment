import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/4941457/4941457-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white gold-text-shadow">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gold mb-8">
            {t('hero.subtitle')}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#appointment" className="btn-primary text-lg px-8 py-4">
              {t('hero.cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#services" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">{t('hero.scroll')}</span>
          <ChevronDown className="w-6 h-6 text-gold" />
        </a>
      </motion.div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-24 h-24 opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 180 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
      >
        <div className="w-full h-full border-2 border-gold rounded-full"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-10 w-32 h-32 opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1, rotate: -180 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 4 }}
      >
        <div className="w-full h-full border-2 border-gold rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;