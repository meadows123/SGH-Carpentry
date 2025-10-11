
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  
  const values = [
    'Premium quality materials',
    'Unwavering attention to detail',
    'Transparent & honest pricing',
    'Clean & respectful worksites',
    'Guaranteed customer satisfaction',
    'Fully insured & certified',
  ];
  
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative aspect-square">
              <img alt="SGH Carpentry quality craftsmanship" className="absolute w-full h-full object-cover rounded-lg shadow-lg" src="/images/portfolio/newkitchen5.jpg" />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-2/3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <img alt="SGH building and extension project" className="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-card" src="/images/portfolio/Outsidebuilding2.jpg" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              About SGH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              A Legacy of Quality Craftsmanship
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              For over 15 years, SGH Carpentry & Build has been synonymous with exceptional quality and reliability. As a family-run business, we pour our heart into every project, ensuring results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 md:gap-y-4 mb-6 md:mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90 text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-semibold px-6 sm:px-8 text-sm sm:text-base border-2 border-white shadow-lg"
            >
              Discuss Your Project
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
  