import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  // Sample Instagram posts - replace with actual posts
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      caption: "Beautiful custom kitchen renovation completed! 🏠✨",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
      caption: "New decking project finished - perfect for summer evenings! 🌅",
      likes: 38,
      comments: 12,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      caption: "Loft conversion progress - transforming unused space! 🏗️",
      likes: 55,
      comments: 15,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
      caption: "Custom built-in storage solution - maximizing every inch! 📦",
      likes: 29,
      comments: 6,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      caption: "Bathroom renovation complete - luxury meets functionality! 🛁",
      likes: 47,
      comments: 9,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
      caption: "Garden fencing project - privacy and style combined! 🌿",
      likes: 33,
      comments: 7,
    },
  ];

  return (
    <section id="instagram" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Follow Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4">
            Latest Projects on Instagram
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Follow our journey and see our latest work in real-time. From concept to completion, we share every step.
          </p>
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
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="flex items-center gap-1">
                      <span className="text-lg">❤️</span>
                      <span className="text-sm font-semibold">{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-lg">💬</span>
                      <span className="text-sm font-semibold">{post.comments}</span>
                    </span>
                  </div>
                  <p className="text-xs px-2 line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </motion.div>
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
