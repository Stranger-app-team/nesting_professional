import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'
import gal1 from '../assets/image/gal-1.png'
import gal2 from '../assets/image/gal-2.png'
import gal3 from '../assets/image/gal-3.png'
import gal4 from '../assets/image/gal-4.png'
import gal5 from '../assets/image/gal-5.png'

// Reference image shows 5 photos in a row with the MIDDLE photo taller
// Photos: lounge, restaurant, food/momos, outdoor lights, bedroom
const photos = [
  { src: gal1, alt: 'Chidiya Ghar lounge area',    tall: false },
  { src: gal2, alt: 'Restaurant dining room',       tall: false },
  { src: gal3, alt: 'Signature cuisine',            tall: true  }, // middle photo is taller
  { src: gal4, alt: 'Outdoor ambiance at night',    tall: false },
  { src: gal5, alt: 'Luxury suite bedroom',         tall: false },
]

export default function GallerySection() {
  const [open, setOpen] = useState(null)

  const goNext = (e) => { e.stopPropagation(); setOpen((i) => (i + 1) % photos.length) }
  const goPrev = (e) => { e.stopPropagation(); setOpen((i) => (i - 1 + photos.length) % photos.length) }

  return (
    <section id="gallery" style={{ backgroundColor: '#FAF6F1' }} className="pt-12 pb-14">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Section heading */}
        <div className="text-center mb-8">
          <Reveal type="fade">
            <p className="text-[11px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-3">
              Gallery
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-[28px] lg:text-[34px] font-normal text-[#1a1a1a]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              Moments at Chidiya Ghar
            </h2>
          </Reveal>
        </div>

        {/* 5-column photo strip — middle photo taller */}
        <div className="flex items-end gap-3 mb-8">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden flex-1 cursor-pointer group ${photo.tall ? 'h-56 lg:h-64' : 'h-44 lg:h-52'}`}
              aria-label={`View ${photo.alt}`}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#7B2D16]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </div>

        {/* View More Photos button */}
        <div className="flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#7B2D16] text-white font-semibold text-[13px] px-8 py-[11px] rounded-md transition-colors duration-200 tracking-wide"
          >
            View More Photos
          </motion.a>
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
                className="max-w-4xl w-full relative"
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
                  className="w-full max-h-[75vh] object-contain rounded-lg"
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
