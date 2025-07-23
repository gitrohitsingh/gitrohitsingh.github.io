# Replit Project Documentation

## Overview

This is a full-stack portfolio website application built with React + TypeScript frontend and Express.js backend. The application showcases a Laravel developer's portfolio with sections for skills, services, portfolio projects, about information, testimonials, and a contact form. It uses a modern tech stack with shadcn/ui components, TailwindCSS for styling, and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in strict mode
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: TailwindCSS with CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with TypeScript support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **API Pattern**: RESTful API endpoints
- **Development**: Hot reload with Vite middleware integration

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **Skills**: Technology showcase with categorized skill sets
- **Services**: Service offerings with pricing information
- **Portfolio**: Project showcase with detailed descriptions
- **About**: Personal information and background
- **Testimonials**: Client feedback and ratings
- **Contact Form**: Form submission with validation
- **Footer**: Links and social media integration

### Backend Components
- **Routes**: API endpoints for contact form submission and data retrieval
- **Storage**: In-memory storage implementation (MemStorage class)
- **Middleware**: Request logging and error handling
- **Vite Integration**: Development server with HMR support

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields:
  - id (serial primary key)
  - firstName, lastName (text)
  - email (text)
  - budget (text)
  - projectDetails (text)
  - createdAt (timestamp)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in frontend
   - Form validation using Zod schema
   - POST request to `/api/contact` endpoint
   - Server validates and stores data
   - Success/error response returned
   - UI feedback via toast notifications

2. **Data Retrieval**:
   - GET request to `/api/contacts` for admin access
   - Server returns all contacts sorted by creation date
   - Data consumed via React Query for caching

3. **Static Content**:
   - Portfolio, skills, and service data hardcoded in components
   - Testimonials and other content statically defined
   - Images served from external CDN (Unsplash)

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: TailwindCSS with PostCSS processing
- **Icons**: Lucide React icons and React Icons
- **Forms**: React Hook Form with Hookform resolvers
- **HTTP Client**: Native fetch API with React Query
- **Date Handling**: date-fns library
- **Fonts**: Google Fonts (Inter family)

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking
- **Build**: ESBuild for production bundling

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript compiler
- **Database Migrations**: Drizzle Kit
- **Development**: tsx for TypeScript execution
- **Replit Integration**: Cartographer and runtime error modal plugins

## Deployment Strategy

### Development Mode
- Vite dev server with HMR for frontend
- tsx execution for backend with file watching
- Middleware integration for seamless development
- Environment variable configuration for database

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Static Serving**: Express serves built frontend assets
5. **Process**: Single Node.js process serving both API and static files

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- Path aliases configured for clean imports (@, @shared, @assets)

### Key Architecture Decisions

1. **Monorepo Structure**: Chose to keep frontend, backend, and shared code in single repository for easier development and deployment on Replit platform.

2. **In-Memory Storage**: Currently using MemStorage class instead of database persistence, making it easy to switch to Drizzle ORM later when database is needed.

3. **shadcn/ui Components**: Selected for consistent design system with accessibility built-in and easy customization via TailwindCSS.

4. **Vite + Express Integration**: Vite middleware integration allows seamless development experience with HMR while serving API endpoints.

5. **TypeScript Throughout**: Full TypeScript implementation for type safety across frontend, backend, and shared schemas.

6. **Form Validation**: Zod schemas shared between frontend and backend ensure consistent validation rules.

## Recent Changes: Latest modifications with dates

### January 23, 2025
- Created complete Laravel developer portfolio website based on user's Upwork profile
- Updated hero section to emphasize "Fast, Secure & Scalable" web applications
- Enhanced skills section with comprehensive technology stack including Laravel, Vue.js, React, Angular
- Updated services pricing to reflect professional rates ($75/hour for development, $125/hour for consulting)
- Customized about section to highlight rapid development and long-term support capabilities
- Added timezone flexibility and global remote work availability
- Created detailed local development setup guide (LOCAL_SETUP.md) for replication