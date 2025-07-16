import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { Logo, Button, GlassCard } from '../ui'
import { NAV_ITEMS } from '../../constants'

/**
 * Navigation Component with Glass Effect
 * Responsive navigation with professional styling
 */
const Navigation = ({ variant = 'default' }) => {
  return (
    <nav className="relative z-20 p-6">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <Logo size="medium" />
        
        {/* Navigation Links */}
        <GlassCard variant="light" padding="none" className="hidden md:block">
          <div className="flex items-center space-x-6 px-6 py-3">
            {NAV_ITEMS.map((item) => (
              item.isPrimary ? (
                <Button
                  key={item.id}
                  as={Link}
                  to={item.href}
                  variant="primary"
                  size="small"
                >
                  {item.label}
                </Button>
              ) : (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-web-green-700 hover:text-web-green-900 font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </GlassCard>

        {/* Mobile Menu Button - Future Implementation */}
        <div className="md:hidden">
          <Button variant="ghost" size="small">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  variant: PropTypes.oneOf(['default', 'transparent'])
}

export default Navigation
