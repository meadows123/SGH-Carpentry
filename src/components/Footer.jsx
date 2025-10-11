
import React from 'react';
import { Hammer, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
             <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-3 mb-4 text-left">
               <Hammer className="w-8 h-8 text-primary" />
               <div>
                 <span className="text-xl font-bold text-foreground block">SGH</span>
                 <span className="text-xs text-muted-foreground tracking-widest uppercase">Carpentry & Build</span>
               </div>
            </button>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Delivering high-quality carpentry and building solutions with a professional touch and a commitment to excellence.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/sgh_carpentryandbuild" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background hover:bg-primary text-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors border border-border">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background hover:bg-primary text-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors border border-border">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@sghcarpentry.co.uk" className="w-10 h-10 bg-background hover:bg-primary text-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors border border-border">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-foreground mb-4">Navigation</p>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('#home')} className="text-muted-foreground hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('#portfolio')} className="text-muted-foreground hover:text-primary transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('#about')} className="text-muted-foreground hover:text-primary transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('#instagram')} className="text-muted-foreground hover:text-primary transition-colors">Instagram</button></li>
              <li><button onClick={() => scrollToSection('#reviews')} className="text-muted-foreground hover:text-primary transition-colors">Reviews</button></li>
              <li><button onClick={() => scrollToSection('#contact')} className="text-muted-foreground hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-foreground mb-4">Our Services</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom Carpentry</li>
              <li>Home Renovations</li>
              <li>Extensions & Lofts</li>
              <li>Kitchen Fitting</li>
              <li>General Building</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} SGH Carpentry & Build. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  