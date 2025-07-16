import { useState } from 'react'
import { Link } from 'react-router'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempt:', formData)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-web-green-50 via-web-green-100 to-web-green-200">
        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/30 to-web-green-200/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-web-green-300/30 to-white/20 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-web-green-100/40 to-web-green-400/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Liquid Glass Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-web-green-200/20 backdrop-blur-[1px]"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-web-green-700 hover:text-web-green-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Login Card with Liquid Glass Effect */}
          <div className="relative">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl"></div>
            
            {/* Glass Reflection Effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl"></div>
            
            {/* Card Content */}
            <div className="relative z-10 p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-web-green-400 to-web-green-600 rounded-2xl mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-web-green-900 mb-2">Welcome Back</h1>
                <p className="text-web-green-700">Sign in to your account</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-web-green-800">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30"></div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="relative z-10 w-full px-4 py-3 bg-transparent border-0 rounded-xl text-web-green-900 placeholder-web-green-600 focus:outline-none focus:ring-2 focus:ring-web-green-400 focus:ring-opacity-50 transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-web-green-800">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30"></div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="relative z-10 w-full px-4 py-3 bg-transparent border-0 rounded-xl text-web-green-900 placeholder-web-green-600 focus:outline-none focus:ring-2 focus:ring-web-green-400 focus:ring-opacity-50 transition-all duration-200"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-web-green-700">
                    <input type="checkbox" className="mr-2 rounded border-web-green-300 text-web-green-600 focus:ring-web-green-400" />
                    Remember me
                  </label>
                  <a href="#" className="text-web-green-600 hover:text-web-green-800 transition-colors duration-200">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full py-3 px-4 bg-gradient-to-r from-web-green-600 to-web-green-700 hover:from-web-green-700 hover:to-web-green-800 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10">
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-web-green-400 to-web-green-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-web-green-700">
                  Don't have an account?{' '}
                  <a href="#" className="text-web-green-600 hover:text-web-green-800 font-semibold transition-colors duration-200">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-web-green-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-web-green-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-web-green-600 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
