import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { submitReview } from '@/config/reviewsConfig';

const ReviewForm = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    rating: 0,
    project: '',
    review: '',
  });

  const projectTypes = [
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Loft Conversion',
    'Home Extension',
    'Garden Decking',
    'Custom Carpentry',
    'Fencing',
    'Flooring',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.location || !formData.rating || !formData.review) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (formData.rating === 0) {
      toast({
        title: 'Rating Required',
        description: 'Please select a star rating.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit review using configured method
      await submitReview(formData);
      
      toast({
        title: 'Review Submitted!',
        description: 'Thank you for your feedback! We\'ll review and publish it shortly.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        location: '',
        rating: 0,
        project: '',
        review: '',
      });
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your review. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Leave a Review</h2>
            <p className="text-sm text-gray-600 mt-1">Share your experience with SGH Carpentry & Build</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className="w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Your email will not be publicly displayed</p>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <Input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="Bristol"
              required
              className="w-full"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= formData.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 hover:text-yellow-200'
                    }`}
                  />
                </button>
              ))}
            </div>
            {formData.rating > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                {formData.rating === 5 && '⭐ Excellent!'}
                {formData.rating === 4 && '👍 Great!'}
                {formData.rating === 3 && '😊 Good'}
                {formData.rating === 2 && '🤔 Fair'}
                {formData.rating === 1 && '😕 Poor'}
              </p>
            )}
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Review */}
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
              Your Review <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Tell us about your experience..."
              required
              rows={6}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.review.length} characters
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600">
              By submitting this review, you agree that your name, location, and review may be displayed on our website. 
              Your email address will remain private and will only be used to verify your review.
            </p>
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
              className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ReviewForm;

