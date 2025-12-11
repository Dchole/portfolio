# Derek Oware - Portfolio Website

A modern, minimalist portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4. Showcasing 5 years of experience as a Senior Full-Stack Developer specializing in complex problem-solving and elegant solutions.

## 🚀 Features

- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Minimalist UI with dark mode support
- ⚡ Optimized performance
- 🔍 SEO-friendly
- 📧 Contact form with Resend email integration
- 🎯 Section-based smooth scroll navigation
- 🖼️ Optimized image loading with blur placeholders

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

### 1. Personal Information

All content is managed in `/data/portfolio.ts`:

- **personalInfo:** Derek Oware's details
- **skills:** Tech stack (Frontend, Backend, Tools)
- **projects:** 3 featured projects (Adcraft, Brilla, Handymen)
- **experience:** Welite, Dishplug, Freelance work
- **socialLinks:** Social media profiles

### 2. Images

Images are located in `/public`:

- `/public/avatar.webp` - Profile photo with blur placeholder
- `/public/projects/` - Project screenshots (Adcraft, Brilla, Handymen)

### 3. Update Metadata

Edit `/app/layout.tsx` to update SEO information.

### 4. Contact Form

The contact form uses Next.js Server Actions with Resend for email delivery. Already configured and working!

### 5. Navigation

Update navigation items in `/components/Navigation.tsx` if you add/remove sections.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── actions/
│   │   └── contact.ts        # Server action for contact form
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

## 📝 Deployment Status

✅ **Production Ready** - Deployed to Vercel

- ✅ Personal information updated
- ✅ Profile photo added (`avatar.webp`)
- ✅ Project screenshots added
- ✅ Social media links configured
- ✅ Resend email integration active
- ✅ SEO metadata configured

## 🎨 Design Philosophy

Minimalist design approach:

- Clean, uncluttered layouts
- Ample white space
- Typography-focused
- Subtle animations
- Professional black/white color scheme

## 🔧 Environment Variables

Create `.env.local` with:

```
API_RESEND_KEY=your_resend_api_key
```

---

Built by Derek Oware with Next.js, TypeScript, and Tailwind CSS
