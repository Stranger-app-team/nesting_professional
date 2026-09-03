import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/content'
import Reveal from './common/Reveal'
import ImageWithFallback from './common/ImageWithFallback'

// Large decorative quote mark SVG
function QuoteMark() {
  return (
    <svg width="40" height="30" viewBox="0 0 34 26" fill="none" className="mx-auto mb-8">
      <path
        d="M0 26V15.6C0 6.4 5.4 1 13 0v6.4C8.8 7.6 6.8 10 6.8 14h6.2V26H0Zm18.8 0V15.6C18.8 6.4 24.2 1 31.8 0v6.4c-4.2 1.2-6.2 3.6-6.2 7.6h6.2V26H18.8Z"
        fill="#B8863B"
      />
    </svg>
  )
}

// Individual star rating
function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#B8863B" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="bg-[#29180b] py-28 lg:py-36 relative overflow-hidden">
      <div className="grain-overlay" />

      {/* Decorative large faint bird silhouettes */}
      <div className="absolute top-8 left-0 opacity-5 pointer-events-none">
        <svg width="300" height="120" viewBox="0 0 300 120" fill="none">
          <path d="M10 70 C60 5, 120 0, 150 40 C180 0, 240 8, 290 70 C220 88, 170 45, 150 55 C130 45, 80 88, 10 70Z" fill="#F6F1E4" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-0 opacity-5 pointer-events-none rotate-12">
        <svg width="250" height="100" viewBox="0 0 300 120" fill="none">
          <path d="M10 70 C60 5, 120 0, 150 40 C180 0, 240 8, 290 70 C220 88, 170 45, 150 55 C130 45, 80 88, 10 70Z" fill="#D8B876" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <Reveal type="fade">
          <QuoteMark />
        </Reveal>

        {/* Quote */}
        <div className="min-h-[10rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Stars />
              <blockquote className="font-display text-2xl lg:text-3xl text-cream leading-snug mb-6">
                "{t.quote}"
              </blockquote>

              {/* Avatar + attribution */}
              <div className="flex items-center justify-center gap-3">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold/40"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                )}
                <footer className="text-sm text-ink/55 font-body not-italic text-left">
                  <span className="block text-goldSoft font-semibold">{t.name}</span>
                  <span className="text-cream/40 text-xs">{t.role}</span>
                </footer>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot controls */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-400 ${
                i === active ? 'w-8 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-cream/20 hover:bg-cream/40'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {testimonials.map((test, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                i === active ? 'border-gold scale-110' : 'border-cream/20 scale-100 opacity-50 hover:opacity-80'
              }`}
              aria-label={`Show ${test.name}`}
            >
              {test.avatar ? (
                <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none' }} />
              ) : (
                <div className="w-full h-full bg-gold/20 flex items-center justify-center text-gold text-xs">
                  {test.name[0]}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
