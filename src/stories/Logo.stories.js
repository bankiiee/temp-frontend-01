import { Logo } from '../components/ui'

export default {
  title: 'UI/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'StockFlow Pro brand logo component with consistent sizing and styling across the application.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Logo size preset',
    },
    showTagline: {
      control: { type: 'boolean' },
      description: 'Show the ERP tagline',
    },
  },
  tags: ['autodocs'],
}

// Template
const Template = (args) => <Logo {...args} />

// Size variations
export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

// With and without tagline
export const WithTagline = Template.bind({})
WithTagline.args = {
  size: 'medium',
  showTagline: true,
}

export const WithoutTagline = Template.bind({})
WithoutTagline.args = {
  size: 'medium',
  showTagline: false,
}

// Usage examples
export const NavigationLogo = () => (
  <div className="w-full h-32 bg-gradient-to-br from-web-green-100 to-web-green-200 flex items-center justify-center">
    <div className="flex items-center justify-between w-full max-w-4xl px-6">
      <Logo size="medium" />
      <div className="flex space-x-6">
        <a href="#" className="text-web-green-700">Features</a>
        <a href="#" className="text-web-green-700">Pricing</a>
      </div>
    </div>
  </div>
)

export const FooterLogo = () => (
  <div className="w-full h-48 bg-gray-800 flex items-start justify-center pt-8">
    <div className="max-w-4xl w-full px-6">
      <Logo size="large" />
      <p className="text-gray-400 text-sm mt-4 max-w-md">
        Professional ERP solution for SMEs. Streamline inventory, boost efficiency, and scale your business.
      </p>
    </div>
  </div>
)

// All sizes comparison
export const AllSizes = () => (
  <div className="flex items-center space-x-8">
    <div className="text-center">
      <Logo size="small" />
      <p className="text-xs text-gray-500 mt-2">Small</p>
    </div>
    <div className="text-center">
      <Logo size="medium" />
      <p className="text-xs text-gray-500 mt-2">Medium</p>
    </div>
    <div className="text-center">
      <Logo size="large" />
      <p className="text-xs text-gray-500 mt-2">Large</p>
    </div>
  </div>
)
