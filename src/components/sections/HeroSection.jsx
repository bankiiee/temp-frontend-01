import PropTypes from 'prop-types'
import { Button, GlassCard } from '../ui'

/**
 * Hero Section Component
 * Professional hero section with main value proposition
 */
const HeroSection = ({ 
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  stats = []
}) => {
  return (
    <section className="relative z-10 text-center max-w-7xl mx-auto px-6 py-16">
      <GlassCard className="p-12">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-web-green-800 mb-8">
          {subtitle}
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {primaryAction && (
            <Button
              variant="primary"
              size="large"
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
          
          {secondaryAction && (
            <Button
              variant="secondary"
              size="large"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
        
        {/* Stats Section */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-web-green-700">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </section>
  )
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  stats: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
}

export default HeroSection
