# 📧 EmailJS Setup Guide for SGH Carpentry

Complete step-by-step guide to set up EmailJS for your contact form.

## 🚀 Step 1: Create EmailJS Account

1. **Go to EmailJS**
   - Visit https://www.emailjs.com/
   - Click "Sign Up" (Free account available)

2. **Create Account**
   - Use your business email
   - Verify your email address

## 📮 Step 2: Add Email Service

1. **Go to Email Services**
   - In your EmailJS dashboard, click "Email Services"
   - Click "Add New Service"

2. **Choose Your Email Provider**
   - **Gmail**: Most common choice
   - **Outlook**: Good alternative
   - **Yahoo**: Another option
   - **Custom SMTP**: For business email servers

3. **Connect Gmail (Recommended)**
   - Click "Gmail"
   - Click "Connect Account"
   - Sign in with your Gmail account
   - Allow EmailJS access
   - **Copy the Service ID** (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. **Go to Email Templates**
   - Click "Email Templates"
   - Click "Create New Template"

2. **Template Settings**
   - **Template Name**: `SGH Contact Form`
   - **Subject**: `New Contact Form Submission - SGH Carpentry`

3. **Email Content Template**
   ```
   New Contact Form Submission - SGH Carpentry & Build

   Customer Details:
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone_number}}
   
   Message:
   {{message}}

   ---
   This message was sent from your website contact form.
   ```

4. **Template Variables**
   Make sure these variables are in your template:
   - `{{from_name}}` - Customer's name
   - `{{from_email}}` - Customer's email
   - `{{phone_number}}` - Customer's phone
   - `{{message}}` - Customer's message

5. **Save Template**
   - Click "Save"
   - **Copy the Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Public Key

1. **Go to Account Settings**
   - Click your profile/account icon
   - Go to "General" or "API Keys"

2. **Copy Public Key**
   - Find "Public Key" or "API Key"
   - **Copy the Public Key** (e.g., `user_abc123def456`)

## ⚙️ Step 5: Update Your Website Config

1. **Open the config file**
   - Open `src/config/contactConfig.js`

2. **Replace the placeholder values**
   ```javascript
   emailjs: {
     serviceId: 'service_abc123',        // Your EmailJS Service ID
     templateId: 'template_xyz789',      // Your EmailJS Template ID
     publicKey: 'user_abc123def456',     // Your EmailJS Public Key
   },
   ```

## 🧪 Step 6: Test the Setup

1. **Start your dev server**
   ```bash
   npm run dev
   ```

2. **Test the contact form**
   - Go to your contact section
   - Fill out the form with test data
   - Submit the form
   - Check your email for the message

3. **Check for errors**
   - Open browser DevTools (F12)
   - Look in Console tab for any errors
   - If there are errors, double-check your IDs

## 📊 Step 7: Monitor Usage

1. **Check EmailJS Dashboard**
   - Monitor your email sending quota
   - Free tier: 200 emails/month
   - Upgrade if needed for more emails

2. **Check Spam Folder**
   - Sometimes emails go to spam
   - Add your domain to email whitelist

## 🎯 EmailJS Template Variables Reference

Use these exact variable names in your EmailJS template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Customer's name | "John Smith" |
| `{{from_email}}` | Customer's email | "john@example.com" |
| `{{phone_number}}` | Customer's phone | "+44 1234 567890" |
| `{{message}}` | Customer's message | "I need a quote for..." |

## 🔧 Troubleshooting

### "EmailJS submission failed"
- Check that all three IDs are correct
- Verify template variables match exactly
- Check browser console for detailed errors

### "Service not found"
- Double-check your Service ID
- Make sure the email service is connected

### "Template not found"
- Double-check your Template ID
- Make sure the template is saved and published

### "Invalid public key"
- Double-check your Public Key
- Make sure it's the public key, not private

### Emails not arriving
- Check spam/junk folder
- Verify email service connection in EmailJS
- Check EmailJS dashboard for failed sends

### "Quota exceeded"
- You've hit the 200 email/month free limit
- Upgrade to paid plan or wait for next month

## 💡 Pro Tips

1. **Test with different email addresses** to ensure delivery
2. **Set up email forwarding** if you want emails in multiple inboxes
3. **Use a business email** for professional appearance
4. **Monitor your quota** to avoid hitting limits
5. **Keep your credentials secure** - don't share them publicly

## 📞 Alternative: Contact Form Testing

If you want to test without setting up EmailJS immediately, you can temporarily change the method back to 'formspree' in the config file.

---

## ✅ Quick Checklist

- [ ] EmailJS account created
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Service ID copied
- [ ] Email template created
- [ ] Template ID copied
- [ ] Public key copied
- [ ] Config file updated with all three IDs
- [ ] Contact form tested successfully
- [ ] Email received in inbox

**You're all set!** Your contact form will now send real emails to your business inbox! 🎉
