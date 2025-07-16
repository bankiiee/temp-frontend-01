import PropTypes from 'prop-types'

/**
 * Reusable Glass Card Component
 * Provides consistent glassmorphism styling across the application
 */
const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'medium',
  withReflection = true,
  withGlow = false,
  ...props 
}) => {
  const baseClasses = 'relative'
  
  const variants = {
    default: 'bg-gradient-to-br from-white/40 via-white/30 to-web-green-100/20 backdrop-blur-2xl border border-white/30',
    light: 'bg-gradient-to-br from-white/50 via-white/40 to-web-green-50/30 backdrop-blur-xl border border-white/40',
    heavy: 'bg-gradient-to-br from-white/30 via-white/20 to-web-green-200/20 backdrop-blur-3xl border border-white/20'
  }
  
  const shadows = {
    default: 'shadow-xl',
    light: 'shadow-lg',
    heavy: 'shadow-2xl'
  }
  
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-8',
    large: 'p-12'
  }
  
  const roundings = {
    default: 'rounded-3xl',
    light: 'rounded-2xl',
    heavy: 'rounded-3xl'
  }

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {/* Glass Background */}
      <div className={`absolute inset-0 ${variants[variant]} ${roundings[variant]} ${shadows[variant]}`}></div>
      
      {/* Glass Reflection Effect */}
      {withReflection && (
        <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent ${roundings[variant]} rounded-b-none`}></div>
      )}
      
      {/* Inner Glow Effect */}
      {withGlow && (
        <div className={`absolute inset-1 bg-gradient-to-br from-white/10 to-transparent ${roundings[variant]}`}></div>
      )}
      
      {/* Content */}
      <div className={`relative z-10 ${paddings[padding]}`}>
        {children}
      </div>
    </div>
  )
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'light', 'heavy']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  withReflection: PropTypes.bool,
  withGlow: PropTypes.bool
}

export default GlassCard
