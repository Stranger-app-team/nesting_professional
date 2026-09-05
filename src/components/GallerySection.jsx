import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'

// Automatically load all images from src/assets/gallery/ dynamically
const galleryModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}', {
  eager: true,
  import: 'default',
})

// Convert to an array of photo objects with paths
const photos = Object.entries(galleryModules).map(([path, src], index) => {
  const filename = path.split('/').pop().replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
  return {
    src,
    alt: `Chidiya Ghar - ${filename || `Moment ${index + 1}`}`,
  }
})

export default function GallerySection() {
  const [open, setOpen] = useState(null)
  // Default active image is the center item
  const defaultIndex = Math.max(0, Math.floor(photos.length / 2))
  const [hoveredIndex, setHoveredIndex] = useState(defaultIndex)

  const goNext = (e) => { e.stopPropagation(); setOpen((i) => (i + 1) % photos.length) }
  const goPrev = (e) => { e.stopPropagation(); setOpen((i) => (i - 1 + photos.length) % photos.length) }

  return (
    <section id="gallery" style={{ backgroundColor: '#2A1205' }} className="pt-6 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-12">
          <Reveal type="fade">
            <p className="text-[12px] font-bold tracking-[0.22em] text-[#C9A06A] uppercase mb-3">
              Gallery
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-[28px] lg:text-[36px] font-normal text-white"
             
            >
              Moments at Chidiya Ghar
            </h2>
          </Reveal>
        </div>

        {/* Interactive sliding accordion photo strip (butter-smooth GPU transitions) */}
        <div 
          className="flex items-center gap-2.5 lg:gap-3.5 mb-10 w-full h-[280px] sm:h-[340px] lg:h-[400px]"
          onMouseLeave={() => setHoveredIndex(defaultIndex)}
        >
          {photos.map((photo, i) => {
            const isHovered = (hoveredIndex ?? defaultIndex) === i

            return (
              <div
                key={photo.src}
                onClick={() => setOpen(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                className="relative overflow-hidden cursor-pointer rounded-[20px] p-1.5 bg-white h-full select-none"
                style={{
                  flex: isHovered ? 3.2 : 1,
                  transform: isHovered ? 'scale(1.02)' : 'scale(0.96)',
                  zIndex: isHovered ? 20 : 1,
                  opacity: isHovered ? 1 : 0.88,
                  transition: 'flex 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
                  boxShadow: isHovered
                    ? '0 25px 50px -10px rgba(0, 0, 0, 0.22), 0 10px 24px -4px rgba(123, 45, 22, 0.15)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
                  willChange: 'flex, transform',
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${photo.alt}`}
              >
                <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-105' : 'scale-100'
                    } rounded-[14px]`}
                  />
                  {/* Subtle hover overlay and indicator */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 rounded-[14px] flex items-end p-4 ${
                      isHovered ? 'bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span
                      className={`text-white text-xs font-medium tracking-wide bg-black/50 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20 transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      Click to Expand
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Photos button — opens lightbox */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => setOpen(0)}
            whileHover={{ backgroundColor: '#C9A06A', color: '#1a1a1a' }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#C9A06A] text-[#C9A06A] font-semibold text-[14px] px-9 py-3 rounded-md transition-colors duration-200 tracking-wide cursor-pointer uppercase"
          >
            View More Photos
          </motion.button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setOpen(null)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl w-full relative bg-neutral-900/60 p-4 rounded-[20px] backdrop-blur-sm border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gold frame corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#7B2D16]/60 rounded-tl" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#7B2D16]/60 rounded-tr" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#7B2D16]/60 rounded-bl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#7B2D16]/60 rounded-br" />

                <ImageWithFallback
                  src={photos[open].src}
                  alt={photos[open].alt}
                  className="w-full max-h-[75vh] object-contain rounded-[12px]"
                />
                <div className="flex items-center justify-between mt-3">
                  <p className="text-white/60 text-sm">{photos[open].alt}</p>
                  <span className="text-white/30 text-xs">{open + 1} / {photos.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={goPrev} aria-label="Previous" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-[#7B2D16]/50 transition-all duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button onClick={goNext} aria-label="Next" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-[#7B2D16]/50 transition-all duration-200">
              <svg width="9" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white text-lg hover:bg-[#7B2D16]/50 transition-all">✕</button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setOpen(i) }} className={`rounded-full transition-all duration-300 ${i === open ? 'w-6 h-1.5 bg-[#7B2D16]' : 'w-1.5 h-1.5 bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
