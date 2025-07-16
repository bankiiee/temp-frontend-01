import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { Logo, Button, GlassCard } from '../ui'

/**
 * Footer Component
 * Professional footer with company info and navigation
 */
const Footer = ({ 
  companyName = "StockFlow Pro",
  description = "Professional ERP solution for SMEs. Streamline inventory, boost efficiency, and scale your business with confidence.",
  showNewsletter = true 
}) => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Demo", href: "/demo" },
        { label: "API", href: "/api" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Documentation", href: "/docs" },
        { label: "Status", href: "/status" },
        { label: "Security", href: "/security" }
      ]
    }
  ]

  return (
    <footer className="relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <GlassCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <Logo size="large" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-web-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-web-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-web-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-gray-800">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="text-gray-600 hover:text-web-green-600 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          {showNewsletter && (
            <div className="border-t border-white/20 pt-8 mb-8">
              <div className="max-w-md">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest product updates and business insights.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent text-sm"
                  />
                  <Button variant="primary" size="small">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              © {currentYear} {companyName}. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-web-green-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-web-green-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-web-green-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  companyName: PropTypes.string,
  description: PropTypes.string,
  showNewsletter: PropTypes.bool
}

export default Footer
