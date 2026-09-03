import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

// A gentle zigzag drawn once and stretched to fill the viewport height.
// getPointAtLength gives us a point in *viewBox* units; because the SVG
// uses preserveAspectRatio="none" the mapping to on-screen percentage
// is a simple linear division — no ResizeObserver needed.
const VB_W = 60
const VB_H = 1400
const D =
  'M8,0 C 46,110 -18,220 8,330 C 46,440 -18,550 8,660 C 46,770 -18,880 8,990 C 46,1100 -18,1210 8,1320 C 30,1370 8,1390 8,1400'

function BirdGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="animate-flap origin-center">
      <path
        d="M2 13c4-6 8-7 10-4 2-3 6-4 10 1-3 1-6 0-8-1 1 2 1 4-1 6-1-2-1-4-2-5-1 3-3 5-6 5 1-1 2-2 2-3-2 1-4 2-5 1Z"
        fill="#B8863B"
      />
    </svg>
  )
}

export default function ScrollCompanion() {
  const pathRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const [pct, setPct] = useState({ x: 8 / VB_W, y: 0 })

  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    const total = el.getTotalLength()

    const unsub = scrollYProgress.on('change', (v) => {
      const pt = el.getPointAtLength(v * total)
      setPct({ x: pt.x / VB_W, y: pt.y / VB_H })
    })
    return () => unsub()
  }, [scrollYProgress])

  return (
    <>
      {/* Desktop: bird gliding down a flight path fixed to the viewport */}
      <div className="hidden lg:block fixed right-8 top-0 h-screen w-14 pointer-events-none z-40">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <path
            ref={pathRef}
            d={D}
            fill="none"
            stroke="rgba(18,32,28,0.16)"
            strokeWidth="1.4"
            strokeDasharray="1 8"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-[top,left] duration-100 ease-linear"
          style={{ left: `${pct.x * 100}%`, top: `${pct.y * 100}%` }}
        >
          <BirdGlyph />
        </div>
      </div>

      {/* Mobile / tablet: slim top progress line instead of the full path */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 right-0 h-[3px] bg-gold origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}
