# 🚀 Infinitum Event Countdown Website

A modern, animated single-page countdown website for the Infinitum inter-college tech fest.

## ✨ Features

- **Custom Infinitum Logo** - Precisely crafted SVG logo matching your specifications
- **Animated Countdown Timer** - Real-time countdown with days, hours, minutes, and seconds
- **Photo Gallery** - Showcase past event highlights with smooth animations
- **Dark Theme** - Cohesive design using brand colors (#1D1D1D, #FF1E64, #FFFFFF)
- **Infinity Animations** - Modern entrance effects and smooth scroll interactions
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## 🎨 Brand Colors

- **Primary Pink**: `#FF1E64`
- **Background**: `#1D1D1D`
- **White**: `#FFFFFF`

## 📸 Adding Event Photos

To add your past event photos to the gallery:

1. **Place your images** in the `public` folder or `src/assets` folder:
   ```
   public/
     ├── event-photo-1.jpg
     ├── event-photo-2.jpg
     ├── event-photo-3.jpg
     └── ...
   ```

2. **Update the PhotoGallery component** (`src/components/PhotoGallery.jsx`):
   
   Find this section around line 26:
   ```javascript
   const photos = [
     { id: 1, src: '/placeholder1.jpg', alt: 'Infinitum Event 2024 - 1' },
     { id: 2, src: '/placeholder2.jpg', alt: 'Infinitum Event 2024 - 2' },
     // ... more photos
   ];
   ```

   Replace with your actual image paths:
   ```javascript
   const photos = [
     { id: 1, src: '/event-photo-1.jpg', alt: 'Infinitum 2024 - Opening Ceremony' },
     { id: 2, src: '/event-photo-2.jpg', alt: 'Infinitum 2024 - Tech Talk' },
     { id: 3, src: '/event-photo-3.jpg', alt: 'Infinitum 2024 - Hackathon' },
     { id: 4, src: '/event-photo-4.jpg', alt: 'Infinitum 2024 - Award Ceremony' },
     // Add as many photos as you want
   ];
   ```

## ⏰ Setting the Event Date

Update the countdown target date in `src/App.jsx` (line 12):

```javascript
const eventDate = '2026-01-15T00:00:00'; // Change this to your actual event date
```

Format: `'YYYY-MM-DDTHH:MM:SS'` (24-hour format)

Examples:
- `'2026-03-20T09:00:00'` - March 20, 2026 at 9:00 AM
- `'2026-04-15T00:00:00'` - April 15, 2026 at midnight

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
infinitum-countdown/
├── public/              # Static assets (add your event photos here)
├── src/
│   ├── components/
│   │   ├── InfinitumLogo.jsx      # Custom logo component
│   │   ├── InfinitumLogo.css
│   │   ├── CountdownTimer.jsx     # Countdown timer
│   │   ├── CountdownTimer.css
│   │   ├── PhotoGallery.jsx       # Past events gallery
│   │   └── PhotoGallery.css
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── README.md
```

## 🎯 Customization Tips

### Change Event Title/Tagline

Edit `src/App.jsx` (lines 31-32):
```javascript
<h1 className="event-title">Your Event Title</h1>
<p className="event-tagline">Your Event Tagline</p>
```

### Adjust Animation Speed

Modify animation durations in the respective CSS files:
- Logo animations: `src/components/InfinitumLogo.css`
- Timer animations: `src/components/CountdownTimer.css`
- Gallery animations: `src/components/PhotoGallery.css`

### Add More Sections

You can add more sections (like sponsors, schedule, registration) by:
1. Creating new components in `src/components/`
2. Importing and adding them to `App.jsx`

## 🌐 Deployment

Deploy to popular platforms:

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Fonts

The website uses Google Fonts:
- **Montserrat** - Logo and headings
- **Poppins** - Body text and UI elements

These are automatically loaded via the `index.css` file.

## 🔧 Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **SVG** - Custom logo graphics

## 📄 License

This project is created for the Infinitum event. Feel free to customize it for your needs!

---

**Need help?** Check the inline comments in the code files for detailed guidance.

🎉 **Happy Counting Down to Infinitum!**
