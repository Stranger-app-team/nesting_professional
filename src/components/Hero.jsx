import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import room1Img from '../assets/hero/hero_1.png'
import room2Img from '../assets/hero/hero_2.jpeg'
import mapAnimationVideo from '../assets/hero/map animation_1.mp4'
import whatsAppVideo from '../assets/logo/WhatsApp Video 2026-09-12 at 3.49.15 PM.mp4'
import chidiyaGharTextSvg from '../assets/image/chidiya-ghar-exact.svg'
import nestingProfSvg from '../assets/image/NESTING PROFESSIONALS.svg'

const HERO_VIDEOS = [
  { 
    id: 1, 
    title: 'Deluxe Suite', 
    code: 'Room 01', 
    video: room1Img, 
    type: 'image', 
    desc: 'Luxury Living & Comfort',
    position: 'object-right sm:object-[88%_center] md:object-[75%_center] lg:object-[75%_center]'
  },
  { 
    id: 2, 
    title: 'Executive Studio', 
    code: 'Room 02', 
    video: room2Img, 
    type: 'image', 
    desc: 'Modern Architectural Space',
    position: 'object-right sm:object-[88%_center] md:object-[85%_center] lg:object-[95%_center]'
  },
  { id: 3, title: 'Premium Suite', code: 'Room 03', video: mapAnimationVideo, type: 'video', desc: 'Serene Ambience & Views' },
  { id: 4, title: 'Penthouse Suite', code: 'Room 04', video: whatsAppVideo, type: 'video', desc: 'Panoramic Sophistication' },
]

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
   Booking Bar (100% Exact Original Code & Styling)
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

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 Persons')

  const handleCheckAvailability = () => {
    const event = new CustomEvent('openInquiry', {
      detail: { checkIn, checkOut, persons: guests }
    })
    window.dispatchEvent(event)
  }

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
        
        {/* Top Row on Mobile / Left Section on Desktop */}
        <div className="flex flex-row w-full sm:w-auto flex-1 divide-x divide-gray-100 border-b border-gray-100 sm:border-b-0">
          {/* Check In */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-1 px-1 sm:px-5 py-3">
            <div className="hidden md:block"><CalIcon /></div>
            <div className="text-center sm:text-left flex flex-col w-full">
              <label className="text-[9px] sm:text-[10px] text-[#7B2D16] font-bold tracking-wider uppercase mb-0.5 block">Check In</label>
              <input 
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="text-[11px] sm:text-[13px] text-[#1a1a1a] font-medium bg-transparent outline-none cursor-pointer w-full"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-1 px-1 sm:px-5 py-3">
            <div className="hidden md:block"><CalIcon /></div>
            <div className="text-center sm:text-left flex flex-col w-full">
              <label className="text-[9px] sm:text-[10px] text-[#7B2D16] font-bold tracking-wider uppercase mb-0.5 block">Check Out</label>
              <input 
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="text-[11px] sm:text-[13px] text-[#1a1a1a] font-medium bg-transparent outline-none cursor-pointer w-full"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-1 px-1 sm:px-5 py-3">
            <div className="hidden md:block"><PersonIcon /></div>
            <div className="text-center sm:text-left flex flex-col w-full">
              <label className="text-[9px] sm:text-[10px] text-[#7B2D16] font-bold tracking-wider uppercase mb-0.5 block">Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="text-[11px] sm:text-[13px] text-[#1a1a1a] font-medium bg-transparent outline-none cursor-pointer w-full"
              >
                <option value="1 Persons">1 P</option>
                <option value="2 Persons">2 P</option>
                <option value="3 Persons">3 P</option>
                <option value="4 Persons">4 P</option>
                <option value="5+ Persons">5+ P</option>
              </select>
            </div>
          </div>
        </div>

        {/* Check Availability button */}
        <div className="px-3 py-3 w-full sm:w-auto shrink-0">
          <motion.button
            onClick={handleCheckAvailability}
            whileHover={{ backgroundColor: '#1a0b03' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: '#2A1205',
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
  // Start with a random video index between 0 and 3
  const [activeVideoIndex, setActiveVideoIndex] = useState(() =>
    Math.floor(Math.random() * HERO_VIDEOS.length)
  )
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const videoRefs = useRef([])

  // Ensure the active media plays seamlessly or auto-advances
  useEffect(() => {
    const currentItem = HERO_VIDEOS[activeVideoIndex]
    if (currentItem?.type === 'video') {
      const v = videoRefs.current[activeVideoIndex]
      if (v) {
        v.currentTime = 0
        v.play().catch(() => {})
      }
    } else if (currentItem?.type === 'image') {
      const timer = setTimeout(() => {
        setActiveVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [activeVideoIndex])

  const handleVideoEnded = (idx) => {
    if (idx === activeVideoIndex) {
      // Transition seamlessly to the next video when current video ends
      setActiveVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length)
    }
  }

  return (
    <section id="top" style={{ background: '#fff', position: 'relative', paddingBottom: '30px' }}>

      {/* ── Background Layer (Seamless Stacked Videos with Crossfade) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        {HERO_VIDEOS.map((item, index) => {
          const isActive = index === activeVideoIndex
          return (
            <motion.div
              key={item.id}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: index === activeVideoIndex ? 1 : 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {index === 3 ? (
                <div className="w-full h-full bg-[#ffffff]" />
              ) : item.type === 'image' ? (
                <img
                  src={item.video}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.position || 'object-center'}`}
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  autoPlay={isActive}
                  muted
                  playsInline
                  onEnded={() => handleVideoEnded(index)}
                  className="w-full h-full object-cover object-center"
                />
              )}
            </motion.div>
          )
        })}

        {/* Subtle low fade on left half section */}
        <div 
          className="absolute inset-y-0 left-0 w-full md:w-[50%] pointer-events-none z-[1]" 
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.35) 60%, transparent 100%)'
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-white/50 to-transparent pointer-events-none z-[1]" />
      </div>

      {/* ── Content Layer ── */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col justify-center min-h-[650px] max-h-[820px] lg:h-[95vh] px-4 lg:px-12 xl:px-16 py-32 lg:py-0 pointer-events-none">
        
        <AnimatePresence mode="wait">
          {activeVideoIndex === 3 ? (
            <motion.div
              key="whatsapp-slide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-12 w-full"
            >
              {/* Left Column: Welcome Card */}
              <div
                className="p-8 md:p-10 rounded-2xl w-full max-w-[500px]" 
                style={{ background: 'transparent', backgroundColor: 'rgba(243, 234, 219, 0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
              >
                {/* WELCOME TO */}
                <motion.p
                  className="font-display text-[20px] md:text-[20px] font-normal tracking-[0.22em] text-[#7B2D16] uppercase mb-1"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Welcome To
                </motion.p>

                <div style={{ display: 'inline-block', maxWidth: '100%' }}>
                  {/* CHIDIYA GHAR */}
                  <motion.h1
                    className="font-display"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 600, lineHeight: 1.05, marginBottom: 12, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
                  >
                    <img src={chidiyaGharTextSvg} alt="Chidiya Ghar" style={{ height: '1.2em', width: 'auto' }} />
                  </motion.h1>

                  {/* Nesting Professional */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28, duration: 0.5 }}
                    style={{ width: '100%', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
                  >
                    <img src={nestingProfSvg} alt="Nesting Professionals" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </motion.div>
                </div>

                {/* Tagline */}
                <motion.p
                  className="text-[16px] md:text-[19px] font-light text-[#555] leading-relaxed mb-8 max-w-[400px]"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.6 }}
                >
                  Your home away from home, while you pursue your journey.
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
                    whileHover={{ backgroundColor: '#1a0b03' }}
                    whileTap={{ scale: 0.97 }}
                    style={{ background: '#2A1205', color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 6, transition: 'background 0.2s', letterSpacing: '0.03em' }}
                  >
                    Explore Rooms
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column: WhatsApp Video Framed Card */}
              <div className="w-full max-w-[580px] lg:max-w-[1480px] flex items-center justify-center">
                <div className="relative w-full bg-white rounded-[32px]  overflow-hidden flex items-center justify-center">
                  <video
                    ref={(el) => (videoRefs.current[3] = el)}
                    src={HERO_VIDEOS[3].video}
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => handleVideoEnded(3)}
                    className="w-full h-auto rounded-[22px] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="welcome-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-auto p-8 md:p-10 rounded-2xl" 
              style={{ maxWidth: 500, background: 'transparent', backgroundColor: 'rgba(243, 234, 219, 0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            >
              {/* WELCOME TO */}
              <motion.p
                className="font-display text-[20px] md:text-[20px] font-normal tracking-[0.22em] text-[#7B2D16] uppercase mb-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Welcome To
              </motion.p>

              <div style={{ display: 'inline-block', maxWidth: '100%' }}>
                {/* CHIDIYA GHAR */}
                <motion.h1
                  className="font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 600, lineHeight: 1.05, marginBottom: 12, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
                >
                  <img src={chidiyaGharTextSvg} alt="Chidiya Ghar" style={{ height: '1.2em', width: 'auto' }} />
                </motion.h1>

                {/* Nesting Professional */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.5 }}
                  style={{ width: '100%', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
                >
                  <img src={nestingProfSvg} alt="Nesting Professionals" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>
              </div>

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
                className="text-[16px] md:text-[19px] font-light text-[#555] leading-relaxed mb-8 max-w-[400px]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.6 }}
              >
                Your home away from home, while you pursue your journey.
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
                  whileHover={{ backgroundColor: '#1a0b03' }}
                  whileTap={{ scale: 0.97 }}
                  style={{ background: '#2A1205', color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 6, transition: 'background 0.2s', letterSpacing: '0.03em' }}
                >
                  Explore Rooms
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Booking bar strip (overlapping borders - EXACT original position) ── */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 flex justify-center w-full pointer-events-none">
        <div className="relative pointer-events-auto flex flex-col items-center justify-center w-full">
          
          {/* ── 4 Carousel Dots Container (Positioned ABSOLUTELY above BookingBar) ── */}
          <div className="absolute bottom-full mb-3.5 flex flex-col items-center justify-center">
            
            {/* Smooth Hover Video Preview Popup Modal (Centered over dots bar with dynamic pointer arrow) */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, y: 10, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.94 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-full mb-3.5 w-52 sm:w-60 bg-[#1A0B03]/95 text-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/25 pointer-events-none z-[100] backdrop-blur-2xl"
                >
                  {/* Mini Media Preview Container */}
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-2.5 bg-black/80 border border-white/15 shadow-inner">
                    {HERO_VIDEOS[hoveredIndex].type === 'image' ? (
                      <img
                        src={HERO_VIDEOS[hoveredIndex].video}
                        alt={HERO_VIDEOS[hoveredIndex].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={HERO_VIDEOS[hoveredIndex].video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-2 left-2 bg-[#7B2D16] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-md">
                      Preview
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div className="px-1 text-left">
                    <div className="text-[12px] font-bold text-[#F3EADB] flex items-center justify-between">
                      <span>{HERO_VIDEOS[hoveredIndex].title}</span>
                      <span className="text-[9px] font-semibold text-[#E0B896] uppercase bg-white/10 px-1.5 py-0.5 rounded">
                        {HERO_VIDEOS[hoveredIndex].code}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-300 mt-1 font-light line-clamp-1 leading-snug">
                      {HERO_VIDEOS[hoveredIndex].desc}
                    </p>
                  </div>

                  {/* Dynamic Arrow Pointer tracking the exact hovered dot */}
                  <div
                    className="absolute top-full -mt-[1px] -translate-x-1/2 border-[6px] border-transparent border-t-[#1A0B03]/95 transition-all duration-200 ease-out"
                    style={{
                      left: `${((hoveredIndex + 0.5) / HERO_VIDEOS.length) * 100}%`
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dots Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center bg-[#2A1205]/25 backdrop-blur-[3px] px-3 py-0.5 rounded-full border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.4)] z-40"
            >
              {HERO_VIDEOS.map((room, index) => {
                const isActive = index === activeVideoIndex
                const isHovered = hoveredIndex === index

                return (
                  <div
                    key={room.id}
                    className="relative flex items-center justify-center w-7 h-7 sm:w-7 sm:h-7 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveVideoIndex(index)}
                  >
                    {/* Simple Rounded Circle Indicator Dot */}
                    <button
                      type="button"
                      aria-label={`Select ${room.title}`}
                      className={`rounded-full transition-all duration-300 pointer-events-none ${
                        isActive
                          ? 'w-3.5 h-3.5 bg-white shadow-[0_0_14px_rgba(255,255,255,0.55)] scale-110'
                          : isHovered
                          ? 'w-3 h-3 bg-white/95 scale-125'
                          : 'w-3 h-3 bg-white/45 hover:bg-white/80'
                      }`}
                    />
                  </div>
                )
              })}
            </motion.div>

          </div>

          <BookingBar />
        </div>
      </div>

    </section>
  )
}
