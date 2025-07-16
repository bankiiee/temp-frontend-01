import { 
  LiquidGlassBackground, 
  Navigation, 
  HeroSection, 
  FeaturesCarousel, 
  StatsSection, 
  Footer 
} from '../components'
import { FEATURES, STATS } from '../constants'

function Home() {
  // Action handlers
  const handleGetStarted = () => {
    console.log('Get Started clicked')
    // Navigate to sign up or demo
  }

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked')
    // Open demo video or navigate to demo page
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
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-web-green-500 to-web-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SF</span>
            </div>
            <div>
              <h1 className="text-web-green-900 font-bold text-xl">StockFlow Pro</h1>
              <p className="text-web-green-600 text-xs">ERP for SMEs</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg"></div>
            <div className="relative z-10 flex items-center space-x-6 px-6 py-3">
              <Link to="#features" className="text-web-green-700 hover:text-web-green-900 font-medium transition-colors duration-200">
                Features
              </Link>
              <Link to="#pricing" className="text-web-green-700 hover:text-web-green-900 font-medium transition-colors duration-200">
                Pricing
              </Link>
              <Link 
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-web-green-600 to-web-green-700 hover:from-web-green-700 hover:to-web-green-800 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center px-8 pt-20 pb-32">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Card with Enhanced Glass Effect */}
          <div className="relative mb-16">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl"></div>
            
            {/* Glass Reflection Effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl"></div>
            
            {/* Hero Content */}
            <div className="relative z-10 p-12">
              <div className="space-y-8">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-web-green-900 leading-tight">
                    ERP Made Simple for
                    <span className="block bg-gradient-to-r from-web-green-600 to-web-green-700 bg-clip-text text-transparent">
                      Growing SMEs
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-web-green-700 max-w-4xl mx-auto leading-relaxed">
                    Streamline your stock management, logistics, and operations with our powerful yet affordable ERP solution. 
                    Built specifically for small and medium enterprises.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-web-green-600 to-web-green-700 hover:from-web-green-700 hover:to-web-green-800 text-white font-bold text-xl rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl">
                    <span className="relative z-10 flex items-center">
                      Start Free Trial
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-web-green-400 to-web-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                  </button>
                  
                  <button className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-web-green-600 text-web-green-800 font-bold text-xl rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-105">
                    <span className="flex items-center">
                      Watch Demo
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm"></div>
                <div className="relative z-10 p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-web-green-900 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-web-green-700 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-xl"></div>
            <div className="relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-web-green-900 mb-4">Powerful Features</h2>
                <p className="text-web-green-700 text-lg">Everything you need to manage your business operations</p>
              </div>
              
              <div className="space-y-6">
                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{features[currentFeature].icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-web-green-900 mb-2">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-web-green-600 text-lg font-medium mb-3">
                      {features[currentFeature].subtitle}
                    </p>
                    <p className="text-web-green-700 max-w-2xl mx-auto">
                      {features[currentFeature].description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={nextFeature}
                    className="px-6 py-3 bg-gradient-to-r from-web-green-600 to-web-green-700 hover:from-web-green-700 hover:to-web-green-800 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
                  >
                    Next Feature
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 mt-16 px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Tech Stack Pills with Glass Effect */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Cloud-Native ☁️', 'AI-Powered 🤖', 'Mobile-First 📱', 'API-Ready 🔗'].map((tech, index) => (
              <div key={tech} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-sm rounded-full border border-white/30 shadow-sm"></div>
                <span className="relative z-10 px-4 py-2 inline-block text-web-green-800 font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="text-center">
            <p className="text-web-green-700 font-medium mb-4">Trusted by 2,000+ SMEs worldwide</p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-web-green-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-web-green-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-3 h-3 bg-web-green-600 rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

