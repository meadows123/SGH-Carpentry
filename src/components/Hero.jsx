
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="High-end modern kitchen with wooden cabinets and island"
          className="w-full h-full object-cover"
         src="https://images.unsplash.com/photo-1617228069096-4638a7ffc906" />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-foreground px-4">
            Excellence in Carpentry <br className="hidden sm:block" /> & Building Services
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-10 px-4">
            With a passion for precision and a commitment to quality, SGH Carpentry & Build transforms your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-semibold px-6 sm:px-8 text-sm sm:text-base group w-full sm:w-auto border-2 border-white shadow-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              variant="outline"
              className="border-2 border-white text-primary hover:bg-primary hover:text-black font-semibold px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto shadow-lg"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
  