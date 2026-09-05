import { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Dining from './components/Dining'
import About from './components/About'
import GallerySection from './components/GallerySection'
import LocationMap from './components/LocationMap'
import MeetingBanner from './components/MeetingBanner'
import Footer from './components/Footer'
import ScrollCompanion from './components/common/ScrollCompanion'
import CursorTrail from './components/common/CursorTrail'

import loaderVideo from './assets/VID-20260904-WA0015.mp4'

// Full-screen video loading curtain
function LoadCurtain({ onDone }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0
      
      // 1. Try to play WITH sound automatically
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // 2. Browser blocked the sound. 
          // Mute the video and play it anyway so the loader doesn't freeze!
          if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch(() => onDone())
          }
        })
      }
    }
  }, [onDone])

  const handleScreenClick = () => {
    // If user clicks anywhere on the screen, instantly unmute it!
    if (videoRef.current) {
      videoRef.current.muted = false
    }
  }

  return (
    <motion.div
      key="curtain"
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-white cursor-pointer flex items-center justify-center"
      onClick={handleScreenClick}
    >
      <video
        ref={videoRef}
        src={loaderVideo}
        playsInline
        onEnded={onDone}
        onError={onDone}
        className="max-w-full max-h-full object-contain"
      />
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
      
      {/* Content wrapper with left margin for the desktop sidebar */}
      <div className="lg:ml-[160px] flex flex-col min-h-screen">
        <main style={{ backgroundColor: '#FAF6F1' }} className="flex-1">
        {/* Hero — white badge */}
        <Hero />
        {/* Rooms & Suites — brown */}
        <Rooms />
        {/* Amenities — white badge */}
        <Amenities />
        {/* Dining — brown */}
        <Dining />
        {/* About — white badge */}
        <About />
        {/* Gallery — warm cream */}
        <GallerySection />
        {/* Pune Location & Connectivity — small compact section */}
        <LocationMap />
        {/* Got a Meeting Tomorrow CTA Banner — warm cream & workspace (commented out) */}
        {/* <MeetingBanner /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}
