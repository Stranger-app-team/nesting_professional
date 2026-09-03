import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { nests } from '../data/content'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'

export default function Nests() {
  const trackRef = useRef(null)
  const [dragLimit, setDragLimit] = useState(-1800)

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
    <section id="nests" className="bg-parchment py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <Reveal type="fade">
            <span className="section-label">The nests</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-display-lg text-ink mt-4">
              Four rooms. Each built around one kind of guest.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-ink/70 text-base mt-4 leading-relaxed max-w-xl">
              Drag sideways, or scroll — the nests don't queue up in order of price, just in order of who they're for.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink/5 border border-ink/15 text-ink/70 text-xs font-semibold tracking-wider hover:border-gold/50 transition-colors">
            <span className="text-gold">←</span>
            <span>Drag sideways to explore nests</span>
            <span className="text-gold">→</span>
          </div>
        </Reveal>
      </div>

      <motion.div
        ref={trackRef}
        className="flex items-stretch gap-6 px-6 lg:px-10 pb-8 cursor-grab active:cursor-grabbing overflow-x-auto snap-x snap-mandatory scrollbar-none select-none"
        drag="x"
        dragConstraints={{ left: dragLimit, right: 0 }}
        dragElastic={0.08}
      >
        {nests.map((nest, i) => (
          <Reveal
            key={nest.id}
            type="scale"
            delay={i * 0.08}
            className="group relative shrink-0 w-[78vw] sm:w-[46vw] lg:w-[26vw] snap-start h-full"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full overflow-hidden rounded-sm bg-ink">
              <ImageWithFallback
                src={nest.image}
                alt={nest.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-goldSoft text-xs tracking-wide">{nest.tag}</span>
                <h3 className="font-display text-2xl text-cream mt-1">{nest.name}</h3>
                <p className="text-cream/70 text-sm mt-3 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-[max-height] duration-500 ease-out">
                  {nest.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        {/* End buffer — matches the start px-6 lg:px-10 so last card has identical breathing room */}
        <div className="shrink-0 w-6 lg:w-10 pointer-events-none" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
