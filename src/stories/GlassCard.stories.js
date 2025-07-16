import { GlassCard } from '../components/ui'

export default {
  title: 'UI/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Glassmorphism card component with backdrop blur effects. Perfect for modern UI with depth and transparency.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'light', 'heavy'],
      description: 'Glass effect intensity',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Internal padding preset',
    },
    withReflection: {
      control: { type: 'boolean' },
      description: 'Add glass reflection effect',
    },
    withGlow: {
      control: { type: 'boolean' },
      description: 'Add subtle glow effect',
    },
  },
  tags: ['autodocs'],
}

// Template
const Template = (args) => (
  <div className="w-96 h-64 bg-gradient-to-br from-web-green-100 to-web-green-200 flex items-center justify-center">
    <GlassCard {...args}>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Glass Card</h3>
        <p className="text-gray-600">Beautiful glassmorphism effect with backdrop blur</p>
      </div>
    </GlassCard>
  </div>
)

// Basic variants
export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  padding: 'medium',
}

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
  padding: 'medium',
}

export const Heavy = Template.bind({})
Heavy.args = {
  variant: 'heavy',
  padding: 'medium',
}

// Padding variations
export const NoPadding = Template.bind({})
NoPadding.args = {
  variant: 'default',
  padding: 'none',
}

export const SmallPadding = Template.bind({})
SmallPadding.args = {
  variant: 'default',
  padding: 'small',
}

export const LargePadding = Template.bind({})
LargePadding.args = {
  variant: 'default',
  padding: 'large',
}

// Effects
export const WithReflection = Template.bind({})
WithReflection.args = {
  variant: 'default',
  padding: 'medium',
  withReflection: true,
}

export const WithGlow = Template.bind({})
WithGlow.args = {
  variant: 'default',
  padding: 'medium',
  withGlow: true,
}

// Real-world examples
export const StatsCard = () => (
  <div className="w-full h-64 bg-gradient-to-br from-web-green-100 to-web-green-200 flex items-center justify-center">
    <GlassCard variant="default" padding="large">
      <div className="text-center">
        <div className="text-4xl font-bold text-web-green-700 mb-2">99%</div>
        <div className="text-gray-600 font-medium">Inventory Accuracy</div>
        <div className="text-sm text-gray-500 mt-2">Real-time tracking</div>
      </div>
    </GlassCard>
  </div>
)

export const FeatureCard = () => (
  <div className="w-full h-80 bg-gradient-to-br from-web-green-100 to-web-green-200 flex items-center justify-center">
    <GlassCard variant="light" padding="large" className="max-w-sm">
      <div className="text-center">
        <div className="text-4xl mb-4">📦</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Inventory</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Real-time stock tracking across all locations with automated reorder points
        </p>
      </div>
    </GlassCard>
  </div>
)

export const NavigationCard = () => (
  <div className="w-full h-32 bg-gradient-to-br from-web-green-100 to-web-green-200 flex items-center justify-center">
    <GlassCard variant="light" padding="small">
      <div className="flex items-center space-x-6">
        <a href="#" className="text-web-green-700 hover:text-web-green-900 font-medium">Features</a>
        <a href="#" className="text-web-green-700 hover:text-web-green-900 font-medium">Pricing</a>
        <button className="px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium">
          Sign In
        </button>
      </div>
    </GlassCard>
  </div>
)
