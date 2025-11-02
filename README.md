# Dashboard Assignment

A modern, feature-rich dashboard application built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This application provides comprehensive analytics, order management, and data visualization capabilities with a beautiful, responsive UI.

Video URL - https://drive.google.com/file/d/1CaDXhQJbRxlgEobchcW31tRgNvw4LeCv/view?usp=drive_link
Deployed Link - https://dashboard-assignment-orpin.vercel.app

## 🚀 Key Functionalities

### 📊 Dashboard Views

#### **Default Dashboard (eCommerce Overview)**
- **Key Metrics Display**: Real-time metrics cards showing:
  - Total Customers with growth percentage
  - Total Orders with trend indicators
  - Revenue analytics
  - Performance metrics
- **Revenue Analytics**: Interactive charts comparing current vs. previous period revenue
- **Projections Chart**: Visual comparison of projected vs. actual performance by month
- **Geographic Revenue**: Location-based revenue breakdown with visual map integration
- **Top Selling Products**: Comprehensive table displaying best-performing products with pricing and quantity data
- **Sales Channel Analytics**: Breakdown of sales by channel (Direct, Affiliate, Sponsored, Email)

#### **eCommerce Page**
- **Advanced Order Management System**:
  - Comprehensive order list with detailed information
  - Order status tracking (In Progress, Complete, Pending, Approved, Rejected)
  - User information and avatars
  - Project details and addresses
  - Date tracking for all orders
  - Responsive table layout

### 🎨 User Interface Features

#### **Navigation System**
- **Left Sidebar Navigation**:
  - Collapsible/expandable sidebar
  - Multi-level navigation with expandable sections
  - Quick access favorites and recently viewed items
  - Dashboard sections: Default, eCommerce, Projects, Online Courses
  - Pages sections: User Profile (with sub-items), Account, Corporate, Blog, Social
  - Active page highlighting
  - Smooth animations and transitions
  - Mobile-responsive with overlay

#### **Top Bar**
- Quick search functionality
- Breadcrumb navigation
- User profile menu
- Notification center access
- Theme toggle
- Mobile menu controls

#### **Right Sidebar** (Context-aware)
- **Notifications Panel**:
  - Real-time notification feed
  - Categorized by type (bugs, user activities, subscriptions)
  - Timestamp tracking
- **Activity Feed**:
  - Recent user activities
  - Version releases
  - Bug submissions
  - Data modifications
  - Page deletions
- **Contacts List**:
  - Quick access to team members
  - Avatar display
  - Contact information

### 🎭 Theme & Customization

- **Dark/Light Mode Toggle**:
  - Seamless theme switching
  - Persistent theme preference
  - Custom color schemes for both modes
  - Optimized contrast ratios
  - Smooth transitions between themes

### 📱 Responsive Design

- **Mobile-First Approach**:
  - Fully responsive across all device sizes
  - Touch-optimized interactions
  - Adaptive layouts for phone, tablet, and desktop
  - Collapsible sidebars on mobile
  - Optimized navigation for small screens

### 📈 Data Visualization

- **Interactive Charts** (Powered by Recharts):
  - Line charts for revenue trends
  - Bar charts for projections
  - Pie charts for sales distribution
  - Geographic visualization for location-based data
  - Responsive and interactive tooltips
  - Custom styling and animations

### 🔧 Technical Features

- **Type Safety**: Full TypeScript implementation with strict type checking
- **Component Architecture**: Modular, reusable component structure
- **Configuration Management**: Centralized data configuration in `/config` directory
- **Performance Optimized**: Next.js 16 with App Router for optimal performance
- **Modern Styling**: Tailwind CSS 4 with custom configuration
- **Icon Library**: Comprehensive icon sets (Lucide React, React Icons)
- **Code Quality**: ESLint configuration for code consistency

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts 3.3.0
- **Icons**: Lucide React, React Icons
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

## 🚀 Getting Started

```bash
# Development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Start production server
npm start
# or
pnpm start

# Run linter
npm run lint
# or
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 📁 Project Structure

```
dashboard-assignment/
├── app/                    # Next.js App Router
│   ├── ecommerce/         # eCommerce page route
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── custom/            # Custom layout components
│   │   ├── dashboard-layout.tsx
│   │   ├── navigation.tsx
│   │   ├── right-sidebar.tsx
│   │   ├── theme-provider.tsx
│   │   └── top-bar.tsx
│   ├── sections/          # Dashboard section components
│   │   ├── metric-card.tsx
│   │   ├── order-list.tsx
│   │   ├── projections-chart.tsx
│   │   ├── revenue-by-location.tsx
│   │   ├── revenue-chart.tsx
│   │   ├── top-selling-products.tsx
│   │   └── total-sales.tsx
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── chart.tsx
├── config/                # Configuration & mock data
│   ├── charts-data.ts
│   ├── contact.ts
│   ├── dashboard-data.ts
│   ├── products-data.ts
│   └── index.ts
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## 🎯 Features by Route

### `/` - Default Dashboard
- eCommerce overview
- Metrics cards
- Revenue analytics
- Projections visualization
- Top selling products
- Sales by channel
- Geographic revenue distribution

### `/ecommerce` - Order Management
- Comprehensive order list
- Order status tracking
- User information
- Project details
- Advanced filtering and search

## 🔮 Future Enhancements

- User authentication and authorization
- Real-time data updates
- API integration for live data
- Export functionality for reports
- Advanced filtering and sorting
- Customizable dashboard widgets
- Multi-language support
- Accessibility improvements

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is an assignment project. Please follow the existing code style and architecture patterns when making changes.
