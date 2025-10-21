import React from 'react';
import { Clock, Users, Award, Star, Shield, Wrench } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '1000+', label: 'Projects Completed' },
    { icon: Star, value: '5.0', label: 'Customer Rating' },
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

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              About SGH Carpentry & Build
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              Building Excellence Since 2010
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              A family-run business delivering premium carpentry and building services across Southwest UK. Quality craftsmanship you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Dreams Since 2010
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SGH Carpentry & Build was founded with a simple yet powerful vision: to deliver exceptional craftsmanship that transforms houses into homes. What started as a small family-run carpentry service has grown into one of Southwest UK's most trusted building companies, with over <span className="text-primary font-semibold">15 years of excellence</span> in the industry.
              </p>
              
              <p>
                Our journey began when our founder, driven by a passion for quality woodwork and a commitment to honest service, decided to create a business that would prioritize customer satisfaction above all else. From that first kitchen renovation to the hundreds of projects we've completed since, our core values have remained unchanged: <span className="text-foreground font-semibold">integrity, craftsmanship, and dedication</span>.
              </p>

              <p>
                What sets us apart and has driven our success is our unwavering attention to detail and our personal approach to every project. We don't just build—we listen, we advise, and we deliver beyond expectations. Every member of our team shares the same commitment to excellence, treating your property with the care and respect it deserves. Our <span className="text-primary font-semibold">500+ satisfied clients</span> and countless five-star reviews stand as testament to our dedication.
              </p>

              <p className="text-foreground font-medium">
                Today, we're proud to offer a comprehensive range of services—from bespoke carpentry and kitchen installations to full home renovations and extensions—all delivered with the same family values and professional excellence that have been our foundation from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy of Quality Craftsmanship Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Transformations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Legacy of Quality Craftsmanship
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the remarkable transformations we create. Every project tells a story of dedication, skill, and attention to detail.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Comparison 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-background p-6 rounded-lg border border-border">
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md font-semibold z-10">
                  BEFORE
                </div>
                <img 
                  src="/images/portfolio/bathroom1.jpg"
                  alt="Before renovation"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md font-semibold z-10">
                  AFTER
                </div>
                <img 
                  src="/images/services/bathrooms.jpg"
                  alt="After renovation"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Comparison 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-background p-6 rounded-lg border border-border">
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md font-semibold z-10">
                  BEFORE
                </div>
                <img 
                  src="/images/portfolio/newkitchen1.jpg"
                  alt="Before renovation"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md font-semibold z-10">
                  AFTER
                </div>
                <img 
                  src="/images/portfolio/newkitchen5.jpg"
                  alt="After renovation"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Comparison 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-background p-6 rounded-lg border border-border">
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md font-semibold z-10">
                  BEFORE
                </div>
                <img 
                  src="/images/portfolio/Outsidebuilding.jpg"
                  alt="Before renovation"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md font-semibold z-10">
                  AFTER
                </div>
                <img 
                  src="/images/portfolio/Outsidebuilding2.jpg"
                  alt="After renovation"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just builders – we're craftsmen dedicated to bringing your vision to life with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;