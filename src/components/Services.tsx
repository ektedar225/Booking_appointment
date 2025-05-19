import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Wind, Refrigerator, WashingMachine as Washing, Flame, Fan, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { 
      icon: <Wind className="w-10 h-10 text-gold" />, 
      title: t('services.ac.title'), 
      description: t('services.ac.description'),
      image: 'ac.jpg'
    },
    { 
      icon: <Refrigerator className="w-10 h-10 text-gold" />, 
      title: t('services.refrigerator.title'), 
      description: t('services.refrigerator.description'),
      image: 'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      icon: <Washing className="w-10 h-10 text-gold" />, 
      title: t('services.washingMachine.title'), 
      description: t('services.washingMachine.description'),
      image: 'washing.jpg'
    },
    { 
      icon: <Flame className="w-10 h-10 text-gold" />, 
      title: t('services.heater.title'), 
      description: t('services.heater.description'),
      image: 'https://images.pexels.com/photos/31092900/pexels-photo-31092900/free-photo-of-modern-sauna-heater-with-stone-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: <Fan className="w-10 h-10 text-gold" />, 
      title: t('services.fan.title'), 
      description: t('services.fan.description'),
      image: 'https://images.pexels.com/photos/12689254/pexels-photo-12689254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: <Clock className="w-10 h-10 text-gold" />, 
      title: t('services.emergency.title'), 
      description: t('services.emergency.description'),
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 bg-black-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`w-full h-full ${service.image === 'washing.jpg' ? 'object-contain' : 'object-cover'} transition-transform duration-700 hover:scale-110`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute top-4 left-4">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-gold">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#appointment" className="btn-primary">
            {t('hero.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;