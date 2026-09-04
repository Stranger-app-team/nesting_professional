import { motion } from 'framer-motion'
import ImageWithFallback from './common/ImageWithFallback'
import heroImg from '../assets/image/acc-1.png'

/* ────────────────────────────────────────────────────────────
   Bird row SVG — matches reference exactly
──────────────────────────────────────────────────────────── */
function BirdRowSVG() {
  const Bird = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x},${y}) scale(${scale})`} fill="#7B2D16">
      <circle cx="9" cy="4" r="3.2" />
      <path d="M11.5 4 L15 3.5 L11.5 5Z" />
      <path d="M0 10 C2 4 6 2 9 7 C12 2 16 5 18 10 C14 13 11 9 9 10 C6 9 3 13 0 10Z" />
      <line x1="6" y1="10" x2="5" y2="16" stroke="#7B2D16" strokeWidth="0.8" strokeLinecap="round"/>
      <line x1="5" y1="16" x2="3" y2="18" stroke="#7B2D16" strokeWidth="0.7" strokeLinecap="round"/>
      <line x1="5" y1="16" x2="6.5" y2="18" stroke="#7B2D16" strokeWidth="0.7" strokeLinecap="round"/>
      <line x1="11" y1="10" x2="12" y2="16" stroke="#7B2D16" strokeWidth="0.8" strokeLinecap="round"/>
      <line x1="12" y1="16" x2="10" y2="18" stroke="#7B2D16" strokeWidth="0.7" strokeLinecap="round"/>
      <line x1="12" y1="16" x2="13.5" y2="18" stroke="#7B2D16" strokeWidth="0.7" strokeLinecap="round"/>
    </g>
  )

  const birds = [
    { x: 0,   y: 4,  scale: 0.70 },
    { x: 22,  y: 3,  scale: 0.80 },
    { x: 48,  y: 2,  scale: 0.85 },
    { x: 74,  y: 3,  scale: 0.75 },
    { x: 98,  y: 1,  scale: 0.90 },
    { x: 124, y: 4,  scale: 0.78 },
    { x: 148, y: 2,  scale: 0.85 },
    { x: 174, y: 0,  scale: 0.95 },
    { x: 202, y: 3,  scale: 0.80 },
    { x: 228, y: 1,  scale: 0.88 },
  ]

  return (
    <svg viewBox="0 0 280 32" className="w-[320px] lg:w-[400px] h-auto" fill="none">
      <line x1="0" y1="26" x2="280" y2="26" stroke="#7B2D16" strokeWidth="0.8" opacity="0.45"/>
      {birds.map((b, i) => <Bird key={i} {...b} />)}
    </svg>
  )
}

/* ────────────────────────────────────────────────────────────
   Booking Bar
──────────────────────────────────────────────────────────── */
function BookingBar() {
  const CalIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#7B2D16' }}>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8"  y1="2" x2="8"  y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3"  y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="6"  y="13" width="2.5" height="2.5" rx="0.4" fill="currentColor" opacity="0.6"/>
      <rect x="10" y="13" width="2.5" height="2.5" rx="0.4" fill="currentColor" opacity="0.6"/>
      <rect x="14" y="13" width="2.5" height="2.5" rx="0.4" fill="currentColor" opacity="0.6"/>
      <rect x="6"  y="17" width="2.5" height="2.5" rx="0.4" fill="currentColor" opacity="0.4"/>
    </svg>
  )

  const PersonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#7B2D16' }}>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto bg-white rounded-[20px] px-2 py-2 w-[90%] max-w-[780px]"
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        borderRadius: '20px'
      }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:divide-x divide-gray-100">
        {/* Check In */}
        <div className="flex items-center gap-3 flex-1 px-5 py-3 w-full sm:w-auto">
          <CalIcon />
          <div>
            <p style={{ fontSize: 10, color: '#7B2D16', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Check In</p>
            <p style={{ fontSize: 13, color: '#1a1a1a', fontWeight: 500 }}>12 May 2025</p>
          </div>
        </div>

        {/* Check Out */}
        <div className="flex items-center gap-3 flex-1 px-5 py-3 w-full sm:w-auto">
          <CalIcon />
          <div>
            <p style={{ fontSize: 10, color: '#7B2D16', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Check Out</p>
            <p style={{ fontSize: 13, color: '#1a1a1a', fontWeight: 500 }}>13 May 2025</p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 flex-1 px-5 py-3 w-full sm:w-auto">
          <PersonIcon />
          <div>
            <p style={{ fontSize: 10, color: '#7B2D16', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Guests</p>
            <p style={{ fontSize: 13, color: '#1a1a1a', fontWeight: 500 }}>2 Guests</p>
          </div>
        </div>

        {/* Check Availability button */}
        <div className="px-3 py-2 w-full sm:w-auto shrink-0">
          <motion.button
            whileHover={{ backgroundColor: '#6a2513' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: '#7B2D16',
              color: '#fff',
              fontWeight: 600,
              fontSize: 13,
              padding: '12px 22px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              width: '100%',
              transition: 'background 0.2s',
            }}
          >
            Check Availability
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" style={{ background: '#fff', position: 'relative', paddingBottom: '30px' }}>

      {/* ── Background Layer (Full Bleed Image) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
          src={heroImg}
          alt="Chidiya Ghar luxury room"
          className="w-full h-full object-cover object-center"
        />
        {/* Top subtle fade so navbar options & Book Now are clearly readable over darker photo areas */}
        <div 
          className="absolute inset-x-0 top-0 h-[130px] pointer-events-none z-[1]" 
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.75) 45%, rgba(255, 255, 255, 0.3) 75%, transparent 100%)'
          }}
        />

        {/* Smooth eased gradient angled at 105deg to match the left text curve and seamlessly fade out without sharp edges */}
        <div 
          className="absolute inset-0 bg-white/95 lg:bg-transparent z-[1]"
          style={{
            backgroundImage: `linear-gradient(105deg, #ffffff 0%, #ffffff 22%, rgba(255,255,255,0.98) 28%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.65) 44%, rgba(255,255,255,0.35) 54%, rgba(255,255,255,0.1) 64%, transparent 72%)`
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-white to-transparent pointer-events-none z-[1]" />
      </div>

      {/* ── Content Layer ── */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col justify-center min-h-[650px] max-h-[820px] lg:h-[95vh] px-4 lg:px-12 xl:px-16 py-32 lg:py-0 pointer-events-none">
        
        {/* Text container */}
        <div className="pointer-events-auto" style={{ maxWidth: 500 }}>
          {/* WELCOME TO */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ fontSize: 30, fontWeight: 900, letterSpacing: '0.22em', color: '#7B2D16', textTransform: 'uppercase', marginBottom: 11 }}
          >
            Welcome To
          </motion.p>

          {/* CHIDIYA GHAR */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: '"Fraunces", serif', fontSize: 'clamp(3.8rem, 5.5vw, 5rem)', fontWeight: 1400, lineHeight: 1.05, marginBottom: 6 }}
          >
            <span style={{ color: '#1a1a1a' }}>Chidiya </span>
            <span style={{ color: '#7B2D16', fontStyle: 'italic' }}>Ghar</span>
          </motion.h1>

          {/* Nesting Professional */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            style={{ fontSize: 15, fontWeight: 900, letterSpacing: '0.32em', color: '#1a1a1a', textTransform: 'uppercase', marginBottom: 24 }}
          >
            Nesting Professional
          </motion.p>

          {/* Bird row illustration */}
          {/* <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            style={{ marginBottom: 22 }}
          >
            <BirdRowSVG />
          </motion.div> */}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            style={{ fontSize: 19, color: '#555', lineHeight: 1.65, marginBottom: 36, maxWidth: 500 }}
          >
            Where comfort meets warmth and every moment feels like home.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
          >
            <motion.a
              href="#rooms"
              whileHover={{ backgroundColor: '#6a2513' }}
              whileTap={{ scale: 0.97 }}
              style={{ background: '#7B2D16', color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 6, transition: 'background 0.2s', letterSpacing: '0.03em' }}
            >
              Explore Rooms
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#1a1a1a', fontSize: 15, fontWeight: 500 }}
            >
              <span style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #bbb', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none"><polygon points="0,0 9,5.5 0,11" fill="#1a1a1a"/></svg>
              </span>
              Watch Video
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── Booking bar strip (overlapping borders) ── */}
      {/* It sits absolute at the bottom, translating down 50% so it overlaps the Hero/Rooms border */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 flex justify-center w-full">
        <BookingBar />
      </div>

    </section>
  )
}
