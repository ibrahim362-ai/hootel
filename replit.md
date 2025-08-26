# Hotel ERP System

## Overview

This is a comprehensive Hotel ERP (Enterprise Resource Planning) web application built with React frontend and Express backend. The system provides role-based interfaces for hotel management, including Admin (full access), Employer (staff management), and User (guest) roles. The application manages rooms, restaurant operations, gym facilities, customer relations, property management, staff operations, and reporting.

## User Preferences

Preferred communication style: Simple, everyday language.
Design Preferences: Modern 2025 design with #3a86ff gradient color theme, CSS modules, Framer Motion animations, responsive design for desktop and mobile, glass morphism effects, and smooth transitions.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS Modules for component-specific styles (#3a86ff gradient theme)
- **State Management**: Context API for authentication and role management, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Animation**: Framer Motion for smooth UI transitions with spring physics and staggered animations
- **User Interface**: Complete User (Public/Guest) interface with Navbar, Footer, and UserLayout components
- **Design System**: Modern 2025 design with glass morphism effects, gradient animations, hover effects, and responsive grid systems

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Data Validation**: Zod schemas for type-safe API validation
- **Storage**: In-memory storage abstraction with interface for easy database integration
- **Session Management**: Simple session handling with user data stored in localStorage

### Role-Based Access Control
- **Admin Role**: Full system access including dashboard, rooms, restaurant, gym, CRM, property, staff, reports, and settings
- **Employer Role**: Comprehensive staff interface with three specialized controllers - Rooms (housekeeping/maintenance), Restaurant (orders/inventory), and Gym (classes/training) operations
- **User Role**: Guest interface for bookings, restaurant orders, gym schedules, and profile management

### Data Models
The system uses a comprehensive database schema including:
- **Users**: Authentication and role management
- **Rooms**: Room inventory with types, status, pricing, and amenities
- **Bookings**: Reservation system with guest information and status tracking
- **Staff**: Employee management with department and performance tracking
- **Tasks**: Work assignment system for staff
- **Shifts**: Schedule management for employees

### Component Structure
- **Layout Components**: 
  - Admin/Employer: Responsive sidebar navigation, header with search and user menu
  - User/Guest: Modern Navbar with glassmorphism effects, comprehensive Footer with social links and newsletter signup, UserLayout wrapper
- **UI Components**: Reusable components using Radix UI primitives with modern CSS modules styling
- **Charts**: Custom data visualization components with animation support
- **Tables**: Advanced data tables with sorting, filtering, and export capabilities
- **Forms**: Type-safe form components with validation
- **User Interface Pages**: Home (hero section with animated features), Rooms (booking widget with filters), Restaurant (menu system with cart), Gym (fitness classes and facilities), Profile settings
- **Employer Interface Pages**: 
  - Rooms Controller: Dashboard, Tasks, Shifts (housekeeping and front desk operations)
  - Restaurant Controller: Dashboard, Orders, Inventory (restaurant staff management)
  - Gym Controller: Dashboard, TrainerSchedule, Classes (fitness facility operations)

### Development Features
- **Hot Module Replacement**: Vite development server with fast refresh
- **TypeScript**: Full type safety across frontend and backend
- **Path Aliases**: Clean import paths using @ and @shared prefixes
- **Error Handling**: Runtime error overlay for development
- **Build Optimization**: Production builds with code splitting and asset optimization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database adapter
- **drizzle-orm**: Type-safe ORM for database operations
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI interactions

### Development Tools
- **drizzle-kit**: Database migration and schema management
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework

### UI and Styling
- **class-variance-authority**: Type-safe variant API for components
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **react-icons/fa**: Font Awesome icon library for comprehensive icon coverage
- **react-hook-form**: Form handling with validation
- **zod**: Schema validation library
- **CSS Modules**: Modern component-specific styling with #3a86ff gradient theme
- **Design Features**: Glass morphism effects, gradient animations, hover effects, responsive grid systems, smooth transitions, and mobile-responsive design

### Database and Storage
- **connect-pg-simple**: PostgreSQL session store
- **date-fns**: Date manipulation utilities
- The application is configured to use PostgreSQL but currently implements an in-memory storage layer for development