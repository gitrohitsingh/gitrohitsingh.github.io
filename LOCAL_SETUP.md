# Local Development Setup Guide

## Prerequisites

Before starting, ensure you have the following installed on your machine:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for version control)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

## Step-by-Step Setup

### 1. Create Project Directory
```bash
mkdir laravel-portfolio-website
cd laravel-portfolio-website
```

### 2. Initialize Package.json
```bash
npm init -y
```

### 3. Install Dependencies

#### Core Dependencies
```bash
npm install react react-dom wouter @tanstack/react-query express tsx typescript vite @vitejs/plugin-react
```

#### UI Component Library (shadcn/ui)
```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

#### Styling & Icons
```bash
npm install tailwindcss postcss autoprefixer @tailwindcss/typography class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react react-icons
```

#### Form Handling
```bash
npm install react-hook-form @hookform/resolvers zod zod-validation-error
```

#### Database & ORM (Optional - for contact form)
```bash
npm install drizzle-orm drizzle-kit @neondatabase/serverless drizzle-zod
```

#### Development Dependencies
```bash
npm install -D @types/react @types/react-dom @types/node @types/express esbuild
```

### 4. Setup Configuration Files

#### package.json Scripts
Update your `package.json` scripts section:
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --bundle --platform=node --target=node18 --outfile=dist/index.js --external:fsevents",
    "start": "node dist/index.js",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push"
  }
}
```

#### Vite Configuration (vite.config.ts)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: 'dist/public',
  },
})
```

#### TypeScript Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"]
    }
  },
  "include": ["client/src", "server", "shared"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### TailwindCSS Configuration (tailwind.config.ts)
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./client/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./client/index.html",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

#### PostCSS Configuration (postcss.config.js)
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. Create Project Structure
```bash
mkdir -p client/src/{components,pages,hooks,lib}
mkdir -p server
mkdir -p shared
```

### 6. Setup shadcn/ui Components Configuration

Create `components.json`:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "client/src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### 7. Install shadcn/ui Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge input textarea select form sheet separator
```

### 8. Copy Source Files

You'll need to copy the following files from this project:

#### Frontend Files:
- `client/index.html` - Main HTML file
- `client/src/index.css` - Global styles with CSS variables
- `client/src/main.tsx` - React app entry point
- `client/src/App.tsx` - Main app component with routing
- `client/src/pages/home.tsx` - Home page component
- `client/src/components/` - All component files (navigation, hero, skills, etc.)
- `client/src/lib/` - Utility files (utils.ts, queryClient.ts)
- `client/src/hooks/` - Custom hooks (use-toast.ts, use-mobile.tsx)

#### Backend Files:
- `server/index.ts` - Express server setup
- `server/routes.ts` - API routes
- `server/storage.ts` - Storage interface
- `server/vite.ts` - Vite middleware integration

#### Shared Files:
- `shared/schema.ts` - Shared types and schemas

### 9. Environment Variables (Optional)

If using database features, create `.env`:
```
DATABASE_URL=your_database_connection_string
NODE_ENV=development
```

### 10. Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Building for Production

### 1. Build the application:
```bash
npm run build
```

### 2. Start production server:
```bash
npm start
```

## Key Features Included

- ✅ Modern React with TypeScript
- ✅ Responsive design with TailwindCSS
- ✅ Professional UI components from shadcn/ui
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ Portfolio showcase
- ✅ Skills and services sections
- ✅ Client testimonials
- ✅ Professional hero section
- ✅ SEO optimized

## Customization

To customize the website for your needs:

1. **Personal Information**: Update content in component files
2. **Colors**: Modify CSS variables in `client/src/index.css`
3. **Images**: Replace Unsplash URLs with your own images
4. **Skills**: Update the skills arrays in `components/skills.tsx`
5. **Projects**: Modify the projects array in `components/portfolio.tsx`
6. **Services**: Update pricing and services in `components/services.tsx`

## Troubleshooting

- **Port conflicts**: Change port in `server/index.ts`
- **Build errors**: Ensure all dependencies are installed
- **Module resolution**: Check TypeScript path aliases
- **Styling issues**: Verify TailwindCSS is properly configured

This setup gives you a complete, professional Laravel developer portfolio website that's ready to deploy and customize for your needs.