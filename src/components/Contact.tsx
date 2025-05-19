import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { 
      icon: <MapPin className="w-6 h-6 text-gold" />, 
      title: t('contact.address'),
      info: "Riyadh, Saudi Arabia",
      link: "https://www.google.com/maps/place/Riyadh+Saudi+Arabia"
    },
    { 
      icon: <Phone className="w-6 h-6 text-gold" />, 
      title: t('contact.phone'),
      info: "0508716361",
      link: "tel:0508716361"
    },
    { 
      icon: <MessageSquare className="w-6 h-6 text-gold" />, 
      title: t('contact.whatsapp'),
      info: "966508716361",
      link: "https://wa.me/966508716361"
    },
    { 
      icon: <Clock className="w-6 h-6 text-gold" />, 
      title: t('contact.hours'),
      info: `${t('contact.workdays')}: ${t('contact.worktime')}`,
      subInfo: `${t('contact.friday')}: ${t('contact.fridaytime')}`,
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-black-light rounded-lg border border-gold border-opacity-20 transition-all duration-300 hover:shadow-lg hover:border-opacity-40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-black p-3 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-medium text-gold">{item.title}</h3>
              </div>
              {item.link ? (
                <a 
                  href={item.link} 
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="text-white hover:text-gold transition-colors"
                >
                  {item.info}
                </a>
              ) : (
                <>
                  <p className="text-white">{item.info}</p>
                  {item.subInfo && <p className="text-white mt-1">{item.subInfo}</p>}
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-80 rounded-lg overflow-hidden">
            <iframe 
              title="Map location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.9969666767!2d46.54234664755786!3d24.725555344095198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1654767642088!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;