# Rifat Ara Tasnim - Portfolio Website

## Project Overview

A portfolio website for **Rifat Ara Tasnim**, who holds a PhD in Computer Science from Idaho State University (graduated December 2025), specializing in Human-Computer Interaction (HCI), Virtual Reality (VR), Augmented Reality (AR), and Serious Games for mental health applications.

---

## Source Materials

### Resume/CV
- **Location:** `/Users/askme/Downloads/RifatAraTasnim_CV (3).pdf`
- **Key Information Extracted:**
  - PhD in Computer Science (Idaho State University, graduated Dec 2025)
  - BSc from Khulna University of Engineering & Technology, Bangladesh (2017)
  - Research focus: HCI, Serious Games, VR/AR/MR, VR Simulation
  - Current: Adjunct Faculty teaching Game Development
  - Former: Research Intern at Idaho National Laboratory
  - 15+ publications, 3 Best Paper Awards
  - Technical skills: C, C++, Unity, Python, Java, Blender, Meta Quest, HTC Vive, Apple Vision Pro, SenseGlove Nova

### Design Inspiration
- **Source:** https://dribbble.com/shots/25648349-American-Pecans-Homepage-Concept
- **Key Design Elements:**
  - Warm, earthy color palette (greens, browns, cream)
  - Large hero section with rounded containers
  - Card-based layouts with subtle shadows
  - Bold typography with clear hierarchy
  - Nature-inspired aesthetic with clean modern layout
  - Full-bleed images mixed with contained content

---

## Design Specifications

### Color Palette

```css
/* Primary Colors - Forest Green */
--color-primary: #2D5A3D
--color-primary-light: #4A8C5E
--color-primary-dark: #1E3D29

/* Accent Colors - Coral */
--color-accent: #E85D4C
--color-accent-light: #FF7B6B
--color-accent-dark: #C94535

/* Gold Highlights */
--color-gold: #D4A853
--color-gold-light: #E8C77B

/* Neutral Palette */
--color-cream: #FAF6F0
--color-cream-dark: #F0E8DA
--color-brown: #8B6E4E
--color-charcoal: #2C2C2C
```

### Typography

- **Display Font:** DM Serif Display (Google Fonts)
- **Body Font:** DM Sans (Google Fonts)
- **Hero Title:** clamp(3rem, 6vw, 5rem)
- **Section Titles:** clamp(2.2rem, 4vw, 3.2rem)

### Animation Philosophy

- Scroll-triggered animations using Intersection Observer
- Smooth cubic-bezier transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Bounce effect for interactive elements: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Staggered delays for grid items
- Subtle parallax on hero background

---

## File Structure

```
/Volumes/Storage/Source Code/Prome Portfolio Website/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript interactivity
└── PROJECT.md      # This documentation file
```

---

## Sections Implemented

### 1. Navigation
- Fixed navbar with scroll effect (background appears on scroll)
- Logo: "Rifat Ara Tasnim" (full name)
- Links: About, Research, Projects, Publications, Teaching, Awards
- CTA button: "Get in Touch"
- Mobile hamburger menu

### 2. Hero Section
- Subtitle introducing Rifat
- Stats: 15+ Publications, 3 Best Paper Awards, 6+ Years Research
- Three feature cards: Virtual Reality, Serious Games, AR Applications
- Animated floating gradient background

### 3. About Section
- Bio text highlighting research focus and experience
- Location: Pocatello, Idaho, USA
- Skills grid organized by:
  - Languages: C, C++, Python, Java, C#
  - Platforms & Tools: Unity, Blender, Firebase, Android
  - XR Hardware: Meta Quest, HTC Vive, Apple Vision Pro, SenseGlove Nova

### 4. Research Section
- Featured card: Serious Games for Mental Health
- Regular cards: Virtual Reality, Augmented Reality, Human-Computer Interaction

### 5. Projects Section (Dark theme)
- **Militant of the Maze (MoM):** OCD treatment game, 150+ participants
- **MoMVR:** VR adaptation for Meta Quest, 60+ participants
- **ARCoD:** AR cognitive distortion assessment, 100+ participants
- **INL VR Research:** Haptic feedback for blind users, patent pending

### 6. Publications Section
- Timeline format with year badges
- Best Paper Award badges highlighted in gold
- 6 selected publications shown
- Link to Google Scholar for full list

### 7. Teaching Section
- Current: Adjunct Faculty (Game Development course)
- Guest Lecturer (HCI, GUI Development)
- Graduate TA history (8 courses)

### 8. Awards Section
- Outstanding Student Achievement Award (2026)
- 3 Best Paper Awards (2021, 2024, 2025)
- Top Poster Presentations
- Merit-Based Scholarship

### 9. Experience Timeline
- Research Intern at Idaho National Laboratory (2025)
- VR Developer Intern at INL (2024)
- Graduate Research Assistant at ISU (2021-2022)
- Graduate Research Assistant at UNO (2019-2021)

### 10. Contact Section
- Green gradient background
- Email: rifataratasnim@isu.edu
- LinkedIn profile link
- Google Scholar profile link

### 11. Footer
- Copyright notice
- Location

---

## Interactive Features

### Implemented
- [x] Navbar scroll effect (adds background)
- [x] Scroll-triggered fade-in animations
- [x] Smooth scroll for anchor links
- [x] Mobile responsive menu
- [x] Parallax hero background
- [x] Animated stat counters
- [x] Scroll progress indicator (top bar)
- [x] Active section highlighting in nav
- [x] Hover effects on all cards

### Optional (code ready, commented out)
- [ ] Page loader animation
- [ ] Custom cursor follower
- [ ] Card tilt effect on mousemove
- [ ] Magnetic button effect
- [ ] Typing effect for hero title

---

## Responsive Breakpoints

- **1024px:** Hero becomes single column, teaching grid collapses
- **768px:** Mobile menu activates, grids become single column
- **480px:** Reduced font sizes, full-width buttons

---

## Future Enhancements (Ideas)

1. **Add actual images:**
   - Profile photo
   - Project screenshots/demos
   - Research visualizations

2. **Add more interactivity:**
   - Project detail modals/pages
   - Publication filters (by year, type)
   - Dark mode toggle

3. **Add content:**
   - Blog/News section
   - Downloadable CV button
   - Video demos of VR projects

4. **Performance:**
   - Image optimization
   - Lazy loading
   - Minify CSS/JS for production

5. **SEO:**
   - Meta tags
   - Open Graph tags for social sharing
   - Structured data for Google

---

## Contact Information (From Resume)

- **Phone:** 504-274-8140
- **Email:** rifataratasnim@isu.edu
- **LinkedIn:** linkedin.com/RifatAraTasnim
- **Google Scholar:** scholar.google.com/RifatAraTasnim
- **Location:** Pocatello, Idaho, USA

---

## Notes for Future Development

- The website uses vanilla HTML/CSS/JS - can be migrated to React/Next.js if needed
- All animations respect `prefers-reduced-motion` for accessibility
- Colors and spacing use CSS custom properties for easy theming
- The design emphasizes the academic/research nature while remaining modern and engaging
