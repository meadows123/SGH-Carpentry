
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import InstagramFeed from '@/components/Instagram';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>SGH Carpentry & Build - Professional Building & Carpentry Services</title>
        <meta name="description" content="Expert carpentry and building services in the UK. From custom woodwork to complete renovations, we bring your vision to life with precision and craftsmanship." />
        <html lang="en" />
      </Helmet>
      <div className="bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <ServicesShowcase />
          <Portfolio />
          <About />
          <InstagramFeed />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
  