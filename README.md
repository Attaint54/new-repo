# Atta-ul-Bari | Portfolio

A modern, dark-themed portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Sticky navigation with smooth scrolling and mobile hamburger menu
- Hero section with profile photo, greeting, and social links
- About section with professional highlights
- Skills section with categorized technology badges
- Projects section auto-populated from GitHub API
- Contact form with EmailJS integration
- Social links (GitHub, LinkedIn, Fiverr, Upwork)
- Custom cursor torch effect
- Back to top button
- Fully responsive and mobile-first
- SEO optimized
- Smooth Framer Motion animations

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Email:** EmailJS

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Attaint54/new-repo.git
   cd new-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your assets:
   - `/public/profile.jpg` - Your profile photo
   - `/public/resume.pdf` - Your resume
   - `/public/projects/` - Project images (optional)

4. Configure EmailJS in `src/components/Contact.tsx`:
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your EmailJS credentials.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Customization

- Update social links in `src/components/Hero.tsx`, `src/components/Contact.tsx`, and `src/components/Footer.tsx`
- Modify skills in `src/components/Skills.tsx`
- Projects are fetched from GitHub API; update the username or add fallback projects in `src/components/Projects.tsx`
- Profile photo and resume go in `/public/`

## Deployment

Deploy to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
npm run start
```
