import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function MediaPreviewModal({ isOpen, onClose, media }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    // Lock background scroll
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalStyle
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && media && (
        <motion.div
          key="media-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/92 backdrop-blur-md cursor-pointer select-none"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-2xl transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.button>

          {/* Media Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[92vw] md:max-w-[88vw] lg:max-w-[84vw] max-h-[85vh] md:max-h-[82vh] flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {media.type === 'video' ? (
              <video
                src={media.src}
                autoPlay
                controls
                playsInline
                className="max-w-full max-h-[75vh] md:max-h-[78vh] lg:max-h-[80vh] w-auto h-auto rounded-xl sm:rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] object-contain bg-black"
              />
            ) : (
              <img
                src={media.src}
                alt={media.title || 'Preview'}
                className="max-w-full max-h-[75vh] md:max-h-[78vh] lg:max-h-[80vh] w-auto h-auto rounded-xl sm:rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] object-contain"
              />
            )}

            {/* Optional Title Badge */}
            {media.title && (
              <div className="mt-3 px-4 py-1 rounded-full bg-black/60 border border-white/10 text-white/90 text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-wide shadow-lg">
                {media.title}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
