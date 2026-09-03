import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { facilities } from '../data/content'
import Reveal from './common/Reveal'
import TextMask from './common/TextMask'

import roomIcon from '../assets/image/room.svg'
import commonareaIcon from '../assets/image/commonarea.svg'
import wifiIcon from '../assets/image/wifi.svg'
import securityIcon from '../assets/image/security.svg'
import housekeepingIcon from '../assets/image/housekeeping.svg'
import carIcon from '../assets/image/car.svg'
import recreationIcon from '../assets/image/recreation.svg'
import locationIcon from '../assets/image/location.svg'

// Facilities icons mapping
const FacilityIcons = {
  room: roomIcon,
  commonarea: commonareaIcon,
  wifi: wifiIcon,
  security: securityIcon,
  housekeeping: housekeepingIcon,
  car: carIcon,
  recreation: recreationIcon,
  location: locationIcon,
}

// Count-up hook
function useCountUp(target, inView, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const num = parseFloat(target)
    if (isNaN(num)) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(num * eased * 10) / 10)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])
  return count
}

// Flip card component
function FacilityCard({ facility, index, inView }) {
  const iconSrc = FacilityIcons[facility.icon]

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: -20, rotate: index % 2 === 0 ? -8 : 8 },
        show: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="flip-card h-44"
    >
      <div className="flip-card-inner h-full">
        {/* FRONT */}
        <div className="flip-card-front h-full bg-cream/5 border border-cream/15 rounded-sm p-6 flex flex-col justify-between group hover:border-gold/40 transition-colors">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 flex items-center justify-center bg-cream/5 border border-cream/15 rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md">
              {iconSrc && <img src={iconSrc} alt="" className="w-6 h-6 invert opacity-80" />}
            </div>
            <span className="text-[10px] text-goldSoft/70 border border-gold/20 px-2 py-0.5 rounded tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Hover for info ↺
            </span>
          </div>
          <div>
            <h3 className="font-display text-xl text-cream mb-1">{facility.name}</h3>
          </div>
        </div>
        {/* BACK */}
        <div className="flip-card-back h-full bg-gold/15 border border-gold/30 rounded-sm p-6 flex flex-col justify-center">
          <div className="w-8 h-8 mb-3 flex items-center justify-center">
            {iconSrc && <img src={iconSrc} alt="" className="w-6 h-6 invert opacity-80" />}
          </div>
          <h3 className="font-display text-lg text-goldSoft mb-3">{facility.name}</h3>
          <p className="text-cream/70 text-sm leading-relaxed">{facility.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export default function Facilities() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="facilities" className="relative bg-[#29180b] py-28 lg:py-36 overflow-hidden">
      <div className="grain-overlay" />
      {/* Dot grid background decoration */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Animated large bird across the section */}
      <motion.div
        className="absolute top-12 pointer-events-none"
        initial={{ x: '-200px', opacity: 0 }}
        whileInView={{ x: 'calc(100vw + 200px)', opacity: [0, 0.3, 0.3, 0] }}
        transition={{ duration: 25, delay: 1, repeat: Infinity, ease: 'linear' }}
        viewport={{ once: false }}
      >
        <svg width="130" height="55" viewBox="0 0 140 55" fill="none">
          <path d="M5 28 C25 2, 50 0, 70 18 C90 0, 115 4, 135 28 C110 35, 85 20, 70 24 C55 20, 30 35, 5 28Z" fill="rgba(246,241,228,0.15)" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Reveal type="fade">
              <span className="section-label">Facilities</span>
            </Reveal>
            <TextMask delay={0.1}>
              <h2 className="font-display text-display-lg text-cream mt-4">
                Everything a working body needs, before breakfast.
              </h2>
            </TextMask>
            <Reveal delay={0.2}>
              <p className="mt-4 text-cream/60 text-sm leading-relaxed max-w-lg">
                Thoughtfully appointed spaces built for everyday living, recovery, and quiet focus — designed for athletes, families, and professionals alike.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-goldSoft text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Hover cards to reveal detailed amenities</span>
            </div>
          </Reveal>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((f, i) => (
            <FacilityCard key={f.name} facility={f} index={i} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
