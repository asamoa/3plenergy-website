# 📧 Setting Up Contact Form with Formspree

This guide will help you connect the contact form on your website to receive enquiries via email.

---

## What is Formspree?

Formspree is a FREE service that forwards website form submissions directly to your email. Perfect for static websites like yours.

**Free Tier Includes:**
- ✅ 50 submissions per month (more than enough to start)
- ✅ Email notifications
- ✅ Spam protection
- ✅ File uploads (if needed later)
- ✅ No credit card required

---

## Step-by-Step Setup (5 minutes)

### Step 1: Create a Formspree Account

1. Go to: https://formspree.io
2. Click "Get Started" (top right)
3. Sign up with your email (or use Google/GitHub)
4. Verify your email address

### Step 2: Create a New Form

1. Once logged in, click **"+ New Form"**
2. Give it a name: `3PL Energy Contact Form`
3. Click "Create Form"

### Step 3: Get Your Form Endpoint

After creating the form, you'll see a page with your unique form ID. It looks like:

```
https://formspree.io/f/YOUR_FORM_ID
```

**Copy this URL** — you'll need it in the next step.

### Step 4: Update Your Website

1. Open the `index.html` file in your website folder
2. Find this line (around line 232):

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

3. Replace `YOUR_FORM_ID` with your actual Formspree form ID

**Example:**
If your endpoint is `https://formspree.io/f/abc123xyz`, change the line to:

```html
<form id="contactForm" action="https://formspree.io/f/abc123xyz" method="POST">
```

4. Save the file

### Step 5: Set Email Destination

1. In Formspree dashboard, click on your form
2. Go to **Settings** → **Email**
3. Add the email where you want to receive enquiries:
   - `info@3plenergy.com` (once you set up your domain email)
   - Or your current email temporarily

4. Click "Save"

### Step 6: Test It!

1. Upload your website (or test locally)
2. Fill out the contact form on your website
3. Submit it
4. Check your email — you should receive the enquiry!

**First Submission:**
- Formspree will ask you to confirm the form the first time
- Check your email and click the confirmation link
- After that, all submissions will come through automatically

---

## ✅ What Happens When Someone Submits?

1. Visitor fills out the form on your website
2. Clicks "Send Enquiry"
3. Formspree receives the data
4. **You get an email** with all the details:
   - Name
   - Email
   - Phone
   - Company
   - Service of Interest
   - Message

5. You can reply directly to that email to contact them back!

---

## 📊 Viewing Submissions

You can also view all submissions in your Formspree dashboard:

1. Log in to Formspree
2. Click on your form
3. See all submissions with dates and details
4. Export to CSV if needed

---

## 🎨 Customization Options

### Custom Thank You Page (Optional)

Instead of Formspree's default success page, redirect users to your own:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
    <!-- rest of form -->
</form>
```

### Custom Subject Line

Make emails easier to identify:

```html
<input type="hidden" name="_subject" value="New Enquiry from 3PL Energy Website">
```

### Spam Protection

Formspree has built-in spam protection, but you can add a honeypot field:

```html
<input type="text" name="_gotcha" style="display:none">
```

---

## 🔧 Troubleshooting

### "Form not working"
- Make sure you replaced `YOUR_FORM_ID` with your actual Formspree ID
- Check that you confirmed the form via the email Formspree sent
- Ensure your website is uploaded (Formspree needs a live URL)

### "Not receiving emails"
- Check your spam folder
- Verify the email address in Formspree settings
- Make sure you confirmed the Formspree form

### "Error message on submit"
- Check that the form action URL is correct
- Ensure you're connected to the internet
- Try refreshing the Formspree dashboard

---

## 💰 Pricing (if you need more later)

| Plan | Price | Submissions/Month |
|------|-------|-------------------|
| **Free** | $0 | 50 |
| **Basic** | $10/mo | 1,000 |
| **Pro** | $40/mo | 10,000 |

**For most small businesses, the FREE plan is plenty!**

---

## 🚀 Alternative: Netlify Forms

If you deploy on Netlify (recommended in DEPLOYMENT_GUIDE.md), you can use their built-in forms instead:

1. Just add `data-netlify="true"` to your form tag:
```html
<form id="contactForm" data-netlify="true">
```

2. Remove the `action` attribute
3. Deploy to Netlify
4. Forms automatically work!
5. View submissions in Netlify dashboard
6. **Free tier: 100 submissions/month**

---

## ✨ You're All Set!

Once you've set up Formspree (or Netlify Forms), your contact form will be fully functional. Every enquiry from your website will come straight to your email inbox!

**Questions?** Check the Formspree documentation: https://help.formspree.io

---

**Next Steps:**
1. Set up Formspree (5 minutes)
2. Test the form
3. Deploy your website
4. Start receiving enquiries! 🎉
