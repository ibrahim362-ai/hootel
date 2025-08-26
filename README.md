# Hotel ERP System

A comprehensive Hotel Enterprise Resource Planning (ERP) system built with React, featuring role-based access control and modern UI design.

## 🌟 Features

### Role-Based Access Control
- **Admin**: Full system access including dashboard, rooms, restaurant, gym, CRM, property, staff, reports, and settings
- **Employer/Staff**: Specialized controllers for three departments:
  - **Rooms Controller**: Housekeeping and front desk operations with task management and scheduling
  - **Restaurant Controller**: Order management, inventory tracking, and service coordination
  - **Gym Controller**: Fitness class management, trainer scheduling, and member coordination
- **User/Guest**: Public interface for room bookings, restaurant orders, gym schedules, and profile management

### Modern Design Features
- **#3a86ff gradient theme** with glassmorphism effects
- **Framer Motion animations** with spring physics and staggered effects
- **CSS modules** with responsive grid systems and hover effects
- **Real-time progress tracking** and status management
- **Comprehensive data visualization** and performance metrics

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Wouter** for lightweight client-side routing
- **Framer Motion** for smooth animations
- **Tailwind CSS** with modern utility-first styling
- **Radix UI** components with shadcn/ui design system
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js framework
- **Drizzle ORM** with PostgreSQL support
- **Zod schemas** for type-safe API validation
- **Session management** with secure authentication
- **RESTful API** architecture

### UI Components
- **Modern glassmorphism effects** with gradient animations
- **Responsive design** for desktop and mobile
- **Interactive data tables** with sorting and filtering
- **Real-time status indicators** and progress tracking
- **Advanced form handling** with validation
- **Chart visualizations** with animation support

## 📁 Project Structure

```
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── layout/      # Navigation, headers, footers
│   │   │   └── ui/          # Shadcn/UI components
│   │   ├── pages/           # Route components
│   │   │   ├── admin/       # Admin dashboard pages
│   │   │   ├── employer/    # Staff interface pages
│   │   │   │   ├── rooms/   # Housekeeping controller
│   │   │   │   ├── restaurant/ # Restaurant controller
│   │   │   │   └── gym/     # Gym controller
│   │   │   └── user/        # Guest interface pages
│   │   ├── styles/          # CSS modules and global styles
│   │   └── lib/             # Utilities and configurations
├── server/                   # Backend Express application
├── shared/                   # Shared types and schemas
└── attached_assets/         # Static assets and images
```

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/hotel-erp-system.git
cd hotel-erp-system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:static` - Build static frontend only
- `npm run preview` - Preview production build
- `npm run check` - Type checking

## 🌐 Live Demo

Visit the live demo: [Hotel ERP System](https://yourusername.github.io/hotel-erp-system/)

## 📋 User Roles & Access

### Admin Dashboard
- Comprehensive system overview and analytics
- Room management with occupancy tracking
- Restaurant operations and menu management
- Gym facilities and class scheduling
- Customer relationship management (CRM)
- Property management and maintenance
- Staff management and performance tracking
- Detailed reporting and analytics
- System settings and configuration

### Employer Interface

#### Rooms Controller
- **Dashboard**: Task completion rates, room status overview, shift management
- **Tasks**: Room cleaning, maintenance requests, inspection schedules
- **Shifts**: Staff scheduling, team coordination, availability management

#### Restaurant Controller  
- **Dashboard**: Order overview, service metrics, customer satisfaction ratings
- **Orders**: Complete order lifecycle management with real-time status tracking
- **Inventory**: Stock management, supplier tracking, automated reorder alerts

#### Gym Controller
- **Dashboard**: Class attendance, member engagement, trainer performance metrics
- **Trainer Schedule**: Personal training sessions, availability, client management
- **Classes**: Fitness class management, member enrollment, capacity tracking

### User/Guest Interface
- **Home**: Modern landing page with animated features and service highlights
- **Rooms**: Interactive booking system with real-time availability and filters
- **Restaurant**: Menu browsing, online ordering, and dining reservations
- **Gym**: Class schedules, membership options, and facility information
- **Profile**: Account management, booking history, and preferences

## 🎨 Design System

### Color Palette
- **Primary**: #3a86ff (Gradient blue theme)
- **Glassmorphism effects** with backdrop blur and transparency
- **Responsive typography** with modern font stacks
- **Micro-interactions** with Framer Motion animations

### Animation Features
- **Spring physics** for natural movement
- **Staggered animations** for list and grid items
- **Hover effects** with smooth transitions
- **Loading states** with skeleton components
- **Page transitions** with route-based animations

## 🚀 Deployment

### GitHub Pages
This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** to trigger automatic deployment

### Manual Deployment
```bash
# Build static files
npm run build:static

# Deploy the dist/public folder to your hosting provider
```

## 📱 Mobile Responsiveness

- **Mobile-first design** approach
- **Responsive grid systems** with Tailwind CSS
- **Touch-friendly interfaces** with appropriate sizing
- **Progressive enhancement** for larger screens
- **Optimized performance** for mobile devices

## 🔒 Security Features

- **Role-based access control** with route protection
- **Session management** with secure authentication
- **Input validation** with Zod schemas
- **CSRF protection** and secure headers
- **Environment-based configuration**

## 📊 Performance Features

- **Code splitting** with dynamic imports
- **Lazy loading** for route components
- **Optimized bundle sizes** with Vite
- **Fast refresh** during development
- **Production optimizations** with minification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animation capabilities
- **Vite** for fast development experience
- **Replit** for development environment

---

Built with ❤️ using modern web technologies for optimal performance and user experience.