# Portfolio Website

A modern, minimalist portfolio website for a Senior Full-Stack Developer built with Next.js 16, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Minimalist UI with dark mode support
- ⚡ Optimized performance
- 🔍 SEO-friendly
- 📧 Contact form with API route
- 🎯 Section-based navigation

## 📋 Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal background and bio
3. **Skills** - Technology stack organized by category
4. **Projects** - Featured projects with details
5. **Experience** - Professional timeline
6. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 🎯 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## ✏️ Customization Guide

### 1. Update Personal Information

Edit `/data/portfolio.ts` to add your information:

- **personalInfo:** Name, title, bio, email, location
- **skills:** Your tech stack organized by category
- **projects:** Your featured projects (3 recommended)
- **experience:** Work history
- **socialLinks:** GitHub, LinkedIn, Twitter URLs

### 2. Add Images

Place your images in the `/public` folder:

- `/public/avatar.jpg` - Your profile photo
- `/public/projects/[project-name].jpg` - Project screenshots

### 3. Update Metadata

Edit `/app/layout.tsx` to update SEO information.

### 4. Contact Form Integration

The contact form is set up but needs an email service. Options:

**Option A: Resend (Recommended)**

```bash
npm install resend
```

Update `/app/api/contact/route.ts` and add `RESEND_API_KEY` to `.env.local`

### 5. Navigation

Update navigation items in `/components/Navigation.tsx` if you add/remove sections.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/          # Contact form API route
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page
├── components/
│   ├── sections/             # Page sections
│   ├── AnimationWrapper.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Section.tsx
├── data/
│   └── portfolio.ts          # Your content data
├── lib/
│   ├── hooks.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── public/                   # Static assets
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## 📝 Content Checklist

Before going live, update:

- [ ] Personal information in `/data/portfolio.ts`
- [ ] Profile photo at `/public/avatar.jpg`
- [ ] Project screenshots in `/public/projects/`
- [ ] Social media links
- [ ] Email configuration
- [ ] SEO metadata in `/app/layout.tsx`

## 🎨 Design Philosophy

Minimalist design approach:

- Clean, uncluttered layouts
- Ample white space
- Typography-focused
- Subtle animations
- Professional black/white color scheme

---

Built with ❤️ using Next.js and Tailwind CSS
