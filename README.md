# ☕ ComponentsCafe

<div align="center">

![ComponentsCafe Banner](https://img.shields.io/badge/Components-Cafe-FF6B6B?style=for-the-badge&logo=react&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://component-cafe.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**A curated collection of 100+ premium UI components crafted with Tailwind CSS and shadcn/ui for modern React applications.**

[🚀 Get Started](#-quick-start) • [📚 Documentation](https://component-cafe.vercel.app/docs) • [🎨 Components](https://component-cafe.vercel.app/docs/components) • [🧱 Blocks](https://component-cafe.vercel.app/docs/blocks)

</div>

---

## ✨ Features

ComponentsCafe brings enterprise-grade UI components to your fingertips, designed for developers who value both aesthetics and functionality.

### 🎯 What Sets Us Apart

- **🎨 Premium Design System** - Meticulously crafted components following modern design principles
- **⚡ Lightning Fast** - Optimized for performance with minimal bundle size
- **📱 Fully Responsive** - Beautiful on every device, from mobile to desktop
- **🎭 Highly Customizable** - Adapt colors, sizes, and styles to match your brand
- **♿ Accessible by Default** - Built with ARIA standards and keyboard navigation
- **🌙 Dark Mode Ready** - Seamless theme switching out of the box
- **📦 Zero Config** - Copy, paste, and start building immediately
- **🔧 TypeScript Native** - Full type safety and IntelliSense support
- **🤖 AI-Powered** - New AI-enhanced components for intelligent UIs
- **📖 Comprehensive Docs** - Detailed guides and examples for every component

---

## 🛠️ Built With Modern Stack

ComponentsCafe leverages the best tools in the ecosystem to deliver exceptional developer experience:

| Technology | Purpose | Why We Use It |
|------------|---------|---------------|
| **Next.js 15** | Framework | Server-side rendering, routing, and optimal performance |
| **React 19** | UI Library | Component-based architecture with latest features |
| **TypeScript** | Language | Type safety and enhanced developer experience |
| **Tailwind CSS** | Styling | Utility-first approach for rapid UI development |
| **shadcn/ui** | Component Base | Accessible, customizable component primitives |
| **Framer Motion** | Animations | Smooth, performant animations and transitions |
| **MDX** | Documentation | Interactive documentation with live examples |

---

## 🚀 Quick Start

Get up and running with ComponentsCafe in less than 5 minutes.

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/dndmein-rgb/ComponentsCafe.git

# Navigate to project directory
cd ComponentsCafe

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic happen! 🎉

The app will hot-reload as you edit files. Start by modifying `app/page.tsx` to see changes in real-time.

---

## 📦 Component Categories

Explore our extensive collection of components organized by use case:

### 🧩 Core Components
- **Buttons** - Various styles from minimal to gradient
- **Cards** - Profile, pricing, content, and more
- **Forms** - Input fields, selects, checkboxes, radio buttons
- **Navigation** - Navbars, sidebars, breadcrumbs, pagination
- **Modals & Dialogs** - Alerts, confirmations, drawers
- **Data Display** - Tables, lists, badges, avatars

### 🎨 Advanced UI
- **Progress Indicators** - Bars, circles, steppers
- **Tooltips & Popovers** - Contextual information displays
- **Tabs & Accordions** - Content organization components
- **Sliders & Carousels** - Image and content showcases
- **Charts & Graphs** - Data visualization components
- **AI Components** - Intelligent, context-aware UI elements

### 🧱 Layout Blocks
- **Hero Sections** - Eye-catching landing page headers
- **Feature Sections** - Showcase your product capabilities
- **Testimonials** - Social proof and customer reviews
- **Pricing Tables** - Clear pricing presentation
- **Footers** - Complete page footer designs
- **Call-to-Action** - Conversion-optimized sections

---

## 💡 Usage Examples

### Copy-Paste Simplicity

```tsx
// 1. Browse components at component-cafe.vercel.app
// 2. Click "Copy Code" on any component
// 3. Paste into your project

import { Button } from '@/components/ui/button'

export default function MyApp() {
  return (
    <Button variant="gradient" size="lg">
      Get Started
    </Button>
  )
}
```

### Customize Everything

```tsx
// Tailwind classes make customization effortless
<Button 
  className="bg-purple-600 hover:bg-purple-700 text-white"
  size="lg"
>
  Custom Styled Button
</Button>
```

### TypeScript Support

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import type { CardProps } from '@/components/ui/card'

interface CustomCardProps extends CardProps {
  author: string
  publishDate: Date
}

export function BlogCard({ author, publishDate, ...props }: CustomCardProps) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Latest Post</CardTitle>
      </CardHeader>
      <CardContent>
        <p>By {author} on {publishDate.toLocaleDateString()}</p>
      </CardContent>
    </Card>
  )
}
```

---

## 📚 Project Structure

```
ComponentsCafe/
├── app/                    # Next.js app directory
│   ├── (routes)/          # Route groups and pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── blocks/           # Pre-built block components
│   └── examples/         # Usage examples
├── content/              # MDX documentation
│   └── docs/            # Component documentation
├── registry/            # Component registry for CLI
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── config/              # Configuration files
├── public/              # Static assets
└── styles/              # Global styles

```

---

## 🎨 Customization

### Theme Configuration

ComponentsCafe uses CSS variables for theming, making it easy to customize:

```css
/* Update colors in your globals.css */
:root {
  --primary: 220 90% 56%;
  --secondary: 280 80% 60%;
  --accent: 340 82% 62%;
  /* ... more variables */
}

.dark {
  --primary: 220 90% 66%;
  /* ... dark mode overrides */
}
```

### Component Variants

Easily extend component variants using `class-variance-authority`:

```tsx
import { cva } from "class-variance-authority"

const buttonVariants = cva("base-button-classes", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      custom: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  }
})
```

---

## 🚢 Deployment

Deploy your ComponentsCafe-powered application effortlessly:

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dndmein-rgb/ComponentsCafe)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Other Platforms

ComponentsCafe works on any platform supporting Next.js:

- **Netlify** - `npm run build && npm run export`
- **AWS Amplify** - Connect your repo and deploy
- **Docker** - Use the included Dockerfile
- **Self-hosted** - `npm run build && npm start`

---

## 🤝 Contributing

We love contributions! Here's how you can help make ComponentsCafe even better:

### Ways to Contribute

- 🐛 **Report Bugs** - Found an issue? Let us know!
- 💡 **Suggest Features** - Have ideas? We want to hear them!
- 📝 **Improve Docs** - Help us make documentation clearer
- 🎨 **Add Components** - Create new components to share
- 🔧 **Fix Issues** - Submit pull requests for existing issues

### Development Workflow

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-component

# 3. Make your changes
# 4. Commit with descriptive messages
git commit -m "Add: Amazing new component with animation"

# 5. Push to your fork
git push origin feature/amazing-component

# 6. Open a Pull Request
```

Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

---

## 📄 License

ComponentsCafe is open source software licensed under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2026 ComponentsCafe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

---

## 🙏 Acknowledgments

ComponentsCafe stands on the shoulders of giants:

- **[shadcn/ui](https://ui.shadcn.com/)** - For the excellent component architecture
- **[Vercel](https://vercel.com)** - For hosting and Next.js framework
- **[Tailwind Labs](https://tailwindcss.com)** - For the amazing CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - For accessible component primitives
- **Our Contributors** - For making ComponentsCafe better every day

---




<div align="center">

**Built with ❤️ by developers, for developers**

[⬆ Back to Top](#-componentscafe)

</div>
