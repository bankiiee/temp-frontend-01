import { useState } from 'react'
import { Input } from '../ui'

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional input component with validation states, icons, and accessibility features. Supports various input types and styling options.',
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

// Template for creating stories
const Template = (args) => {
  const [value, setValue] = useState(args.value || '')
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

// Basic input types
export const Text = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'Enter your name',
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'Enter your email',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Enter your password',
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  placeholder: 'Enter quantity',
}

// States
export const WithError = Template.bind({})
WithError.args = {
  type: 'email',
  placeholder: 'Enter your email',
  value: 'invalid-email',
  error: 'Please enter a valid email address',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  placeholder: 'This field is disabled',
  disabled: true,
  value: 'Disabled input',
}

export const Required = Template.bind({})
Required.args = {
  type: 'text',
  placeholder: 'This field is required',
  required: true,
}

// Interactive examples
export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email) => {
    if (email && !/\S+@\S+\.\S+/.test(email)) {
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
          Search
        </button>
      </div>
    </div>
  )
}

export const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    price: '',
    quantity: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Add Product</h3>
      
      <Input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <Input
        type="text"
        name="sku"
        placeholder="SKU"
        value={formData.sku}
        onChange={handleChange}
        required
      />
      
      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent resize-none"
      />
      
      <div className="flex space-x-2">
        <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
          Cancel
        </button>
        <button className="flex-1 px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
          Add Product
        </button>
      </div>
    </div>
  )
}

// All states showcase
export const AllStates = () => (
  <div className="space-y-4 w-80">
    <Input type="text" placeholder="Normal input" />
    <Input type="text" placeholder="Required input" required />
    <Input type="text" placeholder="Input with error" error="This field is required" />
    <Input type="text" placeholder="Disabled input" disabled value="Disabled" />
  </div>
)
