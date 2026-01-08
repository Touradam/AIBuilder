# AI Mastery Program Website

A professional, multi-page Next.js website for advertising a 2-weekend AI education program. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This website showcases a comprehensive AI education program designed to teach people how to understand AI, think critically about it, and build real tools that improve their lives without becoming dependent on AI.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Meta tags, Open Graph data, sitemap, and robots.txt
- **Professional UI**: Clean, accessible design with consistent navigation
- **5 Main Pages**:
  - Home: Hero section, program overview, and value proposition
  - About: Philosophy, mission, and target audience
  - Program: Detailed 6-day curriculum with expandable sections
  - Schedule: Timeline, format, and preparation details
  - Contact: Contact information and FAQ

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
/Volumes/Mangue/adama_AI_course/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── layout.tsx         # Root layout with header/footer
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── program/page.tsx   # Program details page
│   │   ├── schedule/page.tsx  # Schedule page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── robots.ts          # Robots.txt configuration
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Page footer
│   │   ├── Hero.tsx           # Hero section component
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── DayCard.tsx        # Expandable day info card
│   │   └── WeekSection.tsx    # Week section display
│   └── lib/
│       └── data.ts            # Program content data
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Customization

### Updating Content

All program content is centralized in `src/lib/data.ts`. Update this file to modify:
- Program curriculum (weeks and days)
- Target audience descriptions
- Core philosophy statements
- Program statistics

### Styling

The site uses Tailwind CSS with a custom color scheme:
- Primary color: Blue (customizable in `tailwind.config.ts`)
- Font: Inter (loaded via Next.js font optimization)

### Contact Information

Update the following placeholders:
- Email addresses in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- Social media links in `src/components/Footer.tsx`
- Location information in `src/app/contact/page.tsx`
- Instructor bio in `src/app/about/page.tsx`

### SEO Configuration

Update the base URL in:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- Open Graph metadata in page files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your site

### Other Platforms

The site can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

Or use the standalone output configured in `next.config.js`:

```bash
npm run build
# Deploy the .next/standalone directory
```

## Performance

This site is optimized for performance:
- Server-side rendering with Next.js
- Automatic code splitting
- Image optimization (when images are added)
- Font optimization with next/font
- Minimal JavaScript bundle size

## Accessibility

The site follows accessibility best practices:
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Proper color contrast ratios
- Responsive text sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or issues, please contact [your email here].

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

