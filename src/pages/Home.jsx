import { useState } from 'react'
import { Link } from 'react-router'

function Home() {
  const [greeting, setGreeting] = useState('Hello World')
  const [isAnimating, setIsAnimating] = useState(false)

  const greetings = [
    'Hello World! 🌍',
    'Welcome to React! ⚛️',
    'Greetings, Developer! 👨‍💻',
    'Beautiful Day! ☀️',
    'Keep Coding! 💻',
    'Amazing Work! ✨',
    'Stay Creative! 🎨',
    'Hello Universe! 🌌'
  ]

  const generateGreeting = () => {
    setIsAnimating(true)
    setTimeout(() => {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
      setGreeting(randomGreeting)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-web-green-50 via-web-green-100 to-web-green-200">
        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/30 to-web-green-200/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-web-green-300/30 to-white/20 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-web-green-100/40 to-web-green-400/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-web-green-200/30 to-white/30 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-white/40 to-web-green-300/20 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Liquid Glass Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-web-green-200/20 backdrop-blur-[1px]"></div>
      
      {/* Additional floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-web-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-web-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-web-green-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Navigation with Glass Effect */}
      <nav className="relative z-20 p-6">
        <div className="flex justify-end">
          <div className="relative">
            {/* Glass Background for Navigation */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg"></div>
            <Link 
              to="/login"
              className="relative z-10 px-6 py-3 inline-flex items-center text-web-green-800 font-medium hover:text-web-green-900 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8 pt-0">
        <div className="text-center">
          {/* Main Greeting Card with Enhanced Glass Effect */}
          <div className="relative">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl"></div>
            
            {/* Glass Reflection Effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl"></div>
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            
            {/* Card Content */}
            <div className="relative z-10 p-12 max-w-2xl mx-auto">
              <div className="space-y-8">
                {/* Hello World Display */}
                <div className="space-y-4">
                  <h1 className={`text-6xl md:text-7xl font-bold text-web-green-900 transition-all duration-300 ${
                    isAnimating ? 'scale-110 opacity-50' : 'scale-100 opacity-100'
                  }`}>
                    {greeting}
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-web-green-400 to-web-green-600 rounded-full mx-auto shadow-lg"></div>
                </div>

                {/* Generate Button */}
                <div className="flex flex-col items-center space-y-6">
                  <button
                    onClick={generateGreeting}
                    disabled={isAnimating}
                    className="group relative px-8 py-4 bg-gradient-to-r from-web-green-600 to-web-green-700 hover:from-web-green-700 hover:to-web-green-800 text-white font-bold text-xl rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {isAnimating ? 'Generating...' : 'Generate Greeting'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-web-green-400 to-web-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                  </button>

                  {/* Decorative Elements */}
                  <div className="flex space-x-4">
                    <div className="w-4 h-4 bg-web-green-400 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-web-green-500 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-4 h-4 bg-web-green-600 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>

                {/* Info Text */}
                <p className="text-web-green-700 text-lg">
                  Click the button to generate a new greeting message!
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills with Glass Effect */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['React ⚛️', 'Vite ⚡', 'Tailwind 🎨', 'React Router 🧭'].map((tech, index) => (
              <div key={tech} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-sm rounded-full border border-white/30 shadow-sm"></div>
                <span className="relative z-10 px-4 py-2 inline-block text-web-green-800 font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Decorative Elements */}
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

export default Home

