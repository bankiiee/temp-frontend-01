import PropTypes from 'prop-types'

/**
 * Liquid Glass Background Component
 * Consistent background styling across pages
 */
const LiquidGlassBackground = ({ variant = 'default' }) => {
  const variants = {
    default: 'from-web-green-50 via-web-green-100 to-web-green-200',
    light: 'from-web-green-25 via-web-green-50 to-web-green-100',
    dark: 'from-web-green-100 via-web-green-200 to-web-green-300'
  }

  return (
    <>
      {/* Main Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]}`}>
        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/30 to-web-green-200/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-web-green-300/30 to-white/20 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-web-green-100/40 to-web-green-400/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-web-green-200/30 to-white/30 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-white/40 to-web-green-300/20 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-web-green-200/20 backdrop-blur-[1px]"></div>
      
      {/* Additional Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-web-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-web-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-web-green-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>
    </>
  )
}

LiquidGlassBackground.propTypes = {
  variant: PropTypes.oneOf(['default', 'light', 'dark'])
}

export default LiquidGlassBackground
