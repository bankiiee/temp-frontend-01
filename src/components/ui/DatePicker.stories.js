import { useState } from 'react'
import { DatePicker } from '../ui'

export default {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional date picker component with calendar popup, glassmorphism design, and form integration. Supports date selection with month/year navigation and responsive design.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    name: {
      control: { type: 'text' },
      description: 'Input name attribute',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
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
  const [value, setValue] = useState(args.value || null)
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

// Basic usage
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Select a date',
  name: 'date',
}

export const Birthday = Template.bind({})
Birthday.args = {
  placeholder: 'Select your birthday',
  name: 'birthday',
}

export const WithError = Template.bind({})
WithError.args = {
  placeholder: 'Select date of birth',
  name: 'dob',
  error: 'Date of birth is required',
}

export const Required = Template.bind({})
Required.args = {
  placeholder: 'Event date (required)',
  name: 'eventDate',
  required: true,
}

// Real-world form examples
export const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: null,
    endDate: null,
    location: ''
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'date' ? value : value
    }))
  }

  return (
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Create Event</h3>
      
      <input
        type="text"
        name="title"
        placeholder="Event title"
        value={formData.title}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        required
      />
      
      <div className="grid grid-cols-2 gap-2">
        <DatePicker
          name="startDate"
          placeholder="Start date"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        
        <DatePicker
          name="endDate"
          placeholder="End date"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <input
        type="text"
        name="location"
        placeholder="Event location"
        value={formData.location}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
      />
      
      <button className="w-full px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
        Create Event
      </button>
    </div>
  )
}

export const LoginWithBirthday = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    birthday: null
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'date' ? value : value
    }))
  }

  return (
    <div className="w-80 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Enhanced Login</h3>
      
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        required
      />
      
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        required
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Birthday (for verification)</label>
        <DatePicker
          name="birthday"
          placeholder="Select your birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </div>
      
      <button className="w-full px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
        Sign In
      </button>
    </div>
  )
}

export const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: null,
    hireDate: null,
    email: ''
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'date' ? value : value
    }))
  }

  return (
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Employee Information</h3>
      
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
          required
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
          required
        />
      </div>
      
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        required
      />
      
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
          <DatePicker
            name="birthDate"
            placeholder="Birth date"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
          <DatePicker
            name="hireDate"
            placeholder="Hire date"
            value={formData.hireDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
          Cancel
        </button>
        <button className="flex-1 px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
          Save Employee
        </button>
      </div>
    </div>
  )
}

// Filter form example
export const DateRangeFilter = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-lg">
      <h4 className="font-semibold text-gray-800 mb-3">Filter by Date Range</h4>
      
      <div className="space-y-2">
        <DatePicker
          name="startDate"
          placeholder="Start date"
          value={dateRange.startDate}
          onChange={handleChange}
        />
        
        <DatePicker
          name="endDate"
          placeholder="End date"
          value={dateRange.endDate}
          onChange={handleChange}
        />
      </div>
      
      <div className="flex space-x-2 mt-3">
        <button className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          Clear
        </button>
        <button className="flex-1 px-3 py-2 text-sm bg-web-green-600 text-white rounded-lg hover:bg-web-green-700">
          Apply
        </button>
      </div>
    </div>
  )
}

// All states showcase
export const AllStates = () => (
  <div className="space-y-4 w-80">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Normal</label>
      <DatePicker placeholder="Select a date" name="normal" />
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Required</label>
      <DatePicker placeholder="Required date" name="required" required />
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">With Error</label>
      <DatePicker 
        placeholder="Date with error" 
        name="error" 
        error="This field is required"
      />
    </div>
  </div>
)
