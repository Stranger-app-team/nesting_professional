import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './common/Reveal'
import puneMap from '../assets/image/pune-location.png'

const landmarks = [
  {
    id: 'highstreet',
    icon: '🛍️',
    title: 'Near Balewadi High Street',
    desc: 'Top dining, cafes & vibrant retail',
    coords: { top: '34%', left: '37.5%' },
  },
  {
    id: 'stadium',
    icon: '🏟️',
    title: 'Near Balewadi Stadium',
    desc: 'Close to major sports & event arenas',
    coords: { top: '29%', left: '32.5%' },
  },
  {
    id: 'ithub',
    icon: '💼',
    title: 'Centre of Pune IT Hub',
    desc: 'Minutes to Hinjewadi & Baner tech parks',
    coords: { top: '50%', left: '50%' },
  },
  {
    id: 'perks',
    icon: '🚗',
    title: 'Nearby Location Perks',
    desc: 'Expressway, airport & city transit links',
    coords: { top: '42%', left: '62%' },
  },
]

// Classic Map Pin SVG Icon
function MapPinSVG({ className = '' }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#7B2D16" className={`drop-shadow-lg ${className}`}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

export default function LocationMap() {
  const [activeLandmark, setActiveLandmark] = useState(null)
  const [isMapHovered, setIsMapHovered] = useState(false)
  const cardShadow = '0 20px 45px -8px rgba(0, 0, 0, 0.12), 0 8px 18px -4px rgba(0, 0, 0, 0.05)'

  return (
    <section id="location" style={{ backgroundColor: '#FAF6F1' }} className="py-14 sm:py-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        <div 
          className="bg-white rounded-[20px] p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12"
          style={{
            boxShadow: cardShadow,
            borderRadius: '20px',
          }}
        >
          {/* Left Text & Key Connectivity */}
          <div className="flex-1 max-w-[620px]">
            <Reveal type="fade">
              <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-2.5">
                Location
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h2
                className="font-display text-[26px] sm:text-[32px] lg:text-[38px] font-normal text-[#1a1a1a] leading-[1.15] mb-4"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Connected to Everything That Matters in Pune
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[#666] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                Located within effortless reach of Pune's leading business districts, IT corridors, and city attractions. Click any landmark below to highlight its location on the map.
              </p>
            </Reveal>

            {/* Sleek low-height rectangular list tiles with click interaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              {landmarks.map((item, i) => {
                const isSelected = activeLandmark === item.id

                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveLandmark(isSelected ? null : item.id)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[12px] text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#7B2D16]/10 border-2 border-[#7B2D16] shadow-sm'
                        : 'bg-[#FAF6F1]/85 border border-black/[0.03] hover:bg-[#FAF6F1]'
                    }`}
                  >
                    <span className={`w-8 h-8 shrink-0 rounded-[8px] flex items-center justify-center text-[15px] shadow-sm transition-colors ${
                      isSelected ? 'bg-[#7B2D16] text-white' : 'bg-white'
                    }`}>
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className={`font-bold text-[12.5px] sm:text-[13px] leading-tight truncate ${
                        isSelected ? 'text-[#7B2D16]' : 'text-[#1a1a1a]'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-[#777] text-[11px] leading-tight truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <Reveal delay={0.25}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[#7B2D16] text-white font-semibold text-[13px] px-8 py-3 rounded-md transition-colors duration-200 tracking-wide shadow-sm"
              >
                Get Directions
              </motion.a>
            </Reveal>
          </div>

          {/* Right Pune Map Visual — No border, smooth hover scale, exact NW pin & interactive landmark dots */}
          <div 
            className="flex-1 w-full max-w-[500px] flex items-center justify-center relative cursor-pointer"
            onMouseEnter={() => setIsMapHovered(true)}
            onMouseLeave={() => setIsMapHovered(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ scale: isMapHovered ? 1.04 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-2 w-full flex items-center justify-center"
            >
              {/* Map Illustration without border */}
              <img
                src={puneMap}
                alt="Pune City Location Map"
                className="w-full max-h-[360px] object-contain drop-shadow-sm select-none pointer-events-none"
              />

              {/* Chidiya Ghar Pin Marker (North-West curve / Balewadi location per reference) */}
              <div 
                className="absolute flex flex-col items-center z-30 -translate-x-1/2 -translate-y-[90%]"
                style={{ top: '32%', left: '35%' }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <MapPinSVG />
                </motion.div>

                {/* Chidiya Ghar Label Badge */}
                <motion.div 
                  animate={{ scale: isMapHovered ? 1.05 : 1 }}
                  className="bg-[#7B2D16] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap mt-0.5 tracking-wide border border-white/20"
                >
                  Chidiya Ghar
                </motion.div>
              </div>

              {/* Landmark Dots & Labels — All reveal clearly on map hover or when clicked */}
              {landmarks.map((item) => {
                const isSelected = activeLandmark === item.id
                const showLabel = isMapHovered || isSelected

                return (
                  <motion.div
                    key={item.id}
                    className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 z-25"
                    style={{ top: item.coords.top, left: item.coords.left }}
                    animate={{ scale: showLabel ? 1 : 0.85 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing / Pulsing Dot Marker */}
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                        isSelected || isMapHovered ? 'bg-[#7B2D16] opacity-60' : 'opacity-0'
                      }`} />
                      <span className={`relative inline-flex rounded-full transition-all duration-300 border-2 border-white shadow-md ${
                        isSelected
                          ? 'h-3.5 w-3.5 bg-[#7B2D16]'
                          : isMapHovered
                          ? 'h-3 w-3 bg-[#7B2D16]'
                          : 'h-2.5 w-2.5 bg-[#8C5D4E]'
                      }`} />
                    </span>

                    {/* Floating Landmark Tooltip Tag (visible on hover or click) */}
                    <AnimatePresence>
                      {showLabel && (
                        <motion.span
                          initial={{ opacity: 0, y: 6, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded shadow-lg whitespace-nowrap mt-1 border transition-colors ${
                            isSelected
                              ? 'bg-[#7B2D16] text-white border-white/30'
                              : 'bg-[#2A1205]/95 text-[#FDF8F4] border-white/10'
                          }`}
                        >
                          {item.title}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
