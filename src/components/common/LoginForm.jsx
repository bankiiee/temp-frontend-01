import { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, GlassCard, DatePicker } from '../ui'

/**
 * Login Form Component
 * Professional login form with validation and loading states
 */
const LoginForm = ({ 
  onSubmit, 
  isLoading = false,
  title = "Welcome Back",
  subtitle = "Sign in to your account"
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    birthday: null
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'date' ? value : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <GlassCard className="w-full max-w-md p-8">
      {/* Form Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {title}
        </h1>
        <p className="text-gray-600">
          {subtitle}
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />

        <DatePicker
          name="birthday"
          placeholder="Select your birthday"
          value={formData.birthday}
          onChange={handleChange}
          error={errors.birthday}
        />

        {/* Additional Options */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-gray-600">
            <input 
              type="checkbox" 
              className="rounded border-gray-300 focus:ring-web-green-500"
            />
            <span>Remember me</span>
          </label>
          
          <a 
            href="#" 
            className="text-web-green-600 hover:text-web-green-700 font-medium"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Social Login Options */}
      <div className="space-y-3">
        <Button
          variant="secondary"
          size="large"
          className="w-full"
          onClick={() => console.log('Google login')}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>
        
        <Button
          variant="secondary"
          size="large"
          className="w-full"
          onClick={() => console.log('Microsoft login')}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 0h11.25v11.25H0zm12.75 0H24v11.25H12.75zM0 12.75h11.25V24H0zm12.75 0H24V24H12.75z"/>
          </svg>
          Continue with Microsoft
        </Button>
      </div>

      {/* Sign Up Link */}
      <div className="text-center mt-6 text-sm text-gray-600">
        Don't have an account?{' '}
        <a 
          href="#" 
          className="text-web-green-600 hover:text-web-green-700 font-medium"
        >
          Sign up for free
        </a>
      </div>
    </GlassCard>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default LoginForm
