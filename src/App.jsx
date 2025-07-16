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
      {/* Rainbow Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-green-400 via-blue-500 to-purple-600 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-400 via-pink-500 to-red-500 opacity-50"></div>
      </div>
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          {/* Main Greeting Card */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto border border-white/30">
            <div className="space-y-8">
              {/* Hello World Display */}
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-7xl font-bold text-white transition-all duration-300 ${
                  isAnimating ? 'scale-110 opacity-50' : 'scale-100 opacity-100'
                }`}>
                  {greeting}
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mx-auto"></div>
              </div>

              {/* Generate Button */}
              <div className="flex flex-col items-center space-y-6">
                <button
                  onClick={generateGreeting}
                  disabled={isAnimating}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isAnimating ? 'Generating...' : 'Generate Greeting'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </button>

                {/* Decorative Elements */}
                <div className="flex space-x-4">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </div>

              {/* Info Text */}
              <p className="text-white/80 text-lg">
                Click the button to generate a new greeting message!
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
              React ⚛️
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
              Vite ⚡
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
              Tailwind 🎨
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
