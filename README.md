# Cashify Clone - Phone Reselling Platform

A pixel-perfect, feature-rich Cashify clone built with React and Tailwind CSS.

## 🚀 Features

- **Homepage** — Hero with instant price quote widget, brand grid, featured phones, how it works, testimonials, why us section
- **Sell Phone Page** — Multi-step price estimator with brand/model/condition/accessories selection
- **Buy Phone Page** — Filterable product listing with search, brand, condition, storage & price filters
- **Phone Detail Page** — Full product page with image gallery, specs, pricing, and related phones
- **About Page** — Company story, timeline, team, awards
- **Contact Page** — Contact form, FAQs, office hours
- **Login/Signup Page** — Tabbed auth form with OTP flow mockup
- **Responsive** — Mobile-first design, works on all screen sizes

## 🛠️ Tech Stack

- React 18 + React Router v6
- Tailwind CSS
- Lucide React icons
- Custom Google Fonts (Syne + Plus Jakarta Sans)

## 📦 Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx       # Sticky navbar with dropdown, search, mobile menu
│   │   ├── Footer.jsx       # Full footer with newsletter, links, socials
│   │   └── PhoneCard.jsx    # Reusable phone product card
│   └── home/
│       ├── Hero.jsx         # Homepage hero with quick sell widget
│       ├── BrandsSection.jsx
│       ├── FeaturedPhones.jsx
│       ├── HowItWorks.jsx
│       ├── WhyChooseUs.jsx
│       └── Testimonials.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── SellPage.jsx
│   ├── BuyPage.jsx
│   ├── PhoneDetailPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── LoginPage.jsx
│   └── NotFoundPage.jsx
├── data/
│   └── data.js              # All static data (phones, brands, etc.)
├── App.js                   # Router setup
├── index.js                 # Entry point
└── index.css                # Tailwind + global styles
```

## 🎨 Design System

- **Primary**: Orange (#f97316)
- **Font Display**: Syne
- **Font Body**: Plus Jakarta Sans
- **Cards**: Rounded-2xl with hover shadows
- **Animations**: Float, slide-up, fade-in

## 📱 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/sell` | Sell Phone (price estimator) |
| `/buy` | Buy Phone (with filters) |
| `/buy/:id` | Phone Detail |
| `/about` | About Us |
| `/contact` | Contact |
| `/login` | Login / Sign Up |
