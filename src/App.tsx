import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gold border-solid rounded-full border-t-transparent animate-spin mb-4"></div>
          <h1 className="text-gold text-2xl font-serif">{t('loading')}</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton number="966508716361" />
      <LanguageSwitcher />
    </>
  );
}

export default App;