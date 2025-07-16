import { useState } from 'react'
import { Link } from 'react-router'
import { LiquidGlassBackground, LoginForm } from '../components'

function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (formData) => {
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempt:', formData)
      setIsLoading(false)
      // Handle successful login (redirect, etc.)
    }, 1500)
  }

  return (
    <LiquidGlassBackground>
      <div className="min-h-screen flex items-center justify-center p-6">
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

          {/* Login Form Component */}
          <LoginForm 
            onSubmit={handleLogin}
            isLoading={isLoading}
            title="Welcome Back"
            subtitle="Sign in to your StockFlow Pro account"
          />

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-web-green-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-web-green-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-web-green-600 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    </LiquidGlassBackground>
  )
}

export default Login
