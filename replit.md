# Overview

This is a business landing page clone inspired by doola.com - a "business-in-a-box" platform that offers LLC formation, bookkeeping, business taxes, and e-commerce analytics services. The application features a modern, responsive design with multiple service sections, testimonials, FAQ, and lead capture functionality.

The project implements a full-stack architecture with a React frontend and Express.js backend, designed to showcase business services and capture user interest through newsletter signups and contact forms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Component Structure**: Modular component architecture with separate components for each landing page section (Hero, ProductSuite, Testimonials, FAQ, etc.)

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints for newsletter subscription and contact form submission
- **Validation**: Zod schemas for request validation
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **In-Memory Storage**: Temporary MemStorage implementation for user data (development/testing)

## Component Design Patterns
- **Design System**: Consistent theming with CSS custom properties for colors and spacing
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Code Organization**: Clear separation between UI components, business logic, and data fetching

## Build and Development
- **Module System**: ESM modules throughout the application
- **Development Tools**: TSX for running TypeScript in development
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Strict TypeScript configuration with path mapping for clean imports

# External Dependencies

## UI and Design
- **Radix UI**: Comprehensive set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe utility for component variant management

## Development and Build Tools
- **Vite**: Fast build tool with HMR and optimized production builds
- **Replit Plugins**: Development environment integration (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer)
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Backend Infrastructure
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **HTTP Framework**: Express.js with standard middleware

## Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Data Validation**: Zod for runtime type checking and validation
- **State Management**: TanStack React Query for server state and caching
- **Carousel**: Embla Carousel for interactive content sliders