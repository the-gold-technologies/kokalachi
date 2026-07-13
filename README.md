# 🌍 Kokalachi - Journeys Become Friendships

Kokalachi is a premium, high-fidelity travel and tourism landing page built using modern web development standards. Designed with a vibrant, clean, and balanced brand identity, it offers a seamless and interactive user experience.

---

## 🎨 Design System & Visual DNA

The website uses a curated color palette and layout structures aligned with Kokalachi's visual guidelines:

- **Dominant Primary (Teal):** `#3E7C7A` — used for navigation links, hover states, primary CTAs, and active indicators.
- **Brand Accent (Terra Cotta / Orange):** `#D97745` — used for key highlight details, stars, quotes, badges, and CTA highlights.
- **Dark Neutral (Dark Blue):** `#1F355E` — used for heavy section contrast backdrops, cards, and title typography.
- **Light Backdrop (Off-White):** `#F9F9FB` — standardized across section backdrops for clean contrast.
- **Text Color (Charcoal / Slate):** `#1C2B38` — used for secondary typography and dark text settings.
- **Pure White Backgrounds:** `#ffffff` — used in testimonials and other specific sections.

---

## ✨ Features Built

### 1. 🛥️ Floating Capsule Navbar
- Smoothly morphs from a full-width transparent header into a beautiful centered, floating white pill/capsule shape upon scrolling (`bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100/80 w-[95%] max-w-[1220px]`).
- Includes smooth hover-triggered 2-column mega dropdowns (with icons and descriptive headers).
- Fully responsive logo element which hides the tagline on smaller screens and keeps only the circular badge icon visible on mobile.
- Features accordion-style mobile sub-menu dropdowns inside the navigation drawer.

### 2. 🎡 Responsive Landmarked Testimonials
- Fully automated testimonial slider showing beautiful words from customers.
- Employs custom generated, text-free watermark landmark outlines in the background: **Taj Mahal** sketch in the bottom-left and **Burj Khalifa** sketch in the bottom-right.
- Watermarks scale down dynamically on tablet and mobile viewports, keeping the section completely clutter-free.

### 3. 🏖️ Featured Destinations & Packages
- Clean interactive sliders showing trending worldwide travel spots.
- Integrated ratings, custom price flags, and booking buttons.

### 4. 🏕️ Promo & Discover Banners
- Embedded video preview links and outline sketches in the backgrounds.
- Polished CTA buttons mapped to the brand color scheme.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router with Turbopack support)
- **Library:** React
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Hosting / Tooling:** TypeScript, Node.js

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the live page.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript validations and compiles the static site pages under the `.next` directory.

### 4. Start Production Server
```bash
npm run start
```
