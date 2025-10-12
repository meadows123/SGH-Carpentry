# 📧 Contact Form Email Setup

Your contact form is now ready to send real emails! Here's how to set it up.

## 🚀 Quick Setup (Recommended: Formspree)

### Option 1: Formspree (Easiest - 5 minutes)

1. **Sign up for Formspree** (Free tier available)
   - Go to https://formspree.io/
   - Create a free account
   - Click "New Form"
   - Give it a name like "SGH Contact Form"

2. **Get your Form ID**
   - After creating the form, you'll see a form endpoint like: `https://formspree.io/f/xeqbgwvp`
   - The part after `/f/` is your Form ID (e.g., `xeqbgwvp`)

3. **Update the configuration**
   - Open `src/config/contactConfig.js`
   - Replace `YOUR_CONTACT_FORM_ID` with your actual Form ID:
   ```javascript
   formspreeId: 'xeqbgwvp', // Your Form ID here
   ```

4. **Test it!**
   - Build and deploy your site
   - Try submitting the contact form
   - Check your email for the submission

### Option 2: EmailJS (Free tier available)

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account
   - Add an email service (Gmail, Outlook, etc.)
   - Create an email template

2. **Get your credentials**
   - Service ID: From your email service
   - Template ID: From your email template
   - Public Key: From your account settings

3. **Update the configuration**
   - Open `src/config/contactConfig.js`
   - Change the method to `'emailjs'`
   - Update the EmailJS credentials:
   ```javascript
   method: 'emailjs',
   emailjs: {
     serviceId: 'service_abc123',
     templateId: 'template_xyz789',
     publicKey: 'your_public_key',
   },
   ```

## 📧 Email Template Recommendations

When you receive a contact form submission, it should include:

- **Subject**: New Contact Form Submission - SGH Carpentry
- **Customer Name**: [Name]
- **Email**: [Email]
- **Phone**: [Phone] (if provided)
- **Message**: [Message]

## 🔧 Features Included

✅ Form validation (required fields)  
✅ Success/error messages  
✅ Form reset after submission  
✅ Multiple backend options  
✅ Professional error handling  

## ✅ Testing

Before going live:

1. **Test submission**
   - Fill out the contact form completely
   - Submit the form
   - Verify you receive the email

2. **Test validation**
   - Try submitting without required fields
   - Verify error messages appear

3. **Test on mobile**
   - Open on a mobile device
   - Ensure form is usable and readable

## 🔒 Privacy & Security

- Formspree/EmailJS handle form spam protection
- No sensitive data stored on your site
- Consider adding Google reCAPTCHA for additional protection

## 🐛 Troubleshooting

### "Submission Failed" error
- Check that `formspreeId` is correctly set
- Verify your Formspree form is active
- Check browser console for detailed error

### Form not submitting
- Check that `submitContactForm` is imported correctly
- Verify no JavaScript errors in console

### Not receiving emails
- Check spam/junk folder
- Verify email address in Formspree settings
- Check Formspree dashboard for submissions

## 📝 Need Help?

- Formspree docs: https://help.formspree.io/
- EmailJS docs: https://www.emailjs.com/docs/
- React documentation: https://react.dev/

---

**Next Steps:**
1. Choose your backend method (Formspree recommended)
2. Update `src/config/contactConfig.js` with your credentials
3. Test the form
4. Deploy and start receiving inquiries! 🎉

## 📋 Example Email Template for Formspree

Your Formspree email template should look like:

```
New Contact Form Submission - SGH Carpentry

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Message: {{message}}

---
Submitted from your website contact form.
```
