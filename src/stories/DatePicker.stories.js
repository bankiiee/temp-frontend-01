import { DatePicker } from '../components/ui'
import { useState } from 'react'

export default {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional date picker component with calendar popup, glassmorphism design, and validation support.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no date is selected',
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

// Template with state management
const Template = (args) => {
  const [value, setValue] = useState(args.value || null)
  return (
    <div className="w-80">
      <DatePicker 
        {...args} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

// Basic date picker
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Select date',
}

export const Birthday = Template.bind({})
Birthday.args = {
  placeholder: 'Select your birthday',
  name: 'birthday',
}

export const WithError = Template.bind({})
WithError.args = {
  placeholder: 'Select date',
  error: 'Please select a valid date',
}

export const Required = Template.bind({})
Required.args = {
  placeholder: 'Event date',
  required: true,
}

export const PreSelected = Template.bind({})
PreSelected.args = {
  placeholder: 'Select date',
  value: new Date('1990-07-16'),
}

// Real-world form examples
export const BirthdayForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">User Registration</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
        <DatePicker
          name="birthday"
          placeholder="Select your birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </div>
      
      <button className="w-full px-4 py-2 bg-web-green-600 text-white rounded-lg font-medium hover:bg-web-green-700">
        Register
      </button>
      
      {/* Debug info */}
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <strong>Form Data:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  )
}

export const EventScheduler = () => {
  const [eventData, setEventData] = useState({
    title: '',
    startDate: null,
    endDate: null,
    location: ''
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setEventData(prev => ({
      ...prev,
      [name]: type === 'date' ? value : value
    }))
  }

  return (
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Schedule Event</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter event title"
          value={eventData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <DatePicker
            name="startDate"
            placeholder="Start date"
            value={eventData.startDate}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <DatePicker
            name="endDate"
            placeholder="End date"
            value={eventData.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={eventData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500"
        />
      </div>
      
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
