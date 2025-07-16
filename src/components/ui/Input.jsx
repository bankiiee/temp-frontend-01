import PropTypes from 'prop-types'

/**
 * Reusable Input Component with Glass Effect
 * Supports various input types with consistent styling
 */
const Input = ({ 
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  className = '',
  ...props 
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-web-green-800"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30"></div>
        
        {/* Input Field */}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            relative z-10 w-full px-4 py-3 bg-transparent border-0 rounded-xl 
            text-web-green-900 placeholder-web-green-600 
            focus:outline-none focus:ring-2 focus:ring-web-green-400 focus:ring-opacity-50 
            transition-all duration-200
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${error ? 'ring-2 ring-red-400' : ''}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string
}

export default Input
