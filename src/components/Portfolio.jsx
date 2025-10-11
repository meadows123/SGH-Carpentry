
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { X, Search } from 'lucide-react';

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: 'Modern Kitchen Renovation',
      category: 'Kitchens',
      image: '/images/portfolio/newkitchen2.jpg',
    },
    {
      title: 'Luxury Bathroom Suite',
      category: 'Bathrooms',
      image: '/images/portfolio/bathroom1.jpg',
    },
    {
      title: 'Garden Decking Project',
      category: 'Outdoor',
      image: '/images/portfolio/outsidepato.jpg',
    },
    {
      title: 'Building Extension',
      category: 'Extensions',
      image: '/images/portfolio/Outsidebuilding.jpg',
    },
    {
      title: 'Custom Kitchen Cabinets',
      category: 'Carpentry',
      image: '/images/portfolio/newkitchen3.jpg',
    },
    {
      title: 'Outbuilding Construction',
      category: 'Renovations',
      image: '/images/portfolio/Outbuilding3.jpg',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Our Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A showcase of our craftsmanship and dedication to quality in every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 px-4 md:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-square cursor-pointer"
              onClick={() => setSelectedImage({ ...project, index })}
            >
              <img 
                alt={`${project.title} - SGH Carpentry`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                src={project.image} />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6">
                <div className="text-center">
                   <Search className="w-6 h-6 sm:w-10 sm:h-10 text-primary mb-2 mx-auto" />
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-foreground/70 hover:text-primary transition-colors z-10"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-card p-4 rounded-lg border border-border"
              onClick={(e) => e.stopPropagation()}
            >
                <img 
                  alt={`${selectedImage.title} - SGH Carpentry`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                  src={selectedImage.image} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
  