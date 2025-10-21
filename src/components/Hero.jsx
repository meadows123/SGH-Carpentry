
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';

const Hero = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };
  
  const goToGallery = () => {
    navigate('/gallery');
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img
          src="/images/portfolio/outsidehouse.jpg"
          alt="SGH Carpentry & Build showcase"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay - adjust the opacity here (60 = 60% dark) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white px-4">
            Excellence in Carpentry <br className="hidden sm:block" /> & Building Services
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-10 px-4">
            With a passion for precision and a commitment to quality, SGH Carpentry & Build transforms your vision into reality.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={openBookingModal}
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-semibold px-6 sm:px-8 text-sm sm:text-base group w-full sm:w-auto border-2 border-white shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={goToGallery}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-primary hover:text-black font-semibold px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto shadow-lg"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </section>
  );
};

export default Hero;
  