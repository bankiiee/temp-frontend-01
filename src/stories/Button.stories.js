import { Button } from '../components/ui'

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional button component with multiple variants, sizes, and states. Supports glassmorphism design with proper hover and loading states.',
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
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
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

// Usage in ERP context
export const ERPActions = () => (
  <div className="flex gap-4 flex-wrap">
    <Button variant="primary">Create Order</Button>
    <Button variant="secondary">Export Data</Button>
    <Button variant="ghost">View Details</Button>
  </div>
)
