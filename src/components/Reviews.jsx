import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Star, MapPin, Calendar, ExternalLink, ChevronLeft, ChevronRight, PenSquare, CheckCircle } from 'lucide-react';
import ReviewForm from '@/components/ReviewForm';

const Reviews = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Bristol",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely fantastic work! SGH transformed our kitchen completely. The attention to detail and quality of craftsmanship is outstanding. Highly recommend!",
      project: "Kitchen Renovation",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Bath",
      rating: 5,
      date: "1 month ago",
      review: "Professional, reliable, and excellent value for money. Our loft conversion exceeded expectations. The team was clean, punctual, and respectful of our home.",
      project: "Loft Conversion",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "Exeter",
      rating: 5,
      date: "3 weeks ago",
      review: "From start to finish, the service was impeccable. Our new decking looks amazing and the quality is top-notch. Will definitely use again for future projects.",
      project: "Garden Decking",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Plymouth",
      rating: 5,
      date: "1 week ago",
      review: "Outstanding carpentry work! The custom built-in wardrobes are exactly what we envisioned. Professional team, fair pricing, and excellent communication throughout.",
      project: "Custom Carpentry",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 5,
      name: "Lisa Brown",
      location: "Gloucester",
      rating: 5,
      date: "2 months ago",
      review: "SGH completed our bathroom renovation on time and within budget. The quality of work is exceptional and the team was a pleasure to work with. 5 stars!",
      project: "Bathroom Renovation",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Swindon",
      rating: 5,
      date: "3 weeks ago",
      review: "Excellent service from quote to completion. Our home extension looks incredible and has added significant value to our property. Highly professional team.",
      project: "Home Extension",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
  ];

  // Auto-slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // reviews.length is constant, so empty dependency array is fine

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    // On mobile, show 1 review. On tablet/desktop, show 3
    return [reviews[currentSlide]];
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
          
          {/* Write Review Button */}
          <motion.button
            onClick={() => setIsReviewFormOpen(true)}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors border-2 border-white shadow-lg mb-6"
          >
            <PenSquare className="w-5 h-5" />
            Write a Review
          </motion.button>
          
          {/* Google Reviews Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8 px-4">
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg px-3 sm:px-4 py-2 border border-gray-200">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex">
                  {renderStars(5)}
                </div>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">4.9</span>
                <span className="text-gray-600 text-xs sm:text-sm">(50+ reviews)</span>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=SGH+Carpentry+Building+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors border-2 border-white shadow-lg text-sm sm:text-base"
            >
              View All Reviews
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </motion.div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-0">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-200"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-200"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Reviews Slideshow */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-1 gap-4 md:gap-8 max-w-lg mx-auto"
              >
                {getVisibleReviews().map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 sm:p-6 hover-lift relative shadow-sm border border-gray-200"
                  >
                    {/* Google Logo */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                          alt="Google" 
                          className="w-5 h-5"
                        />
                        <span className="text-xs text-gray-500 font-medium">Google</span>
                      </div>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      "{review.review}"
                    </p>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                            <img 
                              src={review.avatar} 
                              alt={review.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-1">
                              {review.name}
                              <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <MapPin className="w-3 h-3" />
                              {review.location}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {review.date}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {review.project}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                          <CheckCircle className="w-3 h-3 fill-current" />
                          Verified Review
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=SGH+Carpentry+Building+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors border-b-2 border-white pb-1"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
              alt="Google" 
              className="w-4 h-4"
            />
            Leave a Review on Google
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>

      {/* Review Form Modal */}
      <ReviewForm 
        isOpen={isReviewFormOpen} 
        onClose={() => setIsReviewFormOpen(false)} 
      />
    </section>
  );
};

export default Reviews;
