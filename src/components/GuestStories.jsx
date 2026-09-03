import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { guestStories } from '../data/content'
import Reveal from './common/Reveal'
import TextMask from './common/TextMask'

const GUEST_TYPE_ICONS = {
  'The Athlete': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="4" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="19" y="9" width="4" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  'The Family': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 18 C5 14, 6.8 13, 9 13 C11.2 13, 13 14, 13 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 16 C13.2 13.5, 14.5 12.5, 16 12.5 C17.8 12.5, 19 13.5, 19 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  'The Professional': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7 C8 4.8, 9.8 3, 12 3 C14.2 3, 16 4.8, 16 7" stroke="currentColor" strokeWidth="1.4" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  'The Nomad': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 12 C5 10, 9 8, 12 12 C15 16, 19 14, 22 12" stroke="currentColor" strokeWidth="1.2" />
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  'The Wellness Seeker': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 C12 3, 6 8, 6 13 C6 16.3, 8.7 19, 12 19 C15.3 19, 18 16.3, 18 13 C18 8, 12 3, 12 3Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7 L12 15 M9 11 L15 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  'The Team': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 18 C4 15, 5.8 14, 8 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M20 18 C20 15, 18.2 14, 16 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 18 C8 15.2, 9.8 14.5, 12 14.5 C14.2 14.5, 16 15.2, 16 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
}

function StoryCard({ story, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="story-card w-[82vw] sm:w-[50vw] lg:w-[34vw] xl:w-[28vw] shrink-0"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="relative h-[460px] rounded overflow-hidden cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background image */}
        <img
          src={story.image}
          alt={story.tag}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.style.backgroundColor = story.color
            e.target.style.display = 'none'
            e.target.parentElement.style.backgroundColor = story.color
          }}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#29180b] via-[#29180b]/40 to-transparent" />

        {/* Color tinted top strip on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{ background: `linear-gradient(to bottom, ${story.color}50, transparent 60%)` }}
            />
          )}
        </AnimatePresence>

        {/* Tag pill */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{ borderColor: `${story.color}80`, color: '#D8B876', backgroundColor: 'rgba(18,32,28,0.7)', backdropFilter: 'blur(6px)' }}
          >
            <span className="text-goldSoft" style={{ color: '#D8B876' }}>
              {GUEST_TYPE_ICONS[story.tag]}
            </span>
            {story.tag}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Quote */}
          <motion.p
            className="font-display text-xl text-cream leading-snug mb-3"
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.4 }}
          >
            "{story.quote}"
          </motion.p>

          {/* Detail line */}
          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.35 }}
                className="text-cream/55 text-sm mb-2"
              >
                {story.detail}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <span className="text-goldSoft text-sm font-semibold">{story.name}</span>
            {/* Animated arrow */}
            <motion.span
              className="text-gold text-lg"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function GuestStories() {
  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragLimit, setDragLimit] = useState(-2000)

  useEffect(() => {
    const calcConstraints = () => {
      if (trackRef.current) {
        const scrollW = trackRef.current.scrollWidth
        const clientW = trackRef.current.clientWidth
        const maxScroll = Math.max(0, scrollW - clientW + 80)
        setDragLimit(-maxScroll)
      }
    }

    calcConstraints()
    const timer = setTimeout(calcConstraints, 300)
    const timer2 = setTimeout(calcConstraints, 1000)
    window.addEventListener('resize', calcConstraints)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      window.removeEventListener('resize', calcConstraints)
    }
  }, [])

  return (
    <section id="guest-stories" className="bg-parchment py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal type="fade">
              <span className="section-label">Guest Stories</span>
            </Reveal>
            <TextMask delay={0.1}>
              <h2 className="font-display text-display-lg text-ink mt-4">
                Not one type of guest. Every kind.
              </h2>
            </TextMask>
            <Reveal delay={0.15}>
              <p className="text-ink/70 text-base mt-4 leading-relaxed max-w-xl">
                Athletes, families, remote teams, solo wanderers — they all land here for the same reason: rest that actually works.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink/5 border border-ink/15 text-ink/70 text-xs font-semibold tracking-wider hover:border-gold/50 transition-colors">
              <span className="text-gold">←</span>
              <span>Drag sideways to explore stories</span>
              <span className="text-gold">→</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <motion.div
        ref={trackRef}
        className="story-track flex gap-5 px-6 lg:px-10 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-none select-none"
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        dragElastic={0.06}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {guestStories.map((story, i) => (
          <StoryCard key={story.id} story={story} index={i} />
        ))}

        {/* End CTA card — same width as story cards so it appears complete */}
        <div className="story-card w-[82vw] sm:w-[50vw] lg:w-[34vw] xl:w-[28vw] shrink-0 flex items-center justify-center">
          <div className="border border-ink/20 rounded p-8 text-center h-[460px] flex flex-col items-center justify-center gap-4 w-full">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M2 13c4-6 8-7 10-4 2-3 6-4 10 1-3 1-6 0-8-1 1 2 1 4-1 6-1-2-1-4-2-5-1 3-3 5-6 5 1-1 2-2 2-3-2 1-4 2-5 1Z" fill="#B8863B" opacity="0.6" />
            </svg>
            <h3 className="font-display text-2xl text-ink">Your story next?</h3>
            <p className="text-ink/55 text-sm leading-relaxed">Seven nests. One for whoever you are when you arrive.</p>
            <a
              href="#contact"
              className="mt-2 px-6 py-2.5 bg-gold text-ink text-sm font-semibold rounded-full hover:bg-goldSoft transition-colors"
            >
              Reserve a nest
            </a>
          </div>
        </div>
        {/* End buffer */}
        <div className="shrink-0 w-6 lg:w-10 pointer-events-none" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
