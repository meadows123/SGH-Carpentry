import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const BookingModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    projectDetails: '',
  });

  // Available time slots
  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimeSelect = (time) => {
    setFormData({ ...formData, preferredTime: time });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        to_name: 'SGH Carpentry & Build',
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        project_details: formData.projectDetails || 'No additional details provided',
        message: `
New Free Consultation Booking Request

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Visit Details:
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}

Project Details:
${formData.projectDetails || 'No additional details provided'}
        `.trim(),
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: 'Booking Request Sent!',
          description: 'Thank you! We\'ll contact you shortly to confirm your free consultation.',
          variant: 'default',
        });

        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          projectDetails: '',
        });
        onClose();
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: 'Submission Failed',
        description: 'There was an error sending your booking request. Please try calling us directly or try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Book a Free Visit</h2>
                <p className="text-muted-foreground mt-1">Schedule your free consultation with us</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-card rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-white" />
                  Your Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="bg-card"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7xxx xxxxxx"
                      required
                      className="bg-card"
                    />
                  </div>
                </div>
              </div>

              {/* Visit Schedule */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-white" />
                  Preferred Visit Date & Time
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Date <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={today}
                    required
                    className="bg-card"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    Select Time <span className="text-primary">*</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          px-3 py-2 rounded-md text-sm font-medium transition-all
                          ${formData.preferredTime === time
                            ? 'bg-primary text-black border-2 border-white shadow-lg'
                            : 'bg-card border border-border hover:border-primary hover:bg-card/50'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-white" />
                  Project Details
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about your project (Optional)
                  </label>
                  <Textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project, what type of work you need, budget range, or any specific requirements..."
                    className="bg-card resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-black hover:bg-primary/90 font-semibold border-2 border-white shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

