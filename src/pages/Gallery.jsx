import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from '@/components/Portfolio';
import InstagramFeed from '@/components/Instagram';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - SGH Carpentry & Build</title>
        <meta name="description" content="View our portfolio of completed projects. From kitchens to extensions, see the quality craftsmanship we deliver." />
      </Helmet>
      <div className="pt-20 md:pt-24">
        <Portfolio />
        <InstagramFeed />
      </div>
    </>
  );
};

export default Gallery;

