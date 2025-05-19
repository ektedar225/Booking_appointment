import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setShowDropdown(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleDropdown}
        className="bg-black p-3 rounded-full shadow-lg flex items-center justify-center border border-gold text-gold hover:text-white transition-colors duration-300"
        aria-label="Change language"
      >
        <Globe className="w-6 h-6" />
      </button>

      {showDropdown && (
        <div className="absolute bottom-14 left-0 bg-black border border-gold rounded-md shadow-lg overflow-hidden">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gold hover:text-black transition-colors"
          >
            {t('language.english')}
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gold hover:text-black transition-colors"
          >
            {t('language.arabic')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;