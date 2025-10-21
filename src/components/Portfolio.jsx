
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Kitchens', 'Bathrooms', 'Extensions', 'Outdoor', 'Carpentry'];

  const projects = [
    {
      title: 'Modern Kitchen Renovation',
      category: 'Kitchens',
      image: '/images/portfolio/newkitchen2.jpg',
    },
    {
      title: 'Contemporary Kitchen Design',
      category: 'Kitchens',
      image: '/images/portfolio/newkitchen.jpg',
    },
    {
      title: 'Kitchen Near Window',
      category: 'Kitchens',
      image: '/images/portfolio/Kitchennearwindow.jpg',
    },
    {
      title: 'Premium Kitchen Installation',
      category: 'Kitchens',
      image: '/images/portfolio/newkitchen1.jpg',
    },
    {
      title: 'Elegant Kitchen Setup',
      category: 'Kitchens',
      image: '/images/portfolio/newkitchen3.jpg',
    },
    {
      title: 'Stylish Kitchen Renovation',
      category: 'Kitchens',
      image: '/images/portfolio/newkitchen5.jpg',
    },
    {
      title: 'Luxury Bathroom Suite',
      category: 'Bathrooms',
      image: '/images/portfolio/bathroom1.jpg',
    },
    {
      title: 'Building Extension',
      category: 'Extensions',
      image: '/images/portfolio/Outsidebuilding.jpg',
    },
    {
      title: 'House Extension Project',
      category: 'Extensions',
      image: '/images/portfolio/Outsidebuilding2.jpg',
    },
    {
      title: 'Property Extension',
      category: 'Extensions',
      image: '/images/portfolio/houseoutside.jpg',
    },
    {
      title: 'Exterior Build',
      category: 'Extensions',
      image: '/images/portfolio/Outsidehouse.jpg',
    },
    {
      title: 'Garden Decking Project',
      category: 'Outdoor',
      image: '/images/portfolio/outsidepato.jpg',
    },
    {
      title: 'Patio Construction',
      category: 'Outdoor',
      image: '/images/portfolio/outsidepatio1.jpg',
    },
    {
      title: 'Outbuilding Construction',
      category: 'Outdoor',
      image: '/images/portfolio/Outbuilding3.jpg',
    },
    {
      title: 'Custom Carpentry Work',
      category: 'Carpentry',
      image: '/images/portfolio/Upstairs2.jpg',
    },
    {
      title: 'Interior Woodwork',
      category: 'Carpentry',
      image: '/images/portfolio/Upstairs3.jpg',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block"
          >
            Our Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4"
          >
            Project Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4"
          >
            Explore our portfolio of completed projects showcasing our expertise across different specialties.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.7 + (index * 0.08),
                type: "spring",
                stiffness: 150,
                damping: 12
              }}
            >
              <Button
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-primary text-black hover:bg-primary/90 border-2 border-white shadow-lg' 
                    : 'border-2 border-border text-foreground hover:border-primary hover:text-primary'
                  }
                `}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.image}-${index}`}
                initial={{ opacity: 0, scale: 0.7, rotateY: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 90,
                  damping: 12
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateZ: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0 25px 50px rgba(144, 238, 144, 0.3)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer border border-border hover:border-primary transition-colors duration-300"
                onClick={() => setSelectedImage({ ...project, index })}
              >
                <img 
                  alt={`${project.title} - SGH Carpentry`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={project.image} 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card/50 hover:bg-card text-foreground/70 hover:text-primary transition-all z-10 border border-border"
            >
              <X size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-card/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border">
                <img 
                  alt={`${selectedImage.title} - SGH Carpentry`}
                  className="w-full h-auto max-h-[70vh] object-contain rounded mb-4"
                  src={selectedImage.image} 
                />
                
                {/* Image Info */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-2">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
  