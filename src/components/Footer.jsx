
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
             <Link to="/" className="flex items-center mb-4">
               <img src="/images/Logo.png" alt="SGH Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </Link>
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
              <a href="mailto:Sghcarpentryandbuild@icloud.com" className="w-10 h-10 bg-background hover:bg-primary text-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors border border-border">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-foreground mb-4">Navigation</p>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
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
          <p className="mt-2">
            Website designed and developed by{' '}
            <a 
              href="https://www.cisconnects.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              CisConnects
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  