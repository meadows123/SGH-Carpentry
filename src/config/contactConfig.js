// Contact Form Configuration - EmailJS Setup
// EmailJS is configured as the default method for sending contact form emails

export const CONTACT_CONFIG = {
  // Using EmailJS (Free tier available)
  method: 'emailjs',
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
    publicKey: 'YOUR_PUBLIC_KEY',      // Replace with your EmailJS public key
  },
};

// Helper function to submit a contact form using EmailJS
export const submitContactForm = async (formData) => {
  const { emailjs } = CONTACT_CONFIG;
  
  try {
    // Load EmailJS library dynamically
    const { default: emailjs } = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
    
    // Initialize EmailJS with your public key
    emailjs.init(emailjs.publicKey);
    
    // Send email using EmailJS
    const response = await emailjs.send(
      emailjs.serviceId,
      emailjs.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      }
    );
    
    if (response.status !== 200) {
      throw new Error('EmailJS submission failed');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};
