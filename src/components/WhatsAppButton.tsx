import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
  number: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ number }) => {
  const { t } = useTranslation();
  
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg whatsapp-btn flex items-center hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="ml-2 hidden md:inline">{t('whatsapp.message')}</span>
    </a>
  );
};

export default WhatsAppButton;