
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2, Award, Users, Clock, Shield, Star, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, once: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, once: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, once: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.2, once: true });
  
  const stats = [
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '1000+', label: 'Projects Completed' },
    { icon: Star, value: '5.0', label: 'Customer Rating' },
  ];

  const values = [
    'Premium quality materials',
    'Unwavering attention to detail',
    'Transparent & honest pricing',
    'Clean & respectful worksites',
    'Guaranteed customer satisfaction',
    'Fully insured & certified',
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Fully Certified & Insured',
      description: 'All our work is covered by comprehensive insurance and carried out by certified professionals.',
    },
    {
      icon: Award,
      title: 'Award-Winning Quality',
      description: 'Recognized for excellence in craftsmanship and customer service across Southwest UK.',
    },
    {
      icon: Users,
      title: 'Family-Run Business',
      description: 'As a family business, we treat every project with personal care and dedication.',
    },
    {
      icon: Wrench,
      title: 'Complete Service',
      description: 'From initial consultation to final touches, we handle every aspect of your project.',
    },
  ];
  
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section with Image */}
      <section id="about" className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/portfolio/houseoutside.jpg"
            alt="SGH Carpentry & Build"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        <div className="container-custom relative z-10 py-20" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              About SGH Carpentry & Build
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              Building Excellence Since 2010
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              A family-run business delivering premium carpentry and building services across Southwest UK. Quality craftsmanship you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container-custom" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full border-2 border-primary/20">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom" ref={valuesRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  alt="SGH Carpentry quality craftsmanship" 
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border border-border" 
                  src="/images/portfolio/newkitchen5.jpg" 
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-48 h-48"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img 
                    alt="SGH building project" 
                    className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-background" 
                    src="/images/portfolio/Outsidebuilding2.jpg" 
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Legacy of Quality Craftsmanship
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over 15 years, SGH Carpentry & Build has been synonymous with exceptional quality and reliability. Founded as a family-run business, we've grown through dedication to our craft and unwavering commitment to our clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every project we undertake reflects our passion for perfection. From kitchens to extensions, we bring expertise, attention to detail, and genuine care to every job.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary text-black hover:bg-primary/90 font-semibold border-2 border-white shadow-lg"
                >
                  Discuss Your Project
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-card">
        <div className="container-custom" ref={whyRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just builders – we're craftsmen dedicated to bringing your vision to life with precision and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/20 flex-shrink-0">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
  