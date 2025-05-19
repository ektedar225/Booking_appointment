import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const pricingPlans = [
    {
      name: t('pricing.consultation'),
      price: 100,
      features: [
        t('pricing.diagnosis'),
        t('pricing.maintenance'),
      ],
      recommended: false
    },
    {
      name: t('pricing.basic'),
      price: 250,
      features: [
        t('pricing.diagnosis'),
        t('pricing.repair'),
        t('pricing.maintenance'),
      ],
      recommended: false
    },
    {
      name: t('pricing.standard'),
      price: 450,
      features: [
        t('pricing.diagnosis'),
        t('pricing.repair'),
        t('pricing.parts'),
        t('pricing.maintenance'),
      ],
      recommended: true
    },
    {
      name: t('pricing.premium'),
      price: 650,
      features: [
        t('pricing.diagnosis'),
        t('pricing.repair'),
        t('pricing.parts'),
        t('pricing.guarantee'),
        t('pricing.maintenance'),
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black-light">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-lg overflow-hidden ${
                plan.recommended 
                ? 'border-2 border-gold transform lg:-translate-y-4' 
                : 'border border-gray-800'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-gold text-black-dark text-xs uppercase font-bold py-1 px-4 rounded-bl-lg">
                  Recommended
                </div>
              )}
              <div className="p-8 bg-black">
                <h3 className="text-xl font-serif font-bold mb-4 text-white">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-lg ml-1 text-gray-400">{t('pricing.sar')}</span>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gold mb-2">{t('pricing.includes')}</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-gold mr-2 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#appointment" 
                  className={`block text-center py-3 px-4 rounded-md transition-all duration-300 ${
                    plan.recommended 
                    ? 'bg-gold text-black hover:bg-gold-dark' 
                    : 'border border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  {t('pricing.cta')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-gray-400 mt-10 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t('pricing.note')}
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;