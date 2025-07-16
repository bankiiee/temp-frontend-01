import PropTypes from 'prop-types'

/**
 * Reusable Logo Component
 * Consistent branding across the application
 */
const Logo = ({ size = 'medium', showText = true, className = '' }) => {
  const sizes = {
    small: { container: 'w-8 h-8', text: 'text-base', tagline: 'text-xs' },
    medium: { container: 'w-10 h-10', text: 'text-xl', tagline: 'text-xs' },
    large: { container: 'w-12 h-12', text: 'text-2xl', tagline: 'text-sm' }
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizes[size].container} bg-gradient-to-br from-web-green-500 to-web-green-600 rounded-xl flex items-center justify-center shadow-lg`}>
        <span className={`text-white font-bold ${sizes[size].text}`}>SF</span>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div>
          <h1 className={`text-web-green-900 font-bold ${sizes[size].text}`}>StockFlow Pro</h1>
          <p className={`text-web-green-600 ${sizes[size].tagline}`}>ERP for SMEs</p>
        </div>
      )}
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showText: PropTypes.bool,
  className: PropTypes.string
}

export default Logo
