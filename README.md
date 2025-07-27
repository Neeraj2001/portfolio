# 🚀 Modern Portfolio Website

A professional, elegant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed to impress recruiters and showcase your skills effectively.

![Portfolio Preview](https://via.placeholder.com/1200x600/6366f1/ffffff?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Fully Responsive**: Looks great on all devices and screen sizes
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **SEO Ready**: Comprehensive meta tags and structured data
- **Type Safe**: Full TypeScript implementation
- **Easy to Customize**: Single JSON file for all content
- **Contact Form**: Functional contact form with validation
- **Project Filtering**: Interactive project categorization
- **Resume Download**: PDF resume download functionality
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── SEO.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── portfolio.json     # All content data
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   └── resume.pdf         # Your resume PDF
├── types/
│   └── index.ts           # TypeScript definitions
└── ...config files
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   # If cloning from a repository
   git clone [repository-url]
   cd portfolio
   
   # Or if you received the files directly, navigate to the folder
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### 1. Update Your Information

Edit `data/portfolio.json` to replace the sample data with your information:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    // ... other fields
  },
  // ... other sections
}
```

### 2. Add Your Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### 3. Update Images

Replace placeholder images in the `public/images/` directory:
- Profile image
- Project screenshots
- Any other assets

### 4. Customize Styling

The design uses a custom color palette defined in `tailwind.config.js`. You can modify:

- **Colors**: Update the `primary` and `accent` color palettes
- **Fonts**: Change font families in the config
- **Animations**: Modify or add new animations

### 5. Add Your Projects

Update the `projects` array in `portfolio.json`:

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Brief description",
  "longDescription": "Detailed description",
  "technologies": ["Tech1", "Tech2"],
  "category": "Full-Stack",
  "github": "https://github.com/username/repo",
  "demo": "https://your-demo.com",
  "featured": true,
  "status": "Completed"
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag the `out` folder to Netlify
   - Or connect your GitHub repository

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- Railway
- Render
- Heroku
- AWS
- DigitalOcean

## 📧 Contact Form Setup

The contact form is ready to use but requires backend integration. Options include:

### Option 1: FormSpree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your endpoint URL
3. Update the form action in `app/contact/page.tsx`

### Option 2: EmailJS
1. Set up EmailJS account
2. Configure environment variables
3. Update the contact form logic

### Option 3: Custom Backend
Implement your own API route in `app/api/contact/route.ts`

## 🔧 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Tips for Success

1. **Keep Content Updated**: Regularly update your projects and experience
2. **Optimize Images**: Use WebP format for better performance
3. **Test Responsiveness**: Check on various devices and screen sizes
4. **Monitor Performance**: Use Lighthouse to maintain high scores
5. **SEO Optimization**: Update meta tags for better search visibility

## 🆘 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed
- Check TypeScript errors with `npm run type-check`

**Styling Issues**
- Clear browser cache
- Check Tailwind CSS purge settings

**Deployment Issues**
- Verify environment variables
- Check build logs for errors

### Getting Help

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Search existing issues or create a new one

---

Built with ❤️ using Next.js and modern web technologies. Perfect for showcasing your skills to potential employers and clients.