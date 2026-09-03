import { useState, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gallery } from '../data/content'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'
import TextMask from './common/TextMask'

const spanClasses = ['row-span-2', 'row-span-1', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1', 'row-span-1', 'row-span-2']

// Individual gallery card with tilt + like + shimmer
function GalleryCard({ img, index, onClick }) {
  const [likes, setLikes] = useState(img.likes || 0)
  const [liked, setLiked] = useState(false)
  const [heartAnim, setHeartAnim] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleLike = (e) => {
    e.stopPropagation()
    if (liked) {
      setLiked(false)
      setLikes((l) => l - 1)
    } else {
      setLiked(true)
      setLikes((l) => l + 1)
      setHeartAnim(true)
      setTimeout(() => setHeartAnim(false), 700)
    }
  }

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    setTilt({ x, y })
  }, [])

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <Reveal
      type="scale"
      delay={(index % 3) * 0.08}
      className={`${spanClasses[index % spanClasses.length]} overflow-hidden rounded-sm cursor-pointer group relative`}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative"
        style={{
          transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 0.12s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={() => onClick(index)}
          className="w-full h-full block relative overflow-hidden"
          aria-label={`View ${img.alt}`}
        >
          <ImageWithFallback
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
          {/* Shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {/* Dark gradient on hover for caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {/* Caption on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
            <p className="text-cream text-xs font-body">{img.alt}</p>
          </div>
          {/* Click ripple expand icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <div className="w-10 h-10 rounded-full border-2 border-cream/60 flex items-center justify-center backdrop-blur-sm bg-ink/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h7V1H1v9h2V3zm11-2v2h7v7h2V1h-9zM3 14H1v9h9v-2H3v-7zm18 7h-7v2h9v-9h-2v7z" fill="white"/>
              </svg>
            </div>
          </div>
        </button>

        {/* Like button */}
        <button
          onClick={handleLike}
          aria-label={liked ? 'Unlike' : 'Like'}
          className="absolute top-3 right-3 flex items-center gap-1.5 bg-ink/50 backdrop-blur-sm rounded-full px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-ink/70 z-10"
        >
          <span
            className={`text-sm leading-none ${heartAnim ? 'heart-liked' : ''} ${liked ? 'text-red-400' : 'text-cream/70'}`}
            style={{ display: 'inline-block' }}
          >
            {liked ? '♥' : '♡'}
          </span>
          <span className="text-cream/80 text-xs font-body">{likes}</span>
        </button>
      </div>
    </Reveal>
  )
}

export default function Gallery() {
  const [open, setOpen] = useState(null)

  const goNext = (e) => {
    e.stopPropagation()
    setOpen((i) => (i + 1) % gallery.length)
  }
  const goPrev = (e) => {
    e.stopPropagation()
    setOpen((i) => (i - 1 + gallery.length) % gallery.length)
  }

  return (
    <section id="gallery" className="bg-parchment py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <Reveal type="fade">
            <span className="section-label">Journal</span>
          </Reveal>
          <TextMask delay={0.12}>
            <h2 className="font-display text-display-lg text-ink mt-4">A few mornings at the nest.</h2>
          </TextMask>
          <Reveal delay={0.2}>
            <p className="mt-4 text-ink/55 text-sm leading-relaxed">
              Click any image to explore. Heart the ones you love.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[180px] lg:auto-rows-[220px] gap-4">
          {gallery.map((img, i) => (
            <GalleryCard key={img.src} img={img} index={i} onClick={setOpen} />
          ))}
        </div>
      </div>

      {/* Lightbox with prev/next navigation */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/96 flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpen(null)}
          >
            {/* Image frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ scale: 0.88, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative gold frame corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br" />

                <ImageWithFallback
                  src={gallery[open].src}
                  alt={gallery[open].alt}
                  className="w-full max-h-[75vh] object-contain rounded-sm"
                />
                <div className="flex items-center justify-between mt-4">
                  <p className="text-cream/60 text-sm">{gallery[open].alt}</p>
                  <span className="text-cream/30 text-xs">{open + 1} / {gallery.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur border border-cream/20 flex items-center justify-center text-cream hover:bg-gold/30 hover:border-gold/50 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={goNext}
              aria-label="Next"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur border border-cream/20 flex items-center justify-center text-cream hover:bg-gold/30 hover:border-gold/50 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Close button */}
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/10 backdrop-blur flex items-center justify-center text-cream text-lg hover:bg-gold/30 transition-all"
            >
              ✕
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setOpen(i) }}
                  className={`rounded-full transition-all duration-300 ${i === open ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-cream/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
