import { useState } from 'react'
import PropTypes from 'prop-types'
import { GlassCard, Button } from '../ui'

/**
 * Features Carousel Component
 * Interactive feature showcase with smooth transitions
 */
const FeaturesCarousel = ({ features = [] }) => {
  const [currentFeature, setCurrentFeature] = useState(0)

  if (features.length === 0) return null

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  const feature = features[currentFeature]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Powerful Features for Modern Business
        </h2>
        <p className="text-xl text-gray-600">
          Everything you need to streamline your operations
        </p>
      </div>

      <GlassCard className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Feature Content */}
          <div className="space-y-6">
            {/* Feature Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-web-green-500 to-web-green-700 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">{feature.icon}</span>
            </div>
            
            {/* Feature Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Feature Benefits */}
              <ul className="space-y-3">
                {feature.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Visual/Stats */}
          <div className="bg-gradient-to-br from-web-green-50 to-web-green-100 rounded-2xl p-8 text-center">
            {feature.metric && (
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-web-green-700 mb-2">
                  {feature.metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {feature.metric.label}
                </div>
              </div>
            )}
            
            {/* Visual representation placeholder */}
            <div className="w-full h-32 bg-white rounded-xl shadow-inner flex items-center justify-center">
              <span className="text-6xl opacity-20">{feature.icon}</span>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/20">
          <Button variant="ghost" onClick={prevFeature}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </Button>
          
          {/* Feature Indicators */}
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentFeature 
                    ? 'bg-web-green-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
          
          <Button variant="ghost" onClick={nextFeature}>
            Next
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </GlassCard>
    </section>
  )
}

FeaturesCarousel.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string),
    metric: PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  }))
}

export default FeaturesCarousel
