import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, X } from 'lucide-react'

export default function FloatingInquiry() {
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    checkIn: '',
    checkOut: '',
    rooms: '1 Room',
    persons: '2 Persons'
  })

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail) {
        setFormData(prev => ({
          ...prev,
          checkIn: e.detail.checkIn || prev.checkIn,
          checkOut: e.detail.checkOut || prev.checkOut,
          persons: e.detail.persons || prev.persons
        }))
      }
      setIsOpen(true)
    }
    window.addEventListener('openInquiry', handleOpen)
    return () => window.removeEventListener('openInquiry', handleOpen)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Normally you'd send this data to an API, Email service, or WhatsApp
    console.log("Inquiry submitted", formData)
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-16 h-16 bg-[#7B2D16] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#C9A06A] transition-colors duration-300"
        aria-label="Book a room inquiry"
      >
        <CalendarDays className="w-7 h-7" />
        
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#7B2D16] animate-ping opacity-20"></span>
      </motion.button>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ transformOrigin: 'bottom right' }}
              className="fixed bottom-28 right-6 lg:bottom-32 lg:right-10 w-[calc(100vw-3rem)] max-w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[100] flex flex-col max-h-[80vh]"
            >
              {/* Header */}
              <div className="bg-[#2A1205] p-6 text-center relative">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="font-display text-2xl text-white mb-2">Plan Your Stay</h3>
                <p className="text-[#C9A06A] text-sm font-medium tracking-wider uppercase">Check Availability</p>
              </div>

              {/* Form */}
              <div className="p-6 overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Mobile */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-bold mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name"
                        className="w-full bg-[#FAF6F1] border border-[#E5DFD3] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#7B2D16] transition-colors text-[#1a1a1a]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-bold mb-1.5">Mobile Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                        placeholder="Enter your mobile number"
                        className="w-full bg-[#FAF6F1] border border-[#E5DFD3] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#7B2D16] transition-colors text-[#1a1a1a]"
                      />
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-bold mb-1.5">Check In</label>
                      <input 
                        type="date" 
                        required 
                        value={formData.checkIn}
                        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                        className="w-full bg-[#FAF6F1] border border-[#E5DFD3] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7B2D16] transition-colors text-[#1a1a1a]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-bold mb-1.5">Check Out</label>
                      <input 
                        type="date" 
                        required 
                        value={formData.checkOut}
                        onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                        className="w-full bg-[#FAF6F1] border border-[#E5DFD3] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7B2D16] transition-colors text-[#1a1a1a]"
                      />
                    </div>
                  </div>

                  {/* Rooms & Persons */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-bold mb-1.5">No. of Rooms</label>
                      <select 
                        value={formData.rooms}
                        onChange={(e) => setFormData({...formData, rooms: e.target.value})}
                        className="w-full bg-[#FAF6F1] border border-[#E5DFD3] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7B2D16] transition-colors text-[#1a1a1a]">
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3 Rooms</option>
                        <option>4+ Rooms</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-bold mb-1.5">No. of Persons</label>
                      <select 
                        value={formData.persons}
                        onChange={(e) => setFormData({...formData, persons: e.target.value})}
                        className="w-full bg-[#FAF6F1] border border-[#E5DFD3] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7B2D16] transition-colors text-[#1a1a1a]">
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                        <option>5+ Persons</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-[#7B2D16] text-white font-bold py-3.5 rounded-lg hover:bg-[#C9A06A] transition-colors duration-300 uppercase tracking-wide text-sm"
                    >
                      Send Inquiry
                    </button>
                    <p className="text-center text-[#666] text-xs mt-3">
                      We will get back to you within 24 hours to confirm availability.
                    </p>
                  </div>

                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
