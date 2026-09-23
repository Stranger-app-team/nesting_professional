import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import Reveal from './common/Reveal'

import vidLandscape from '../assets/logo/0016-Chidiya Ghar-Short Video Landscape.mp4'
import room1 from '../assets/logo/Room 1.mp4'
import room2 from '../assets/logo/Room 2.mp4'
import room3 from '../assets/logo/Room 3.mp4'
import room4 from '../assets/logo/Room 4.mp4'
import room5 from '../assets/logo/Room 5.mp4'
import room6 from '../assets/logo/Room 6.mp4'

const otherVideos = [
  { src: room1, title: 'Room 1' },
  { src: room2, title: 'Room 2' },
  { src: room3, title: 'Room 3' },
  { src: room4, title: 'Room 4' },
  { src: room5, title: 'Room 5' },
  { src: room6, title: 'Room 6' },
]

// Dynamically compute middle index so the landscape video is always centered
const middleIndex = Math.floor(otherVideos.length / 2)

const galleryVideos = [
  ...otherVideos.slice(0, middleIndex),
  { src: vidLandscape, title: 'Chidiya Ghar Experience' },
  ...otherVideos.slice(middleIndex)
]

function GalleryVideoItem({ item, isActive, isMuted, onToggleMute, isMobile = false }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted || !isActive
    }
  }, [isMuted, isActive])

  return (
    <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-black group/vid">
      <video
        ref={videoRef}
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-[14px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      
      {/* Bottom Right Speaker Audio Button */}
      {(isActive || isMobile) && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleMute()
          }}
          className="absolute bottom-3 right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white/80" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#C9A06A] animate-pulse" />
          )}
        </button>
      )}
    </div>
  )
}

export default function GallerySection() {
  const defaultIndex = middleIndex // Dynamically set to the middle video index
  const [hoveredIndex, setHoveredIndex] = useState(defaultIndex)
  const [isMuted, setIsMuted] = useState(true)
  const mobileScrollRef = useRef(null)

  useEffect(() => {
    if (mobileScrollRef.current && window.innerWidth < 768) {
      const container = mobileScrollRef.current
      const targetChild = container.children[defaultIndex]
      if (targetChild) {
        // Small timeout ensures layout has painted before scrolling
        setTimeout(() => {
          const scrollPos = targetChild.offsetLeft - (container.clientWidth / 2) + (targetChild.clientWidth / 2)
          container.scrollTo({ left: scrollPos, behavior: 'instant' })
        }, 50)
      }
    }
  }, [defaultIndex])

  const scrollMobile = (direction) => {
    if (mobileScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      mobileScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

  return (
    <section id="gallery" style={{ backgroundColor: '#2A1205' }} className="pt-12 pb-16 scroll-mt-24">
      <div className="max-w-[1680px] mx-auto px-4 lg:px-6">

        {/* Section heading */}
        <div className="text-center mb-8 mt-8">
          <Reveal type="fade">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-[1px] bg-[#C9A06A]/30"></div>
              <p className="text-[12px] font-bold tracking-[0.22em] text-[#C9A06A] uppercase">
                Gallery
              </p>
              <div className="w-10 h-[1px] bg-[#C9A06A]/30"></div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-[28px] lg:text-[36px] font-normal text-white mb-3">
              Moments at Chidiya Ghar
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-white/70 text-[14px] max-w-[500px] mx-auto leading-relaxed">
              Take a visual tour through our thoughtfully designed spaces and relaxing ambiance.
            </p>
          </Reveal>
        </div>

        {/* Mobile Scrolling Video Gallery (True 16:9 Widescreen) */}
        <div className="relative group/mobileslider md:hidden">
          {/* Left Arrow */}
          <button 
            onClick={() => scrollMobile('left')}
            className="hidden [@media(hover:hover)]:flex absolute left-2 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md shadow-md border border-[#C9A06A]/30 items-center justify-center text-white hover:bg-[#C9A06A] transition-all opacity-0 group-hover/mobileslider:opacity-100"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div ref={mobileScrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pt-4 hide-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8">
            {galleryVideos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.92, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ margin: "-10% 0px -10% 0px", amount: 0.6 }}
                className="relative shrink-0 w-[86vw] sm:w-[82vw] max-w-[530px] aspect-video rounded-[20px] p-2 sm:p-2.5 bg-[#1A0A04]/40 border border-[#C9A06A]/20 snap-center shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]"
              >
                {/* Gold frame corner accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-tl-md pointer-events-none z-10" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-tr-md pointer-events-none z-10" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-bl-md pointer-events-none z-10" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-br-md pointer-events-none z-10" />

                <GalleryVideoItem
                  item={item}
                  isActive={true}
                  isMuted={isMuted}
                  onToggleMute={toggleMute}
                  isMobile={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scrollMobile('right')}
            className="hidden [@media(hover:hover)]:flex absolute right-2 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md shadow-md border border-[#C9A06A]/30 items-center justify-center text-white hover:bg-[#C9A06A] transition-all opacity-0 group-hover/mobileslider:opacity-100"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Desktop Interactive sliding video strip with 16:9 widescreen active ratio */}
        <div 
          className="hidden md:flex items-center gap-3 w-full h-[400px] lg:h-[430px] xl:h-[450px]"
          onMouseLeave={() => setHoveredIndex(defaultIndex)}
        >
          {galleryVideos.map((item, i) => {
            const isHovered = (hoveredIndex ?? defaultIndex) === i

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                className="relative rounded-[20px] p-2 bg-[#1A0A04]/40 border border-[#C9A06A]/20 h-full select-none"
                style={{
                  flex: isHovered ? 5.8 : 0.75,
                  transform: isHovered ? 'scale(1.02)' : 'scale(0.96)',
                  zIndex: isHovered ? 20 : 1,
                  opacity: isHovered ? 1 : 0.8,
                  transition: 'flex 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
                  boxShadow: isHovered
                    ? '0 25px 50px -10px rgba(0, 0, 0, 0.5)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                  willChange: 'flex, transform',
                }}
              >
                {/* Gold frame corner accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-tl-md transition-opacity duration-300 pointer-events-none z-10" style={{ opacity: isHovered ? 1 : 0.4 }} />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-tr-md transition-opacity duration-300 pointer-events-none z-10" style={{ opacity: isHovered ? 1 : 0.4 }} />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[2px] border-l-[2px] border-[#C9A06A]/70 rounded-bl-md transition-opacity duration-300 pointer-events-none z-10" style={{ opacity: isHovered ? 1 : 0.4 }} />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[2px] border-r-[2px] border-[#C9A06A]/70 rounded-br-md transition-opacity duration-300 pointer-events-none z-10" style={{ opacity: isHovered ? 1 : 0.4 }} />

                <GalleryVideoItem
                  item={item}
                  isActive={isHovered}
                  isMuted={isMuted}
                  onToggleMute={toggleMute}
                  isMobile={false}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
