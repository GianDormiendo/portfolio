# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcase your projects, skills, and contact information with a sleek design.

## Features

✨ **Modern Design** - Beautiful, responsive layout that works on all devices
🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
⚡ **Next.js** - React framework for production with server-side rendering
📱 **Fully Responsive** - Mobile-first design approach
🔗 **Smooth Scrolling** - Seamless navigation between sections
📧 **Contact Form** - Ready-to-use contact form with validation
🎯 **SEO Optimized** - Built-in metadata and optimization
🌐 **Social Links** - Easy integration of social media profiles

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Projects.jsx       # Projects showcase
│   ├── Skills.jsx         # Skills section
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer
├── package.json           # Project dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Your Information

1. **Hero Section** - Edit [components/Hero.jsx](components/Hero.jsx)
   - Change your name and title
   - Update the CTA button text

2. **About Section** - Edit [components/About.jsx](components/About.jsx)
   - Add your bio and background
   - Replace placeholder image

3. **Projects** - Edit [components/Projects.jsx](components/Projects.jsx)
   - Add your project details
   - Update project links
   - Add project images

4. **Skills** - Edit [components/Skills.jsx](components/Skills.jsx)
   - Customize skill categories
   - Update your technologies

5. **Contact** - Edit [components/Contact.jsx](components/Contact.jsx)
   - Connect the form to your backend service
   - Update social media links in Footer

6. **Footer** - Edit [components/Footer.jsx](components/Footer.jsx)
   - Update copyright information

## Styling

This project uses Tailwind CSS for styling. To customize colors, fonts, or spacing:

1. Edit [tailwind.config.js](tailwind.config.js)
2. Modify the `theme` section for global changes
3. Use Tailwind classes in components for quick adjustments

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Click "Deploy"

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean
- AWS

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS 3** - CSS framework
- **TypeScript** - Type safety
- **PostCSS** - CSS processing

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to reach out through the contact form on the website.

---

Happy building! 🚀
