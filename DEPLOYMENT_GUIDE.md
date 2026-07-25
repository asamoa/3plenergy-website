# 🚀 Website Deployment Guide

A complete, beginner-friendly guide to getting your website online.

## 📋 Overview

This guide covers:
1. ✅ Registering a domain name
2. ✅ Setting up professional email
3. ✅ Deploying the website (FREE options)
4. ✅ Connecting your domain to the website

**Estimated Time**: 1-2 hours  
**Total Cost**: $10-25 (just for domain + email)

---

## PART 1: Register a Domain Name

### Step 1: Choose a Domain Registrar

**Recommended: Namecheap** (Beginner-friendly, affordable)
- Website: https://www.namecheap.com

**Alternatives:**
- Google Domains (now Squarespace): https://domains.squarespace.com
- GoDaddy: https://www.godaddy.com
- Porkbun: https://porkbun.com

### Step 2: Find Your Domain Name

**Recommended domains for 3PL Energy LTD:**
- `3plenergy.com` ⭐ **Best choice** - short and professional
- `3pl-energy.com` - Good alternative
- `3plenergyltd.com` - Full company name
- `3plenergymarine.com` - Emphasizes marine services

**Tips:**
- Keep it short and memorable
- Use `.com` if available (most professional)
- Alternatives: `.net`, `.co`, `.biz`

### Step 3: Purchase the Domain

1. Go to Namecheap.com
2. Search for your desired domain name
3. Add to cart
4. **Uncheck unnecessary addons** (you don't need most of them)
5. **Keep WhoisGuard** (privacy protection) - Usually FREE first year
6. Complete purchase (~$10-15/year)

**✅ DONE!** You now own your domain.

---

## PART 2: Set Up Professional Email

You want emails like: `info@yourcompany.com`, `sales@yourcompany.com`

### Option A: Google Workspace (Recommended - $6/user/month)

**Pros:**
- Professional Gmail interface
- 30GB storage per user
- Calendar, Drive, Meet included
- Very reliable

**Setup Steps:**

1. **Sign Up**
   - Go to: https://workspace.google.com
   - Click "Get Started"
   - Enter your business name
   - Select "Just you" or number of employees
   - Enter the domain you purchased

2. **Verify Domain Ownership**
   - Google will give you a TXT record
   - Log into Namecheap
   - Go to Domain List → Manage → Advanced DNS
   - Add the TXT record Google provides
   - Wait 10-15 minutes, then verify in Google Workspace

3. **Set Up MX Records**
   - Google will provide MX records
   - Add them in Namecheap's Advanced DNS section
   - These tell email where to deliver messages

4. **Create Email Accounts**
   - Create: `info@3plenergy.com` (general enquiries)
   - Create: `operations@3plenergy.com` (marine/ship management)
   - Create: `trading@3plenergy.com` (oil trading)
   - Create: `admin@3plenergy.com` (administrative)

### Option B: Zoho Mail (FREE for 1 user)

**Pros:**
- FREE for 1 mailbox (5GB storage)
- Good for starting out
- Can upgrade later

**Setup Steps:**
1. Go to: https://www.zoho.com/mail/
2. Sign up with your domain
3. Verify domain (similar to Google)
4. Follow Zoho's setup wizard

### Option C: Namecheap Email (Cheap - $1.18/month)

1. In Namecheap dashboard, go to your domain
2. Click "Email" tab
3. Purchase "Private Email"
4. Very basic but works for simple needs

**✅ DONE!** You now have professional email addresses.

---

## PART 3: Deploy Your Website (FREE Options)

### Option 1: GitHub Pages (Recommended for Beginners) 🌟

**Cost:** FREE  
**Speed:** Fast  
**Custom Domain:** Yes  
**Difficulty:** Easy

#### Steps:

1. **Create a GitHub Account**
   - Go to: https://github.com
   - Sign up (it's free)

2. **Create a New Repository**
   - Click the "+" icon → "New repository"
   - Name it: `your-company-website` (or any name)
   - Make it PUBLIC
   - Click "Create repository"

3. **Upload Your Website Files**
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site is now live at: `https://yourusername.github.io/your-company-website`

5. **Connect Your Domain** (Do this after buying domain)
   - In GitHub Pages settings, add your custom domain
   - In Namecheap, add these DNS records:
     ```
     Type: A Record
     Host: @
     Value: 185.199.108.153
     
     Type: A Record
     Host: @
     Value: 185.199.109.153
     
     Type: A Record
     Host: @
     Value: 185.199.110.153
     
     Type: A Record
     Host: @
     Value: 185.199.111.153
     
     Type: CNAME Record
     Host: www
     Value: yourusername.github.io
     ```
   - Wait 24-48 hours for DNS propagation

### Option 2: Netlify (Also Excellent) 🌟

**Cost:** FREE  
**Speed:** Very Fast  
**Custom Domain:** Yes  
**Difficulty:** Very Easy

#### Steps:

1. **Sign Up for Netlify**
   - Go to: https://www.netlify.com
   - Sign up with GitHub, email, or other method

2. **Deploy Your Site**
   
   **Method A: Drag & Drop (Easiest)**
   - On Netlify dashboard, you'll see "Want to deploy a new site without connecting to Git?"
   - Drag the `website` folder onto the upload area
   - Your site is instantly live at: `random-name-12345.netlify.app`

   **Method B: GitHub (Better for updates)**
   - Click "New site from Git"
   - Connect to GitHub
   - Select your repository
   - Deploy settings: (leave defaults)
   - Click "Deploy site"

3. **Connect Your Custom Domain**
   - In Netlify, go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `yourcompany.com`)
   - Netlify will provide nameservers or DNS records
   - Update these in Namecheap
   - Enable HTTPS (Netlify does this automatically)

4. **Bonus: Contact Form Integration**
   - In your `index.html`, just add `data-netlify="true"` to the form
   - Netlify will automatically handle form submissions!

### Option 3: Vercel (Similar to Netlify)

**Cost:** FREE  
**Process:** Very similar to Netlify  
**Website:** https://vercel.com

Follow similar steps as Netlify.

---

## PART 4: Connect Everything

### DNS Settings in Namecheap

Once you've chosen your hosting (GitHub Pages, Netlify, etc.):

1. **Log into Namecheap**
2. **Go to Domain List → Manage**
3. **Click "Advanced DNS"**
4. **Add Records Provided by Your Host**

**For GitHub Pages:**
```
Type: A Record | Host: @ | Value: 185.199.108.153
Type: A Record | Host: @ | Value: 185.199.109.153
Type: A Record | Host: @ | Value: 185.199.110.153
Type: A Record | Host: @ | Value: 185.199.111.153
Type: CNAME | Host: www | Value: yourusername.github.io
```

**For Netlify:**
```
Type: CNAME | Host: www | Value: yoursite.netlify.app
Type: A Record | Host: @ | Value: 75.2.60.5
```
(Netlify provides specific instructions)

**For Email (Google Workspace):**
```
Type: MX Record | Host: @ | Value: [Google provides these]
```

### DNS Propagation

- After updating DNS, changes take 24-48 hours to propagate worldwide
- Use https://dnschecker.org to check propagation status
- Your website might work in some locations before others

---

## 🎯 COMPLETE SETUP CHECKLIST

### Domain & Email
- [ ] Register domain name ($10-15/year)
- [ ] Set up professional email ($6/month or FREE with Zoho)
- [ ] Verify domain ownership
- [ ] Configure MX records for email
- [ ] Test sending/receiving emails

### Website Customization
- [x] Company name set to 3PL Energy LTD
- [x] Contact information updated (Tema address, phone numbers)
- [x] About Us customized for marine & energy services
- [x] Services updated (Marine, Ship Management, Oil Trading)
- [ ] Add company logo (if you have one)
- [ ] Set up Formspree for contact form (see FORMSPREE_SETUP.md)
- [ ] Update email addresses from placeholder to real domain emails
- [ ] Test website on mobile and desktop

### Website Deployment
- [ ] Choose hosting platform (GitHub Pages, Netlify, or Vercel)
- [ ] Create account on hosting platform
- [ ] Upload website files
- [ ] Verify site is live on temporary URL
- [ ] Connect custom domain
- [ ] Update DNS records
- [ ] Wait for DNS propagation
- [ ] Enable HTTPS/SSL (usually automatic)
- [ ] Test website on mobile and desktop
- [ ] Test from different browsers

### Post-Launch
- [ ] Submit site to Google Search Console
- [ ] Create Google My Business listing
- [ ] Share website with family/friends for feedback
- [ ] Add website to business cards
- [ ] Update email signatures with website link
- [ ] Consider social media profiles (LinkedIn, Facebook)

---

## 💡 Pro Tips

### 1. **Start Simple**
   - Get the basic site up first
   - Perfect it later
   - Don't let perfection stop you from launching

### 2. **Test Before Going Live**
   - View the site locally first
   - Check on your phone
   - Ask others to review

### 3. **Keep Credentials Safe**
   - Save all passwords in a secure place
   - Use a password manager (LastPass, 1Password)
   - Don't share login details

### 4. **Backup Your Site**
   - Keep a copy of all website files
   - If using GitHub, it's automatically backed up

### 5. **SSL Certificate**
   - GitHub Pages, Netlify, and Vercel all provide FREE SSL
   - This is the padlock icon in the browser (https://)
   - Absolutely necessary for trust and SEO

### 6. **Mobile Testing**
   - Most visitors will view on mobile
   - Test on iPhone AND Android if possible
   - Use Chrome DevTools mobile emulator

---

## 🆘 Troubleshooting

### "My website isn't loading"
- Check DNS propagation at https://dnschecker.org
- Wait 24-48 hours after changing DNS
- Clear your browser cache (Ctrl+Shift+Delete)
- Try in incognito/private mode

### "Contact form not working"
- If using Netlify, ensure `data-netlify="true"` is in the form
- If using Formspree, check the endpoint URL
- Test the form yourself first

### "Emails not sending/receiving"
- Double-check MX records in DNS settings
- Wait 24 hours after setting up MX records
- Test with mail-tester.com
- Check spam folder

### "Site looks broken on mobile"
- The site is responsive, but test it
- Clear mobile browser cache
- Try different mobile browsers

### "DNS changes not working"
- Wait at least 24 hours
- Check you're editing the right domain
- Remove old DNS records that conflict
- Contact Namecheap support if needed

---

## 📞 Support Resources

### Namecheap Support
- Live Chat: Available 24/7
- Knowledge Base: https://www.namecheap.com/support/

### GitHub Pages Docs
- https://docs.github.com/en/pages

### Netlify Docs
- https://docs.netlify.com

### Google Workspace Support
- https://support.google.com/a/

---

## 🎉 You're Ready to Launch!

Follow this guide step-by-step, and you'll have a professional website online in no time. This will be an excellent stepping stone for your career, and your uncle will have a legitimate online presence for his business.

**Good luck!** 🚀

---

## 📈 Next Steps (After Launch)

Once your site is live, consider:

1. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Add meta descriptions to pages
   - Get listed in business directories

2. **Analytics**
   - Add Google Analytics (free)
   - Track visitor behavior
   - Understand your audience

3. **Social Proof**
   - Add customer testimonials
   - Include photos of operations
   - Link to social media profiles

4. **Content Updates**
   - Add a blog/news section
   - Share industry insights
   - Announce new partnerships

5. **Marketing**
   - Email marketing (Mailchimp free tier)
   - Social media presence
   - Google My Business listing
   - Online directories (Yellow Pages, etc.)

**Your uncle's business is going digital! 🎊**
