import { Button } from '../ui'

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional button component with multiple variants, sizes, and states. Supports glassmorphism design with proper hover and loading states. Can render as different elements using the `as` prop for flexible usage.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      description: 'Button visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size preset',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state with spinner',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
}

// Template for creating stories
const Template = (args) => <Button {...args} />

// Primary Button Stories
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Get Started Free',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Watch Demo',
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  children: 'Learn More',
}

// Size Variations
export const Small = Template.bind({})
Small.args = {
  variant: 'primary',
  size: 'small',
  children: 'Small Button',
}

export const Medium = Template.bind({})
Medium.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Medium Button',
}

export const Large = Template.bind({})
Large.args = {
  variant: 'primary',
  size: 'large',
  children: 'Large Button',
}

// States
export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Disabled Button',
}

export const Loading = Template.bind({})
Loading.args = {
  variant: 'primary',
  loading: true,
  children: 'Loading Button',
}

// Interactive examples
export const WithIcon = Template.bind({})
WithIcon.args = {
  variant: 'primary',
  children: (
    <>
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      Start Trial
    </>
  ),
}

// All variants showcase
export const AllVariants = () => (
  <div className="flex gap-4 flex-wrap">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
)

// All sizes showcase
export const AllSizes = () => (
  <div className="flex gap-4 items-center flex-wrap">
    <Button variant="primary" size="small">Small</Button>
    <Button variant="primary" size="medium">Medium</Button>
    <Button variant="primary" size="large">Large</Button>
  </div>
)

// All states showcase
export const AllStates = () => (
  <div className="flex gap-4 flex-wrap">
    <Button variant="primary">Normal</Button>
    <Button variant="primary" disabled>Disabled</Button>
    <Button variant="primary" loading>Loading</Button>
  </div>
)

// Usage in ERP context
export const ERPActions = () => (
  <div className="flex gap-4 flex-wrap">
    <Button variant="primary">Create Order</Button>
    <Button variant="secondary">Export Data</Button>
    <Button variant="ghost">View Details</Button>
  </div>
)

// Real-world form example
export const LoginForm = () => (
  <div className="w-80 space-y-4 p-6 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Sign In</h3>
    
    <input
      type="email"
      placeholder="Email address"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
    />
    
    <input
      type="password"
      placeholder="Password"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
    />
    
    <Button variant="primary" size="medium" className="w-full">
      Sign In
    </Button>
    
    <Button variant="ghost" size="small" className="w-full">
      Forgot Password?
    </Button>
  </div>
)

// Card actions example
export const CardActions = () => (
  <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-gray-800 mb-2">Product Management</h3>
    <p className="text-gray-600 mb-4">Manage your inventory and product catalog</p>
    
    <div className="flex justify-between items-center">
      <Button variant="ghost" size="small">
        Cancel
      </Button>
      <div className="flex gap-2">
        <Button variant="secondary" size="small">
          Save Draft
        </Button>
        <Button variant="primary" size="small">
          Publish
        </Button>
      </div>
    </div>
  </div>
)

// Polymorphic usage (as Link)
export const AsLink = () => (
  <div className="space-y-4">
    <p className="text-gray-600">Button can render as different elements using the `as` prop:</p>
    <div className="flex gap-4">
      <Button as="a" href="#" variant="primary">
        As Anchor Tag
      </Button>
      <Button as="div" variant="secondary" onClick={() => alert('Clicked div!')}>
        As Div Element
      </Button>
    </div>
  </div>
)