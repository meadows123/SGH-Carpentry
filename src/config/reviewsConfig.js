// Review Submission Configuration
// Choose your preferred method for handling review submissions

export const REVIEW_CONFIG = {
  // Option 1: Formspree (Recommended - Easy Setup)
  // 1. Sign up at https://formspree.io/
  // 2. Create a new form and get your form ID
  // 3. Replace YOUR_FORM_ID below with your actual form ID
  method: 'formspree',
  formspreeId: 'YOUR_FORM_ID', // e.g., 'xeqbgwvp'
  
  // Option 2: EmailJS (Free tier available)
  // 1. Sign up at https://www.emailjs.com/
  // 2. Create an email service and template
  // 3. Get your credentials and update below
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY',
  },
  
  // Option 3: Custom Backend API
  // If you have your own backend, specify the endpoint
  customEndpoint: '/api/reviews',
};

// Helper function to submit a review
export const submitReview = async (reviewData) => {
  const { method } = REVIEW_CONFIG;
  
  try {
    if (method === 'formspree') {
      const response = await fetch(
        `https://formspree.io/f/${REVIEW_CONFIG.formspreeId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...reviewData,
            _subject: 'New Customer Review Submitted',
          }),
        }
      );
      
      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }
      
      return { success: true };
    } else if (method === 'emailjs') {
      // EmailJS implementation
      const { emailjs } = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
      
      const response = await emailjs.send(
        REVIEW_CONFIG.emailjs.serviceId,
        REVIEW_CONFIG.emailjs.templateId,
        reviewData,
        REVIEW_CONFIG.emailjs.publicKey
      );
      
      if (response.status !== 200) {
        throw new Error('EmailJS submission failed');
      }
      
      return { success: true };
    } else if (method === 'custom') {
      // Custom backend endpoint
      const response = await fetch(REVIEW_CONFIG.customEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      
      if (!response.ok) {
        throw new Error('Custom endpoint submission failed');
      }
      
      const data = await response.json();
      return { success: true, data };
    } else {
      throw new Error('Invalid submission method configured');
    }
  } catch (error) {
    console.error('Review submission error:', error);
    throw error;
  }
};

