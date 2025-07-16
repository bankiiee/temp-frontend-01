import PropTypes from 'prop-types'

/**
 * Reusable Button Component with Glass Effect
 * Supports primary, secondary, and ghost variants
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  onClick,
  className = '',
  as = 'button',
  ...props 
}) => {
  const baseClasses = 'group relative font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-web-green-400 focus:ring-opacity-50'
  
  const variants = {
    primary: 'bg-gradient-to-r from-web-green-600 to-web-green-700 hover:from-web-green-700 hover:to-web-green-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/20 backdrop-blur-sm border-2 border-web-green-600 text-web-green-800 hover:bg-white/30',
    ghost: 'text-web-green-700 hover:text-web-green-900 hover:bg-white/10'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm rounded-lg',
    medium: 'px-6 py-3 text-base rounded-xl',
    large: 'px-8 py-4 text-xl rounded-full'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none' : 'hover:scale-105'
  
  const Component = as
  
  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : children}
      </span>
      {variant === 'primary' && !disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-web-green-400 to-web-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
      )}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  as: PropTypes.elementType
}

export default Button
