import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import Reviews from '@/components/Reviews';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SGH Carpentry & Build - Professional Building & Carpentry Services</title>
        <meta name="description" content="Expert carpentry and building services in the UK. From custom woodwork to complete renovations, we bring your vision to life with precision and craftsmanship." />
      </Helmet>
      <Hero />
      <ServicesShowcase />
      <Reviews />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default Home;

