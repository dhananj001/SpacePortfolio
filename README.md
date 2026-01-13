# NebulaStack - High-Converting Websites

A premium digital consultancy website built with Next.js 14, TypeScript, and Tailwind CSS. Features device-specific mockups, advanced animations, and conversion-optimized design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with device-specific content
- **Performance Optimized**: Sub-400ms load times with advanced caching
- **SEO Optimized**: Enterprise-grade SEO for top search rankings
- **Lead Generation**: Conversion-optimized design and analytics
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Production Ready**: Error boundaries, security headers, and monitoring

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nebulastack.git
cd nebulastack
```

2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔍 SEO & Analytics Setup

### Required Environment Variables

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XXXXXXXXXXXXXXXXXXXXX

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@nebulastack_in
```

### SEO Checklist

- [ ] Set up Google Search Console
- [ ] Configure Google Analytics 4
- [ ] Add verification meta tags
- [ ] Create OG images (1200x630)
- [ ] Submit sitemap to search engines
- [ ] Set up Google My Business

See `SEO_IMPLEMENTATION_GUIDE.md` for detailed instructions.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   └── sitemap.ts        # Dynamic SEO sitemap
├── components/            # React components
│   ├── main/             # Main page sections
│   ├── sub/              # Sub-components
│   ├── seo/              # SEO components
│   └── analytics/        # Analytics tracking
├── public/               # Static assets
├── utils/                # Utility functions
└── types/                # TypeScript types
```

## 🔒 Security

- Security headers configured in `next.config.js`
- Console logs removed in production
- XSS protection enabled
- Content Security Policy ready

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: All green scores
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP/AVIF formats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary to NebulaStack.

## 📞 Support

For support or inquiries, contact us at [your-email@example.com]

---

Built with ❤️ by NebulaStack
