# 3PL Energy LTD - Website Documentation

A professional, responsive website for integrated marine services, ship management, and oil trading.

## 📁 Project Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── DEPLOYMENT_GUIDE.md # Step-by-step deployment instructions
```

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Professional gold and dark blue color scheme
- **Smooth Animations**: Scroll animations, hover effects, and transitions
- **Contact Form**: Ready-to-integrate contact form
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: No external dependencies except Google Fonts

## 🎨 Sections

1. **Navigation Bar**: Fixed navigation with mobile hamburger menu
2. **Hero Section**: Full-screen hero with call-to-action buttons
3. **About Section**: Company information with animated stats
4. **Services**: 6 service cards with icons
5. **Why Choose Us**: 4 key benefits
6. **Contact**: Contact information and form
7. **Footer**: Multi-column footer with links

## 🎨 Color Scheme

- **Primary (Gold)**: `#d4af37` - Represents premium quality, luxury
- **Secondary (Dark)**: `#1a1a2e` - Professional, trustworthy
- **Accent (Blue)**: `#0f3460` - Depth and reliability

## 🚀 Quick Start (View Locally)

### Option 1: Simple Double-Click
1. Navigate to the `website` folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Using Python (Recommended for testing)
```bash
cd website
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 3: Using VS Code
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ✏️ Customization Guide

### 1. Company Name (Already Set!)
The website is already configured for **3PL Energy LTD**. No changes needed unless you want to update branding.

### 2. Contact Information (Already Set!)
The website already has:
- **Address**: C6 Village Road, P.O.Box CE 11412, Tema, Ghana
- **Phone**: +233 303 955 233 & +233 260 906 9063
- **Email placeholders**: info@yourdomain.com (update once domain is set up)

**To update emails:**
1. Find `info@yourdomain.com` in `index.html`
2. Replace with `info@3plenergy.com` (after domain setup)

### 3. Content (Already Customized!)
The website features:
- **Marine Services**: World-class support across Africa
- **Ship Management**: Complete solutions for owners & operators  
- **Oil Trading Brokerage**: Global crude oil trading

Feel free to adjust the "Years Experience" stat or other numbers as needed.

### 4. Change Colors
In `styles.css`, modify the `:root` variables:
```css
:root {
    --primary-color: #d4af37;    /* Change this */
    --secondary-color: #1a1a2e;  /* Change this */
    --accent-color: #0f3460;     /* Change this */
}
```

### 5. Add Logo
Replace the text logo in navigation:
```html
<!-- Replace this: -->
<div class="nav-brand">
    <h2>3PL Energy LTD</h2>
</div>

<!-- With this: -->
<div class="nav-brand">
    <img src="logo.png" alt="3PL Energy LTD Logo" height="40">
</div>
```

### 6. Add Real Images
The site currently uses placeholder SVG icons. To add real images:
1. Replace the `.image-placeholder` div in the About section with:
```html
<img src="your-image.jpg" alt="Description">
```

## 📧 Making the Contact Form Functional

The contact form is ready to connect! To make it send real emails:

### Option 1: Formspree (Easiest - FREE) ⭐
**See `FORMSPREE_SETUP.md` for detailed instructions!**

Quick steps:
1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a form named "3PL Energy Contact Form"
3. Get your form endpoint URL
4. Update line 232 in `index.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
5. Done! Enquiries will come to your email.

### Option 2: EmailJS (Free tier available) (this is what im going with)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an email service
3. Follow their integration guide
4. Add their SDK and update `script.js`

### Option 3: Netlify Forms (If hosting on Netlify)
Simply add `data-netlify="true"` to your form:
```html
<form id="contactForm" data-netlify="true">
```

## 🌐 Deployment Options

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions for:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- **Traditional Web Hosting** (Namecheap, Bluehost, etc.)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid & Flexbox
- **JavaScript (ES6+)**: Interactive features
- **Google Fonts**: Inter font family

## 📝 License

This website template is provided for your uncle's business. Feel free to customize and use it as needed.

## 🆘 Need Help?

If you encounter issues:
1. Make sure all files are in the same folder
2. Check browser console for errors (F12)
3. Ensure you're using a modern browser
4. For deployment issues, see `DEPLOYMENT_GUIDE.md`

---

**Created for:** 3PL Energy LTD  
**Purpose:** Professional online presence for marine services & oil trading  
**Status:** Ready to deploy 🚀

---

## 📂 Additional Documentation

- **FORMSPREE_SETUP.md** - How to connect the contact form (5 minutes)
- **DEPLOYMENT_GUIDE.md** - Complete deployment guide for domain, email, and hosting
