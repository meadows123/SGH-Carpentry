import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  // Instagram profile
  const instagramProfile = "https://www.instagram.com/sgh_carpentryandbuild";

  // Recent project photos - each links to Instagram
  const instagramPosts = [
    {
      id: 1,
      image: "/images/portfolio/newkitchen2.jpg",
      caption: "Beautiful custom kitchen renovation completed! 🏠✨",
    },
    {
      id: 2,
      image: "/images/portfolio/outsidepato.jpg",
      caption: "New patio project finished - perfect for summer evenings! 🌅",
    },
    {
      id: 3,
      image: "/images/portfolio/Upstairs2.jpg",
      caption: "Loft space transformation - maximizing your home! 🏗️",
    },
    {
      id: 4,
      image: "/images/portfolio/newkitchen3.jpg",
      caption: "Custom kitchen cabinets - precision craftsmanship! 📦",
    },
    {
      id: 5,
      image: "/images/portfolio/bathroom1.jpg",
      caption: "Bathroom renovation complete - luxury meets functionality! 🛁",
    },
    {
      id: 6,
      image: "/images/portfolio/Outsidebuilding.jpg",
      caption: "Building extension project - quality workmanship! 🏗️",
    },
  ];

  return (
    <section id="instagram" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block"
          >
            Follow Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: 30 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4"
          >
            Latest Projects on Instagram
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4"
          >
            Follow our journey and see our latest work in real-time. From concept to completion, we share every step.
          </motion.p>
          <a
            href="https://www.instagram.com/sgh_carpentryandbuild"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors border-2 border-white shadow-lg text-sm sm:text-base"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @sgh_carpentryandbuild
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 px-4 md:px-0">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.7, rotate: index % 2 === 0 ? -10 : 10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.5 + (index * 0.12),
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 3 : -3,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer border-2 border-transparent hover:border-primary"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <InstagramIcon className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-xs line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/sgh_carpentryandbuild"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors border-b-2 border-white pb-1"
          >
            View All Posts on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
