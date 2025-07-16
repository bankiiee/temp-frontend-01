import { useState } from 'react'

function App() {
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
      {/* Professional Gradient Background using Web Green palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-web-green-50 via-web-green-100 to-web-green-200">
        <div className="absolute inset-0 bg-gradient-to-tr from-web-green-600 via-web-green-500 to-web-green-400 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-web-green-300 via-web-green-400 to-web-green-500 opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-web-green-100 via-web-green-200 to-web-green-300 opacity-30"></div>
      </div>
      
      {/* Animated mesh overlay using brand colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-web-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-web-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-web-green-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          {/* Main Greeting Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg p-12 max-w-2xl mx-auto border border-web-green-200">
            <div className="space-y-8">
              {/* Hello World Display */}
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-7xl font-bold text-web-green-900 transition-all duration-300 ${
                  isAnimating ? 'scale-110 opacity-50' : 'scale-100 opacity-100'
                }`}>
                  {greeting}
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-web-green-400 to-web-green-600 rounded-full mx-auto"></div>
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

          {/* Tech Stack Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-web-green-800 font-medium border border-web-green-200 shadow-sm">
              React ⚛️
            </span>
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-web-green-800 font-medium border border-web-green-200 shadow-sm">
              Vite ⚡
            </span>
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-web-green-800 font-medium border border-web-green-200 shadow-sm">
              Tailwind 🎨
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
