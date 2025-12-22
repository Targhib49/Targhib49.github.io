# AI Engineer Portfolio

A modern, distinctive portfolio website showcasing the journey from research papers to real-world hardware systems. Built with React and Framer Motion.

## 🎯 Design Philosophy

This portfolio tells a specific story:

- **Research → Code → Hardware**: The full AI engineering pipeline
- **Control Systems Foundation**: Applied across multiple domains
- **Production-Ready Systems**: Not just notebooks, but real deployments

### Aesthetic Direction

- **Brutalist-Tech**: Dark theme with grid patterns and gradient orbs
- **Typography**: Outfit (display) + JetBrains Mono (code) for technical credibility
- **Colors**: Neon green (#00ff88) and electric blue (#0088ff) against dark background
- **Motion**: Smooth scroll reveals, floating animations, and micro-interactions

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Extract the files**

   ```bash
   cd portfolio-enhanced
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Customize your content**
   Edit `src/App.js` and update:

   - Project descriptions (lines 15-75)
   - Skills (lines 77-81)
   - Timeline (lines 83-89)
   - Contact links (bottom of file)
   - GitHub username in package.json

4. **Run locally**
   ```bash
   npm start
   ```
   Opens at http://localhost:3000

## 📝 Customization Guide

### 1. Update Project Information

In `src/App.js`, find the `projects` array (around line 15):

```javascript
const projects = [
  {
    title: "Your Project Name",
    category: "Research → Hardware", // or "Production Systems", "AI Systems", etc.
    description: "Your description here",
    tech: ["Python", "React", "etc"],
    highlights: ["Key achievement 1", "Key achievement 2", "Key achievement 3"],
    status: "In Production", // or "Live with Active Users", "Active Development", etc.
    github: "https://github.com/yourusername/repo",
    link: "https://live-demo.com", // optional
    tags: ["RL", "Control Systems", "Hardware"],
  },
  // Add more projects...
];
```

### 2. Update Skills

Find the `skills` object (around line 77):

```javascript
const skills = {
  "AI/ML": ["Your", "ML", "Skills"],
  Engineering: ["Your", "Engineering", "Skills"],
  Domains: ["Your", "Domain", "Expertise"],
};
```

### 3. Update Timeline

Find the `timeline` array (around line 83):

```javascript
const timeline = [
  {
    year: "Foundation", // or actual year like "2020"
    title: "Your Milestone",
    desc: "Description of this phase",
  },
  // Add more phases...
];
```

### 4. Update Contact Links

At the bottom of `src/App.js` in the contact section:

```javascript
<a href="https://github.com/YOUR-USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR-USERNAME">LinkedIn</a>
<a href="mailto:YOUR-EMAIL@example.com">Email</a>
```

### 5. Customize Colors

In `src/index.css`, modify the CSS variables:

```css
:root {
  --accent-primary: #00ff88; /* Neon green */
  --accent-secondary: #0088ff; /* Electric blue */
  /* Change these to your preferred colors */
}
```

## 🌐 Deployment to GitHub Pages

### Method 1: Automatic Deployment

1. **Update package.json**

   ```json
   "homepage": "https://YOUR-USERNAME.github.io"
   ```

2. **Create repository**

   - Name: `YOUR-USERNAME.github.io`
   - Initialize empty (no README)

3. **Deploy**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Wait 2-5 minutes
   - Visit: `https://YOUR-USERNAME.github.io`

### Method 2: Manual Build

```bash
npm run build
# Then upload the 'build' folder contents to your hosting
```

## 🎨 Design Customization

### Change Theme to Light Mode

In `src/index.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-card: #ffffff;
  --text-primary: #0a0a0a;
  --text-secondary: #606060;
  --border: #e0e0e0;
}
```

### Change Fonts

In `public/index.html`, replace the Google Fonts link:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap"
  rel="stylesheet"
/>
```

Then update in `src/index.css`:

```css
body {
  font-family: "YOUR-FONT", sans-serif;
}
```

### Modify Animations

All animations use Framer Motion. Adjust in `src/App.js`:

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} // Change duration here
>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
- Small Mobile: < 480px

## 🛠️ Tech Stack

- **React 18**: UI framework
- **Framer Motion**: Animations
- **CSS Custom Properties**: Theming
- **CSS Grid & Flexbox**: Layout
- **GitHub Pages**: Hosting

## 🔧 Troubleshooting

### "User not found" after deployment

- Check that repository name is exactly `YOUR-USERNAME.github.io`
- Verify GitHub Pages is set to `gh-pages` branch
- Wait 5-10 minutes for deployment

### Styles not loading

- Clear browser cache
- Check console for errors
- Verify all CSS files are imported correctly

### Animations not smooth

- Ensure hardware acceleration is enabled in browser
- Check if `prefers-reduced-motion` is set in OS settings

## 📄 License

Free to use and modify for your personal portfolio.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📮 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all customization steps were followed
3. Check browser console for errors

---

**Built with React, Framer Motion, and a lot of attention to detail.**

_"From papers to production, simulation to silicon"_
