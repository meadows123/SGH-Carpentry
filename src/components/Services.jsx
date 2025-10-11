
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Hammer, Home, Wrench, Ruler, Paintbrush, Building2 } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const services = [
    {
      icon: Hammer,
      title: 'Custom Carpentry',
      description: 'Bespoke woodwork tailored to your exact specifications. From furniture to fixtures, we craft with precision.',
    },
    {
      icon: Home,
      title: 'Home Renovations',
      description: 'Complete home transformations that breathe new life into your space. Quality workmanship guaranteed.',
    },
    {
      icon: Building2,
      title: 'Extensions & Lofts',
      description: 'Expand your living space with expertly designed and built extensions and loft conversions.',
    },
    {
      icon: Ruler,
      title: 'Kitchen Fitting',
      description: 'Professional kitchen installations with attention to every detail. Modern designs, flawless execution.',
    },
    {
      icon: Paintbrush,
      title: 'Decking & Fencing',
      description: 'Beautiful outdoor spaces with durable decking and secure fencing solutions for your property.',
    },
    {
      icon: Wrench,
      title: 'General Building',
      description: 'Comprehensive building services to keep your property in perfect condition year-round.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Services We Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of building and carpentry services, delivered with the highest standards of quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg border border-border text-center hover-lift"
            >
              <div className="flex justify-center mb-6">
                 <div className="bg-primary p-4 rounded-full border-2 border-white shadow-lg">
                  <service.icon className="w-8 h-8 text-black" />
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
  