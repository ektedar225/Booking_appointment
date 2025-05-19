import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Users, 
  Award 
} from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    { icon: <Star className="w-6 h-6" />, name: t('about.values.quality') },
    { icon: <Clock className="w-6 h-6" />, name: t('about.values.reliability') },
    { icon: <Users className="w-6 h-6" />, name: t('about.values.transparency') },
    { icon: <Award className="w-6 h-6" />, name: t('about.values.expertise') }
  ];

  const stats = [
    { value: t('about.stats.years'), icon: <Clock className="w-10 h-10 text-gold mb-3" /> },
    { value: t('about.stats.technicians'), icon: <Users className="w-10 h-10 text-gold mb-3" /> },
    { value: t('about.stats.customers'), icon: <Star className="w-10 h-10 text-gold mb-3" /> },
    { value: t('about.stats.guarantee'), icon: <Award className="w-10 h-10 text-gold mb-3" /> }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gold mb-6">{t('about.subtitle')}</p>
            <div className="mb-8">
              <p className="text-gray-300 mb-4">{t('about.description1')}</p>
              <p className="text-gray-300">{t('about.description2')}</p>
            </div>

            <h3 className="text-xl font-serif font-bold mb-4 text-gold">{t('about.values.title')}</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-3 rounded-md bg-black-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-gold mr-3">{value.icon}</div>
                  <span className="text-white">{value.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="ac.jpg" 
                alt="Technician fixing appliance" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border-8 border-gold opacity-30 rounded-full"></div>
          </motion.div>
        </div>

        {/* Owner section with full image */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="relative w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/owner.jpg" 
              alt="Hafiz Abdul Qadir" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-2xl font-serif font-bold text-gold mb-2">Hafiz Abdul Qadir</h3>
            <p className="text-white text-lg mb-1">40 years of experience in appliance repair and service</p>
            <p className="text-white text-lg mb-1">35+ years serving the Riyadh community</p>
            <p className="text-gray-300">He has satisfied countless customers in Riyadh with his expertise and dedication.</p>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-black-light border border-gold border-opacity-30 p-6 text-center rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex justify-center">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;