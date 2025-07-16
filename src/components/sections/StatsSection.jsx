import PropTypes from 'prop-types'
import { GlassCard } from '../ui'

/**
 * Stats Section Component
 * Professional statistics display with glass cards
 */
const StatsSection = ({ stats = [], title, subtitle }) => {
  if (stats.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <GlassCard key={index} className="text-center p-8 hover:scale-105 transition-transform duration-300">
            {/* Stat Icon */}
            {stat.icon && (
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-web-green-500 to-web-green-700 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white">{stat.icon}</span>
              </div>
            )}
            
            {/* Stat Value */}
            <div className="text-3xl md:text-4xl font-bold text-web-green-700 mb-2">
              {stat.value}
            </div>
            
            {/* Stat Label */}
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
            
            {/* Stat Description */}
            {stat.description && (
              <p className="text-sm text-gray-500 mt-2">
                {stat.description}
              </p>
            )}
          </GlassCard>
        ))}
      </div>
      
      {/* Additional Context */}
      <div className="text-center mt-12">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of businesses already using our platform to streamline their operations and boost productivity.
        </p>
      </div>
    </section>
  )
}

StatsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.string
  }))
}

export default StatsSection
