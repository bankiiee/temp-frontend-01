import { GlassCard } from '../ui'

export default {
  title: 'UI/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Beautiful glassmorphism card component with backdrop blur effects. Perfect for creating modern UI elements with a translucent glass appearance.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'light', 'dark'],
      description: 'Card visual style variant',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Internal padding preset',
    },
    children: {
      control: { type: 'text' },
      description: 'Card content',
    },
  },
  tags: ['autodocs'],
}

// Template for creating stories
const Template = (args) => <GlassCard {...args} />

// Basic variants
export const Default = Template.bind({})
Default.args = {
  children: 'This is a default glass card with beautiful glassmorphism effects.',
  padding: 'medium',
}

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  children: 'Light variant with subtle transparency.',
  padding: 'medium',
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  children: 'Dark variant for contrast backgrounds.',
  padding: 'medium',
}

// Padding variations
export const NoPadding = Template.bind({})
NoPadding.args = {
  padding: 'none',
  children: (
    <div className="p-4 bg-web-green-100 text-web-green-800">
      Content with custom internal padding
    </div>
  ),
}

export const SmallPadding = Template.bind({})
SmallPadding.args = {
  padding: 'small',
  children: 'Small padding for compact layouts.',
}

export const LargePadding = Template.bind({})
LargePadding.args = {
  padding: 'large',
  children: 'Large padding for spacious layouts.',
}

// Real-world examples
export const FeatureCard = () => (
  <GlassCard className="max-w-sm">
    <div className="text-center">
      <div className="text-4xl mb-4">📦</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Smart Inventory
      </h3>
      <p className="text-gray-600 mb-4">
        Monitor inventory levels and automate reorders with precision.
      </p>
      <div className="text-2xl font-bold text-web-green-600">99%</div>
      <div className="text-sm text-gray-500">Accuracy Rate</div>
    </div>
  </GlassCard>
)

export const StatsCard = () => (
  <GlassCard variant="light" className="max-w-xs">
    <div className="text-center">
      <div className="text-3xl font-bold text-web-green-700 mb-1">70%</div>
      <div className="text-gray-600 text-sm font-medium">Cost Reduction</div>
      <div className="text-xs text-gray-500 mt-1">vs Traditional ERP</div>
    </div>
  </GlassCard>
)

export const NavigationCard = () => (
  <GlassCard variant="light" padding="small">
    <div className="flex items-center space-x-4">
      <div className="text-2xl">🏠</div>
      <div>
        <div className="font-semibold text-gray-800">Dashboard</div>
        <div className="text-sm text-gray-600">Overview & Analytics</div>
      </div>
    </div>
  </GlassCard>
)

export const FormCard = () => (
  <GlassCard className="w-80">
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
      
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        />
        
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        />
        
        <textarea
          placeholder="Message"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        />
      </div>
      
      <button className="w-full px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
        Send Message
      </button>
    </div>
  </GlassCard>
)

// Layout examples
export const CardGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
    <GlassCard className="text-center">
      <div className="text-3xl mb-2">⚡</div>
      <h4 className="font-semibold mb-1">Fast</h4>
      <p className="text-sm text-gray-600">Lightning quick performance</p>
    </GlassCard>
    
    <GlassCard className="text-center">
      <div className="text-3xl mb-2">🔒</div>
      <h4 className="font-semibold mb-1">Secure</h4>
      <p className="text-sm text-gray-600">Enterprise-grade security</p>
    </GlassCard>
    
    <GlassCard className="text-center">
      <div className="text-3xl mb-2">🎯</div>
      <h4 className="font-semibold mb-1">Accurate</h4>
      <p className="text-sm text-gray-600">Precise data management</p>
    </GlassCard>
  </div>
)
