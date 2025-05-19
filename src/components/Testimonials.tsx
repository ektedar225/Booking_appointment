import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Star, StarHalf, User } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  type Review = { name: string; date: string; comment: string; rating?: number };
  const initialReviews = t('testimonials.reviews', { returnObjects: true });
  const extraReviews = 
   [
  { "name": "Ayesha S.", "date": "April 2, 2015", "comment": "Very fast and reliable service. Highly recommended for AC repairs in Riyadh!", "rating": 5 },
  { "name": "Omar R.", "date": "March 20, 2025", "comment": "Professional and friendly staff. My washing machine works like new!", "rating": 5 },
  { "name": "Fatima H.", "date": "March 5, 2022", "comment": "Excellent customer support and quick response time. Will use again.", "rating": 4 },
  { "name": "Khalid M.", "date": "February 18, 2024", "comment": "Affordable prices and top-notch repair quality. Thank you!", "rating": 5 },
  { "name": "Layla .", "date": "January 30, 2025", "comment": "The technician explained everything clearly and fixed my refrigerator perfectly.", "rating": 5 },
  { "name": "Aiza .", "date": "May 05, 2025", "comment": "Cheapest services in Riyadh.", "rating": 4 },
  { "name": "Noura K.", "date": "April 10, 2024", "comment": "Quick appointment scheduling and prompt service. Will recommend to family.", "rating": 5 },
  { "name": "Salman D.", "date": "March 12, 2023", "comment": "My AC is working perfectly now. Great job!", "rating": 5 },
  { "name": "Zara L.", "date": "February 5, 2024", "comment": "Technicians arrived on time and did a clean job. Appreciate the professionalism.", "rating": 5 },
  { "name": "Yusuf B.", "date": "January 15, 2025", "comment": "Good service, but price is very low.", "rating": 3 },
  { "name": "Mariam S.", "date": "December 21, 2024", "comment": "Highly satisfied. Very polite team and accurate problem diagnosis.", "rating": 5 },
  { "name": "Rehan T.", "date": "November 9, 2023", "comment": "Fair pricing and reliable staff. Happy with the repair quality.", "rating": 4 },
  { "name": "Iman J.", "date": "October 2, 2022", "comment": "They fixed my microwave in under 30 minutes. Impressive!", "rating": 5 },
  { "name": "Tariq A.", "date": "September 25, 2023", "comment": "Affordable but slightly delayed service. Still worth it.", "rating": 4 },
  { "name": "Rania G.", "date": "August 14, 2024", "comment": "Clear communication and timely service. Will call again.", "rating": 5 },
  { "name": "Mohammed Z.", "date": "July 3, 2024", "comment": "Technician was knowledgeable and courteous. AC cooling well now.", "rating": 5 },
  { "name": "Dania E.", "date": "June 10, 2023", "comment": "Customer care followed up after the repair. Great service!", "rating": 5 },
  { "name": "Sami H.", "date": "May 29, 2024", "comment": "They helped me fix my oven quickly. Thank you!", "rating": 4 },
  { "name": "Noor F.", "date": "April 18, 2025", "comment": "Friendly team, great service, very reasonable pricing.", "rating": 5 },
  { "name": "Aliya M.", "date": "March 1, 2024", "comment": "Smooth experience. Booking to service was hassle-free.", "rating": 5 }
];
  const normalizedReviews: Review[] = Array.isArray(initialReviews)
    ? [...initialReviews, ...extraReviews].map((r: any) => ({ ...r, rating: r.rating || 5 }))
    : extraReviews;
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState<Review[]>(normalizedReviews);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Use backend if available, otherwise show static reviews
    fetch('http://localhost:5000/api/reviews')
      .then(res => {
        if (!res.ok) throw new Error('No backend');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        }
      })
      .catch(() => {
        // If backend is not available, keep static reviews
      });
  }, []);

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const newReview = { name, date, comment, rating };
    fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(savedReview => {
        setReviews([...reviews, savedReview]);
        setName('');
        setComment('');
        setRating(5);
        setShowReviewForm(false);
      });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <div className="bg-black-light p-8 rounded-lg shadow-lg border border-gold border-opacity-20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gold-dark rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      star <= (review.rating || 5) ? (
                        <Star key={star} className="w-5 h-5 text-gold" />
                      ) : (
                        <Star key={star} className="w-5 h-5 text-gray-600" />
                      )
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{review.comment}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={toggleReviewForm}
            className="btn-outline"
          >
            {t('testimonials.leaveReview')}
          </button>
        </motion.div>

        {showReviewForm && (
          <motion.div
            className="mt-12 max-w-2xl mx-auto p-8 bg-black-light rounded-lg shadow-lg border border-gold border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="name">
                  {t('appointment.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-white mb-2">
                  {t('testimonials.rating')}
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none mr-1"
                    >
                      {star <= rating ? (
                        <Star className="w-8 h-8 text-gold" />
                      ) : (
                        <Star className="w-8 h-8 text-gray-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="comment">
                  {t('appointment.message')}
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-black-dark text-white border border-gray-700 focus:border-gold focus:outline-none h-32"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleReviewForm}
                  className="px-4 py-2 mr-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-gold text-black hover:bg-gold-dark transition-colors"
                >
                  {t('testimonials.submit')}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;