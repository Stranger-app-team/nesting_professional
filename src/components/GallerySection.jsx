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
  // Default active image is the center item
  const defaultIndex = Math.max(0, Math.floor(photos.length / 2))
  const [hoveredIndex, setHoveredIndex] = useState(defaultIndex)

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

        {/* Mobile Animated Scrolling Gallery (Spotlight Carousel) */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pt-4 hide-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ scale: 0.88, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ margin: "-20% 0px -20% 0px", amount: 0.6 }}
              className="relative shrink-0 w-[75vw] sm:w-[320px] h-[300px] sm:h-[360px] rounded-[20px] p-2.5 sm:p-3 bg-[#1A0A04]/40 border border-[#C9A06A]/20 snap-center shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]"
            >
              {/* Gold frame corner accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-tl-md" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-tr-md" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-bl-md" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-br-md" />

              <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Interactive sliding accordion photo strip (butter-smooth GPU transitions) */}
        <div 
          className="hidden lg:flex items-center gap-3.5 mb-10 w-full h-[400px]"
          onMouseLeave={() => setHoveredIndex(defaultIndex)}
        >
          {photos.map((photo, i) => {
            const isHovered = (hoveredIndex ?? defaultIndex) === i

            return (
              <div
                key={photo.src}
                onMouseEnter={() => setHoveredIndex(i)}
                className="relative rounded-[20px] p-2.5 bg-[#1A0A04]/40 border border-[#C9A06A]/20 h-full select-none"
                style={{
                  flex: isHovered ? 3.2 : 1,
                  transform: isHovered ? 'scale(1.02)' : 'scale(0.96)',
                  zIndex: isHovered ? 20 : 1,
                  opacity: isHovered ? 1 : 0.88,
                  transition: 'flex 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
                  boxShadow: isHovered
                    ? '0 25px 50px -10px rgba(0, 0, 0, 0.4)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                  willChange: 'flex, transform',
                }}
                aria-label={`View ${photo.alt}`}
              >
                {/* Gold frame corner accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-tl-md transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0.4 }} />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-tr-md transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0.4 }} />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-bl-md transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0.4 }} />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-br-md transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0.4 }} />

                <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-105' : 'scale-100'
                    } rounded-[14px]`}
                  />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
