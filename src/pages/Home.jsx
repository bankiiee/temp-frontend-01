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
    <LiquidGlassBackground>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="ERP Made Simple for Growing SMEs"
        subtitle="StockFlow Pro"
        description="Transform your business operations with our intuitive ERP solution. Manage inventory, optimize logistics, and boost efficiency in one powerful platform designed specifically for small and medium enterprises."
        primaryAction={{
          label: "Get Started Free",
          onClick: handleGetStarted
        }}
        secondaryAction={{
          label: "Watch Demo",
          onClick: handleWatchDemo
        }}
        stats={[
          { value: "70%", label: "Cost Reduction vs Traditional ERP" },
          { value: "60%", label: "Faster Order Processing" },
          { value: "99%", label: "Inventory Accuracy" }
        ]}
      />

      {/* Features Section */}
      <FeaturesCarousel features={FEATURES} />

      {/* Stats Section */}
      <StatsSection 
        title="Trusted by Growing Businesses"
        subtitle="Join thousands of SMEs already transforming their operations"
        stats={STATS}
      />

      {/* Footer */}
      <Footer />
    </LiquidGlassBackground>
  )
}

export default Home
