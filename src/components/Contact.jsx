
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+44 7725 126563',
      link: 'tel:+447725126563',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@sghcarpentry.co.uk',
      link: 'mailto:info@sghcarpentry.co.uk',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Serving Southwest UK',
      link: '#',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
      variant: 'default',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Contact Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4">
            Let's Build Something Great
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Have a project in mind? We'd love to hear about it. Reach out today for a no-obligation consultation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-12 bg-card border border-border p-4 sm:p-6 md:p-8 rounded-lg mx-4 md:mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Contact Details</h3>
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-3 md:space-x-4 group"
                >
                  <div className="mt-1">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                      {info.title}
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="bg-background"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="bg-background"
              />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your Phone Number"
                className="bg-background"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="bg-background resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-black hover:bg-primary/90 font-semibold group border-2 border-white shadow-lg"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  