// Application Constants
export const APP_CONFIG = {
  name: 'StockFlow Pro',
  tagline: 'ERP for SMEs',
  description: 'Streamline your stock management, logistics, and operations with our powerful yet affordable ERP solution.',
  version: '1.0.0'
}

// Feature Data
export const FEATURES = [
  {
    id: 'inventory',
    title: 'Smart Inventory Management',
    subtitle: 'Real-time stock tracking across all locations',
    icon: '📦',
    description: 'Monitor inventory levels, automate reorders, and track products with precision'
  },
  {
    id: 'logistics',
    title: 'Logistics Optimization',
    subtitle: 'AI-powered route planning and delivery tracking',
    icon: '🚚',
    description: 'Optimize delivery routes, reduce costs, and improve customer satisfaction'
  },
  {
    id: 'warehouse',
    title: 'Warehouse Management',
    subtitle: 'Streamlined pick, pack, and ship operations',
    icon: '🏭',
    description: 'Increase efficiency with barcode scanning and automated workflows'
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    subtitle: 'Insights that drive smarter decisions',
    icon: '📊',
    description: 'Track KPIs, forecast demand, and optimize your operations'
  }
]

// Statistics Data
export const STATS = [
  { 
    id: 'cost_reduction',
    number: '70%', 
    label: 'Cost Reduction vs Traditional ERP' 
  },
  { 
    id: 'processing_speed',
    number: '60%', 
    label: 'Faster Order Processing' 
  },
  { 
    id: 'accuracy',
    number: '99%', 
    label: 'Inventory Accuracy' 
  },
  { 
    id: 'setup_time',
    number: '24hrs', 
    label: 'Setup Time' 
  }
]

// Technology Stack
export const TECH_STACK = [
  { id: 'cloud', label: 'Cloud-Native', icon: '☁️' },
  { id: 'ai', label: 'AI-Powered', icon: '🤖' },
  { id: 'mobile', label: 'Mobile-First', icon: '📱' },
  { id: 'api', label: 'API-Ready', icon: '🔗' }
]

// Navigation Items
export const NAV_ITEMS = [
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'login', label: 'Sign In', href: '/login', isPrimary: true }
]

// Animation Delays
export const ANIMATION_DELAYS = {
  short: 200,
  medium: 300,
  long: 500,
  pulse1: 1000,
  pulse2: 2000,
  pulse3: 3000,
  pulse4: 4000
}

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  FEATURES: '/features',
  PRICING: '/pricing'
}
