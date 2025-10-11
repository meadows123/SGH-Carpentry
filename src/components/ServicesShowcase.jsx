import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Hammer, Building2, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesShowcase = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const mainServices = [
    {
      icon: Hammer,
      title: 'Carpentry',
      description: 'Expert woodwork and custom carpentry solutions. From bespoke furniture to intricate joinery, we bring your vision to life with precision craftsmanship.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      features: ['Custom Furniture', 'Joinery', 'Repairs', 'Fittings']
    },
    {
      icon: Building2,
      title: 'Building',
      description: 'Complete building services from foundations to finish. Extensions, renovations, and new builds delivered with quality and reliability.',
      image: 'https://images.unsplash.com/photo-1621983209342-ebf870427308',
      features: ['Extensions', 'Renovations', 'New Builds', 'General Building']
    },
    {
      icon: ChefHat,
      title: 'Kitchens',
      description: 'Beautiful kitchen designs and installations. Modern layouts, premium materials, and professional fitting for your dream kitchen.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      features: ['Design & Planning', 'Installation', 'Renovation', 'Custom Worktops']
    },
  ];

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Three core services, unlimited possibilities. We specialize in carpentry, building, and kitchen solutions that transform your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-background border border-border hover-lift"
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            onClick={scrollToPortfolio}
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
