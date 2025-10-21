import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Hammer, Building2, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesShowcase = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: Hammer,
      title: 'Carpentry',
      description: 'Expert woodwork and custom carpentry solutions. From bespoke furniture to intricate joinery, we bring your vision to life with precision craftsmanship.',
      image: '/images/services/Upstairs.jpg',
      features: ['Custom Furniture', 'Joinery', 'Repairs', 'Fittings']
    },
    {
      icon: Building2,
      title: 'Building',
      description: 'Complete building services from foundations to finish. Extensions, renovations, and new builds delivered with quality and reliability.',
      image: '/images/services/Outsidedoors.jpg',
      features: ['Extensions', 'Renovations', 'New Builds', 'General Building']
    },
    {
      icon: ChefHat,
      title: 'Kitchens',
      description: 'Beautiful kitchen designs and installations. Modern layouts, premium materials, and professional fitting for your dream kitchen.',
      image: '/images/services/newkitchen4.jpg',
      features: ['Design & Planning', 'Installation', 'Renovation', 'Custom Worktops']
    },
  ];

  const goToGallery = () => {
    navigate('/gallery');
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.2
          }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: 45 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4"
          >
            Three core services, unlimited possibilities. We specialize in carpentry, building, and kitchen solutions that transform your space.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.9, 
                delay: index * 0.25,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 3,
                boxShadow: "0 20px 60px rgba(144, 238, 144, 0.3)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative overflow-hidden rounded-lg bg-background border border-border"
            >
              {/* Service Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service by SGH Carpentry & Build`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Service Icon Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary p-3 rounded-full border-2 border-white shadow-lg">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <Button
            onClick={goToGallery}
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 font-semibold px-6 sm:px-8 text-sm sm:text-base group border-2 border-white shadow-lg"
          >
            View Full Portfolio
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
