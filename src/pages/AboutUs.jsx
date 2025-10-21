import React from 'react';
import { Helmet } from 'react-helmet';
import About from '@/components/About';
import Contact from '@/components/Contact';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - SGH Carpentry & Build</title>
        <meta name="description" content="Learn more about SGH Carpentry & Build. Professional carpentry and building services with over 15 years of experience in Southwest UK." />
      </Helmet>
      <div>
        <About />
        <Contact />
      </div>
    </>
  );
};

export default AboutUs;

