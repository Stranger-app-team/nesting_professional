import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import AmenitiesAbout from './components/AmenitiesAbout'
import GallerySection from './components/GallerySection'
import LocationMap from './components/LocationMap'
import MeetingBanner from './components/MeetingBanner'
import Footer from './components/Footer'
import ScrollCompanion from './components/common/ScrollCompanion'
import CursorTrail from './components/common/CursorTrail'

// Elegant loading curtain — kept exactly as original with brown palette
function LoadCurtain({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      key="curtain"
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: '#2A1205' }}
    >
      {/* Animated bird icon */}
      <motion.svg
        width="80" height="80" viewBox="0 0 140 55" fill="none"
        initial={{ y: -40, opacity: 0, scale: 0.7 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.path
          d="M5 28 C25 2, 50 0, 70 18 C90 0, 115 4, 135 28 C110 35, 85 20, 70 24 C55 20, 30 35, 5 28Z"
          stroke="#C9A06A" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M70 24 L68 42 M68 42 C64 48, 60 48, 58 46 M68 42 C72 48, 76 46, 78 44"
          stroke="#C9A06A" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
        />
      </motion.svg>

      {/* Brand text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center"
      >
        <p style={{ fontFamily: '"Fraunces", serif', fontSize: '1.5rem', color: '#fff', lineHeight: 1.2 }}>
          Chidiya <span style={{ color: '#C9A06A', fontStyle: 'italic' }}>Ghar</span>
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ height: '1px', background: 'rgba(201,160,106,0.5)', margin: '8px auto 0' }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', marginTop: '6px', letterSpacing: '0.3em', textTransform: 'uppercase' }}
        >
          Nesting Professional
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>{loading && <LoadCurtain onDone={() => setLoading(false)} />}</AnimatePresence>

      {/* Cursor trail animation — kept */}
      <CursorTrail />
      <ScrollCompanion />

      <Navbar />
      <main style={{ backgroundColor: '#FAF6F1' }}>
        {/* Hero — white bg with room image */}
        <Hero />
        {/* Rooms & Suites — warm cream */}
        <Rooms />
        {/* Amenities + About Us — warm cream */}
        <AmenitiesAbout />
        {/* Gallery — warm cream */}
        <GallerySection />
        {/* Pune Location & Connectivity — small compact section */}
        <LocationMap />
        {/* Got a Meeting Tomorrow CTA Banner — warm cream & workspace */}
        <MeetingBanner />
      </main>
      <Footer />
    </>
  )
}
