import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageSquare, Phone, User } from 'lucide-react';

const Appointment: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Repair',
    date: '',
    time: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `
*New Appointment Request*
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Location: ${formData.location}
Message: ${formData.message}
`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/966508716361?text=${encodedMessage}`, '_blank');
  };

  const serviceOptions = [
    'AC Repair',
    'Refrigerator Repair',
    'Washing Machine Repair',
    'Heater Repair',
    'Fan Repair',
    'Other'
  ];

  return (
    <section id="appointment" className="py-20 bg-black-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">
            {t('appointment.title')}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t('appointment.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-black p-8 md:p-10 rounded-lg shadow-lg border border-gold border-opacity-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-white mb-2" htmlFor="name">
                    {t('appointment.name')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="phone">
                    {t('appointment.phone')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="service">
                    {t('appointment.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                    required
                  >
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="date">
                    {t('appointment.date')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Calendar className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="time">
                    {t('appointment.time')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Clock className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="location">
                    {t('location')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4.418 0-8 2.239-8 5v2h16v-2c0-2.761-3.582-5-8-5z" /></svg>
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-white mb-2" htmlFor="message">
                    {t('appointment.message')}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none h-32"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {t('appointment.submit')}
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  {t('appointment.note')}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;