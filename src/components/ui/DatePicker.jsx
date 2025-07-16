import { useState, useMemo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * DatePicker Component
 * Professional date picker with calendar popup
 */
const DatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Select date",
  className = "",
  name,
  required = false,
  error = "",
  ...props 
}) => {
  const [selectedDate, setSelectedDate] = useState(value || null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const calendarRef = useRef(null)

  const formattedDate = useMemo(() => {
    return selectedDate ? selectedDate.toLocaleDateString() : ''
  }, [selectedDate])

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

  const calendarDays = useMemo(() => {
    const days = []
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay()
    
    // Previous month days
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1)
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      })
    }
    
    // Current month days
    const thisMonthDays = daysInMonth(currentYear, currentMonth)
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ 
        date: new Date(currentYear, currentMonth, i), 
        otherMonth: false 
      })
    }
    
    // Next month days (fill to 6 weeks grid)
    const nextDays = 42 - days.length
    for (let i = 1; i <= nextDays; i++) {
      days.push({ 
        date: new Date(currentYear, currentMonth + 1, i), 
        otherMonth: true 
      })
    }
    
    return days
  }, [currentYear, currentMonth])

  const currentMonthName = useMemo(() => {
    return new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })
  }, [currentYear, currentMonth])

  const toggleCalendar = () => setShowCalendar(!showCalendar)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const selectDate = (day) => {
    if (day.otherMonth) return
    setSelectedDate(day.date)
    setShowCalendar(false)
    if (onChange) {
      const event = {
        target: {
          name,
          value: day.date,
          type: 'date'
        }
      }
      onChange(event)
    }
  }

  const isSelected = (day) => {
    return selectedDate && 
           day.date.toDateString() === selectedDate.toDateString()
  }

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCalendar])

  // Base input classes matching our Input component
  const baseClasses = "relative w-full px-4 py-3 rounded-xl border transition-all duration-200"
  const normalClasses = "border-gray-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent"
  const errorClasses = "border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-300"
  
  const inputClasses = `${baseClasses} ${error ? errorClasses : normalClasses} ${className} cursor-pointer`

  return (
    <div className="relative inline-block w-full">
      {/* Input Field */}
      <input
        type="text"
        name={name}
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder={placeholder}
        required={required}
        className={inputClasses}
        {...props}
      />
      
      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}

      {/* Calendar Popup */}
      {showCalendar && (
        <div 
          ref={calendarRef}
          className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl z-50 p-4 min-w-[280px]"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button 
              type="button"
              onClick={prevMonth} 
              className="p-2 hover:bg-web-green-100 rounded-full transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-semibold text-gray-800">
              {currentMonthName} {currentYear}
            </span>
            <button 
              type="button"
              onClick={nextMonth} 
              className="p-2 hover:bg-web-green-100 rounded-full transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center mb-2">
            {weekdays.map((day) => (
              <span key={day} className="font-semibold text-gray-600 text-sm py-2">
                {day}
              </span>
            ))}
          </div>
          
          {/* Days */}
          <div className="grid grid-cols-7 text-center gap-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                type="button"
                onClick={() => selectDate(day)}
                className={`
                  p-2 text-sm rounded-full transition-all duration-200 
                  ${day.otherMonth 
                    ? 'text-gray-400 cursor-default' 
                    : 'text-gray-700 hover:bg-web-green-100 cursor-pointer'
                  }
                  ${isSelected(day) 
                    ? 'bg-web-green-500 text-white hover:bg-web-green-600' 
                    : ''
                  }
                `}
                disabled={day.otherMonth}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string
}

export default DatePicker
