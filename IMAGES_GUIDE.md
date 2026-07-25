# 📸 Images Used in 3PL Energy Website

This document describes all the images used on the website and how to customize them.

---

## 🖼️ Current Images (via Unsplash)

All images are from **Unsplash** — free, high-quality, royalty-free for commercial use.

### Hero Section Background
**Image**: Large oil tanker at sea  
**URL**: `https://images.unsplash.com/photo-1583519890959-5c93f04f8c78`  
**Description**: Massive cargo/oil tanker in open ocean  
**Purpose**: Sets the maritime/shipping tone immediately

### About Section Image
**Image**: Cargo ship at industrial port  
**URL**: `https://images.unsplash.com/photo-1573371578947-0ff36e90c61e`  
**Description**: Close-up of commercial vessel at port with cranes  
**Purpose**: Shows ship management operations

### Services Section Background (Subtle)
**Image**: Aerial view of port operations  
**URL**: `https://images.unsplash.com/photo-1586834124819-67440f83eb20`  
**Description**: Bird's eye view of shipping port and containers  
**Purpose**: Subtle background to emphasize maritime industry  
**Note**: Very low opacity (0.03) so text remains clear

### Why Choose Us Section Background
**Image**: Ocean with cargo ships on horizon  
**URL**: `https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b`  
**Description**: Calm ocean with ships silhouetted against sky  
**Purpose**: Professional maritime backdrop with golden hour lighting

---

## 🔄 How to Change Images

### Option 1: Use Different Unsplash Images

1. Go to **Unsplash.com**
2. Search for: "cargo ship", "oil tanker", "shipping port", "maritime"
3. Find an image you like
4. Click on the image
5. Copy the image URL from the browser
6. Open `styles.css`
7. Find the section you want to change (search for the current URL)
8. Replace with your new Unsplash URL

**Example:**
```css
/* Replace this URL: */
background-image: url('https://images.unsplash.com/photo-1583519890959-5c93f04f8c78?q=80&w=2070');

/* With your new URL: */
background-image: url('https://images.unsplash.com/photo-YOUR-NEW-IMAGE-ID?q=80&w=2070');
```

### Option 2: Use Your Own Company Photos

If you have photos of your actual ships, operations, or facilities:

1. **Optimize your images first:**
   - Resize to reasonable dimensions (1920px wide max)
   - Compress using TinyPNG.com or similar
   - Save as .jpg for photos, .png for graphics

2. **Add images to website folder:**
   - Save images in the `website/` folder
   - Example names: `hero-ship.jpg`, `about-port.jpg`

3. **Update CSS:**
```css
/* Instead of Unsplash URL, use local file: */
background-image: url('hero-ship.jpg');
```

---

## 📐 Image Requirements

For best results, your images should be:

| Section | Recommended Size | Format |
|---------|------------------|--------|
| Hero Background | 1920x1080px | JPG |
| About Image | 800x600px | JPG |
| Service Background | 1920x1080px | JPG |
| Why Choose Background | 1920x1080px | JPG |

---

## 🎨 Image Overlays Explained

The images have dark overlays to ensure text remains readable:

### Hero Section
```css
background: linear-gradient(rgba(26, 26, 46, 0.85), rgba(15, 52, 96, 0.75)), url('image.jpg');
```
- Creates a dark blue gradient over the image
- 85% opacity on top, 75% on bottom
- Ensures white text is readable

### Why Choose Section
```css
background: linear-gradient(rgba(26, 26, 46, 0.95), rgba(15, 52, 96, 0.95)), url('image.jpg');
```
- Even darker overlay (95%) for better text contrast

### Services Section
```css
opacity: 0.03;
```
- Very subtle — barely visible
- Just adds texture without distracting

---

## 🚀 Free Stock Photo Sources

If you need more maritime images:

### Unsplash (Recommended)
- **URL**: https://unsplash.com
- **License**: Free for commercial use
- **Attribution**: Not required
- **Search**: "cargo ship", "oil tanker", "maritime", "shipping port"

### Pexels
- **URL**: https://pexels.com
- **License**: Free for commercial use
- **Attribution**: Appreciated but not required

### Pixabay
- **URL**: https://pixabay.com
- **License**: Free for commercial use
- **Note**: Check individual licenses

---

## 💡 Pro Tips

### 1. **Keep File Sizes Small**
- Large images slow down your website
- Use compression tools: TinyPNG.com, Squoosh.app
- Aim for under 500KB per image

### 2. **Use Consistent Style**
- All images should have similar color tones
- Current images use blue/ocean tones with professional lighting

### 3. **Avoid Busy Backgrounds**
- Images with too much detail distract from text
- Stick with images that have clear focal points

### 4. **Test on Mobile**
- Check how images look on phone screens
- Some images crop differently on mobile

### 5. **Copyright**
- Only use images you have rights to
- Unsplash is safe — all images are free to use
- Don't Google search and download random images

---

## 🔧 Troubleshooting

### "Image not loading"
- Check the URL is correct
- Ensure you're connected to the internet (for Unsplash images)
- If using local images, make sure file is in the `website/` folder

### "Image looks pixelated"
- Use higher resolution images
- Add `?q=80&w=2070` to Unsplash URLs for better quality

### "Text hard to read"
- Increase overlay opacity in CSS
- Example: Change `0.85` to `0.90` for darker overlay

### "Image doesn't fit properly"
- Use `background-size: cover;` (already set)
- Adjust `background-position: center;` to `top`, `bottom`, `left`, or `right`

---

## 📝 Quick Reference: Where Images Are Used

| File | Line(s) | Image Type |
|------|---------|------------|
| `styles.css` | ~146 | Hero background |
| `styles.css` | ~343 | About section |
| `styles.css` | ~363 | Services background |
| `styles.css` | ~481 | Why Choose background |

---

## ✨ Want More Visual Impact?

Consider adding:
- **Image gallery** section showing fleet/operations
- **Team photos** in About section
- **Client logos** in a partners section
- **Video background** in hero (advanced)

Let me know if you need help adding any of these!

---

**Current Status**: All images implemented and working ✅  
**Performance**: Images load from Unsplash CDN (fast) 🚀  
**Mobile**: All images are responsive 📱
