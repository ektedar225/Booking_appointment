import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone,
  MessageSquare 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const services = [
    { name: t('services.ac.title'), href: '#services' },
    { name: t('services.refrigerator.title'), href: '#services' },
    { name: t('services.washingMachine.title'), href: '#services' },
    { name: t('services.heater.title'), href: '#services' },
    { name: t('services.fan.title'), href: '#services' },
    { name: t('services.emergency.title'), href: '#services' },
  ];

  const company = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const legal = [
    { name: t('footer.legal'), href: '#' },
    { name: t('footer.terms'), href: '#' },
  ];

  return (
    <footer className="bg-black-dark pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-gold">Hind Tabreed</h3>
            <p className="text-gray-400 mb-6">
              Premium appliance repair services in Riyadh. We provide expert repair solutions for all your home appliances.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-gold">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-gold">{t('footer.companyInfo')}</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {legal.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-gold">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gold mr-3 mt-1" />
                <a 
                  href="tel:0508716361" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  0508716361
                </a>
              </li>
              <li className="flex items-start">
                <MessageSquare className="w-5 h-5 text-gold mr-3 mt-1" />
                <a 
                  href="https://wa.me/966508716361" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  WhatsApp: 966508716361
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;