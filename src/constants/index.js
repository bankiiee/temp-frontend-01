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
    description: 'Monitor inventory levels, automate reorders, and track products with precision across all locations',
    icon: '📦',
    benefits: [
      'Real-time stock tracking',
      'Automated reorder points',
      'Multi-location support',
      'Barcode integration'
    ],
    metric: {
      value: '99%',
      label: 'Inventory Accuracy'
    }
  },
  {
    id: 'logistics',
    title: 'Logistics Optimization',
    description: 'Optimize delivery routes, reduce costs, and improve customer satisfaction with AI-powered planning',
    icon: '🚚',
    benefits: [
      'AI-powered route planning',
      'Real-time delivery tracking',
      'Cost optimization',
      'Customer notifications'
    ],
    metric: {
      value: '35%',
      label: 'Cost Reduction'
    }
  },
  {
    id: 'warehouse',
    title: 'Warehouse Management',
    description: 'Increase efficiency with streamlined pick, pack, and ship operations using automated workflows',
    icon: '🏭',
    benefits: [
      'Barcode scanning',
      'Pick list optimization',
      'Automated workflows',
      'Quality control'
    ],
    metric: {
      value: '60%',
      label: 'Faster Processing'
    }
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    description: 'Track KPIs, forecast demand, and optimize your operations with powerful business insights',
    icon: '📊',
    benefits: [
      'Real-time dashboards',
      'Demand forecasting',
      'Performance KPIs',
      'Custom reports'
    ],
    metric: {
      value: '40%',
      label: 'Better Decisions'
    }
  }
]

// Statistics Data
export const STATS = [
  { 
    id: 'cost_reduction',
    value: '70%', 
    label: 'Cost Reduction vs Traditional ERP',
    description: 'Compared to traditional ERP solutions',
    icon: '💰'
  },
  { 
    id: 'processing_speed',
    value: '60%', 
    label: 'Faster Order Processing',
    description: 'Streamlined workflows and automation',
    icon: '⚡'
  },
  { 
    id: 'accuracy',
    value: '99%', 
    label: 'Inventory Accuracy',
    description: 'Real-time tracking and validation',
    icon: '🎯'
  },
  { 
    id: 'setup_time',
    value: '24hrs', 
    label: 'Setup Time',
    description: 'Quick deployment and onboarding',
    icon: '🚀'
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
