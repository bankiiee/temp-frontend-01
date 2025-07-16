import { Input } from '../components/ui'
import { useState } from 'react'

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional form input component with validation, loading states, and consistent styling.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the input',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Mark as required field',
    },
  },
  tags: ['autodocs'],
}

// Template with state management
const Template = (args) => {
  const [value, setValue] = useState(args.value || '')
  return (
    <div className="w-80">
      <Input 
        {...args} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

// Basic input types
export const TextInput = Template.bind({})
TextInput.args = {
  type: 'text',
  placeholder: 'Enter your name',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  placeholder: 'Enter your email',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  type: 'password',
  placeholder: 'Enter your password',
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  type: 'number',
  placeholder: 'Enter quantity',
}

// States
export const WithError = Template.bind({})
WithError.args = {
  type: 'email',
  placeholder: 'Enter your email',
  error: 'Please enter a valid email address',
  value: 'invalid-email',
}

export const Required = Template.bind({})
Required.args = {
  type: 'text',
  placeholder: 'Company name',
  required: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  placeholder: 'Disabled input',
  disabled: true,
  value: 'Cannot edit this',
}

// Real-world form examples
export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (value) => {
    if (value && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  return (
    <div className="w-80 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Sign In</h3>
      
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          validateEmail(e.target.value)
        }}
        error={emailError}
        required
      />
      
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
      <button className="w-full px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
        Sign In
      </button>
    </div>
  )
}

export const SearchForm = () => {
  const [search, setSearch] = useState('')
  
  return (
    <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Search Inventory</h3>
      
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <button className="px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
      
      <Input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <Input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <Input
        type="text"
        name="company"
        placeholder="Company name"
        value={formData.company}
        onChange={handleChange}
      />
      
      <button className="w-full px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
        Send Message
      </button>
    </div>
  )
}
