import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Shield, Award, Clock, ThumbsUp, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';

const WhyChooseUs = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const reasons = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and deliver craftsmanship that stands the test of time.',
    },
    {
      icon: Clock,
      title: '15+ Years Experience',
      description: 'Over a decade of expertise in carpentry and building services across Southwest UK.',
    },
    {
      icon: Shield,
      title: 'Fully Insured & Certified',
      description: 'Complete peace of mind with comprehensive insurance and certified professionals.',
    },
    {
      icon: ThumbsUp,
      title: '100% Satisfaction Guarantee',
      description: 'We\'re not happy until you\'re happy. Your satisfaction is our top priority.',
    },
    {
      icon: Users,
      title: 'Family-Run Business',
      description: 'Personal attention and care for every project, treating your home like our own.',
    },
    {
      icon: Sparkles,
      title: 'Transparent Pricing',
      description: 'Honest quotes with no hidden fees. You know exactly what you\'re paying for.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Quality Services You Can Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We're committed to delivering exceptional craftsmanship and outstanding service on every project, every time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.85, rotateY: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + (index * 0.15),
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                rotateZ: index % 2 === 0 ? 1 : -1,
                boxShadow: "0 20px 40px rgba(144, 238, 144, 0.2)",
                transition: { duration: 0.3 }
              }}
              className="group relative bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-primary/10 p-4 rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={openBookingModal}
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-6 text-base group border-2 border-white shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </section>
  );
};

export default WhyChooseUs;

