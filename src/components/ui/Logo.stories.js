import { Logo } from '../ui'

export default {
  title: 'UI/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Consistent branding logo component for StockFlow Pro. Available in multiple sizes with optional text display for flexible usage across the application.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Logo size preset',
    },
    showText: {
      control: { type: 'boolean' },
      description: 'Show company name and tagline',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
}

// Template for creating stories
const Template = (args) => <Logo {...args} />

// Size variations
export const Small = Template.bind({})
Small.args = {
  size: 'small',
  showText: true,
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  showText: true,
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  showText: true,
}

// Text variations
export const IconOnly = Template.bind({})
IconOnly.args = {
  size: 'medium',
  showText: false,
}

export const WithText = Template.bind({})
WithText.args = {
  size: 'medium',
  showText: true,
}

// All sizes showcase
export const AllSizes = () => (
  <div className="flex items-center space-x-8">
    <div className="text-center">
      <Logo size="small" showText={true} />
      <p className="text-xs text-gray-500 mt-2">Small</p>
    </div>
    <div className="text-center">
      <Logo size="medium" showText={true} />
      <p className="text-xs text-gray-500 mt-2">Medium</p>
    </div>
    <div className="text-center">
      <Logo size="large" showText={true} />
      <p className="text-xs text-gray-500 mt-2">Large</p>
    </div>
  </div>
)

// Icon only showcase
export const IconOnlySizes = () => (
  <div className="flex items-center space-x-6">
    <div className="text-center">
      <Logo size="small" showText={false} />
      <p className="text-xs text-gray-500 mt-2">Small Icon</p>
    </div>
    <div className="text-center">
      <Logo size="medium" showText={false} />
      <p className="text-xs text-gray-500 mt-2">Medium Icon</p>
    </div>
    <div className="text-center">
      <Logo size="large" showText={false} />
      <p className="text-xs text-gray-500 mt-2">Large Icon</p>
    </div>
  </div>
)

// Usage in navigation
export const NavigationUsage = () => (
  <div className="w-full p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
    <div className="flex justify-between items-center">
      <Logo size="medium" showText={true} />
      <div className="flex space-x-4">
        <a href="#" className="text-web-green-700 hover:text-web-green-900 font-medium">Features</a>
        <a href="#" className="text-web-green-700 hover:text-web-green-900 font-medium">Pricing</a>
        <button className="px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
          Sign In
        </button>
      </div>
    </div>
  </div>
)

// Usage in footer
export const FooterUsage = () => (
  <div className="w-full p-6 bg-gray-800 text-white rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="space-y-4">
        <Logo size="large" showText={true} className="filter brightness-0 invert" />
        <p className="text-gray-300 text-sm">
          Professional ERP solution for SMEs. Streamline inventory, boost efficiency, and scale your business.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white">Features</a></li>
          <li><a href="#" className="hover:text-white">Pricing</a></li>
          <li><a href="#" className="hover:text-white">API</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
          <li><a href="#" className="hover:text-white">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white">Help Center</a></li>
          <li><a href="#" className="hover:text-white">Documentation</a></li>
          <li><a href="#" className="hover:text-white">Status</a></li>
        </ul>
      </div>
    </div>
  </div>
)

// Mobile navigation usage
export const MobileUsage = () => (
  <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
    <div className="flex justify-between items-center mb-4">
      <Logo size="small" showText={true} />
      <button className="p-2 text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <nav className="space-y-2">
      <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Dashboard</a>
      <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Inventory</a>
      <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Orders</a>
      <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Reports</a>
    </nav>
  </div>
)

// Loading state
export const LoadingState = () => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse"></div>
    <div className="space-y-1">
      <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
      <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
    </div>
  </div>
)
