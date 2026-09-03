import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { philosophy } from '../data/content'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'
import TextMask from './common/TextMask'
import openUpImg from '../assets/image/openup.png'
import openDownImg from '../assets/image/opendown.png'

// Floating feather SVG decorations
function FloatingFeather({ style, className = '' }) {
  return (
    <svg
      width="28"
      height="52"
      viewBox="0 0 28 52"
      fill="none"
      className={`absolute pointer-events-none opacity-30 ${className}`}
      style={style}
    >
      <path
        d="M14 2 C20 8, 26 18, 24 30 C22 40, 16 46, 14 50 C12 46, 6 40, 4 30 C2 18, 8 8, 14 2Z"
        stroke="#B8863B"
        strokeWidth="1.2"
        fill="rgba(184,134,59,0.12)"
      />
      <line x1="14" y1="4" x2="14" y2="48" stroke="#B8863B" strokeWidth="0.8" />
      {[10, 16, 22, 28, 34, 40].map((yVal, i) => (
        <g key={yVal}>
          <line x1="14" y1={yVal} x2={14 - 6 + i * 0.5} y2={yVal - 2} stroke="#B8863B" strokeWidth="0.5" opacity="0.7" />
          <line x1="14" y1={yVal} x2={14 + 6 - i * 0.5} y2={yVal - 2} stroke="#B8863B" strokeWidth="0.5" opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}

// Animated SVG birds flying in from sides
function SectionBirds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[15%]"
        initial={{ x: '-200px', opacity: 0 }}
        whileInView={{ x: 'calc(100vw + 200px)', opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 20, delay: 2, repeat: Infinity, ease: 'linear' }}
        viewport={{ once: false }}
      >
        <svg width="100" height="48" viewBox="0 0 120 60" fill="none">
          <path d="M10 35 C20 10, 40 5, 60 20 C80 5, 95 8, 110 25 C95 30, 75 22, 60 25 C55 32, 50 40, 40 42 C38 38, 35 32, 30 34 C22 36, 15 42, 10 35Z" fill="rgba(184,134,59,0.4)" />
          <path d="M60 25 C58 38, 55 48, 53 56" stroke="rgba(184,134,59,0.4)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  )
}

export default function Philosophy() {
  const ref = useRef(null)

  // Parallax for the room image inside the card
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const featherY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const featherY2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  /**
   * CINEMATIC SHUTTER REVEAL
   *
   * Top half: covers exactly the TOP 50% of the section, image bottom-aligned
   *           so the seam sits at the center line. Slides UP out of frame.
   * Bottom half: covers exactly the BOTTOM 50% of the section, image top-aligned.
   *              Slides DOWN out of frame.
   *
   * Both start at y=0 (in place, covering the section).
   * As scroll progresses: top moves to -100% (its own height), bottom to +100%.
   */
  const { scrollYProgress: shutterP } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  // Hold until 25%, then open. Fade starts at 65%.
  const topY    = useTransform(shutterP, [0, 0.25, 0.82, 1], ['0%',  '0%',  '-80%', '-100%'])
  const topOp   = useTransform(shutterP, [0, 0.30, 0.78, 1], [1,     1,     0.4,     0])
  const bottomY = useTransform(shutterP, [0, 0.25, 0.82, 1], ['0%',  '0%',   '80%',  '100%'])
  const bottomOp= useTransform(shutterP, [0, 0.30, 0.78, 1], [1,     1,     0.4,     0])

  return (
    <section id="philosophy" ref={ref} className="bg-cream py-28 lg:py-36 relative overflow-hidden">

      {/* ─── CINEMATIC SHUTTER ──────────────────────────────────────────────
          Top half covers absolute top 0→50% of section height.
          Bottom half covers absolute bottom 50→100% of section height.
          Images are object-cover so they fill their half perfectly.
          The seam is ALWAYS at the exact vertical center — no gap, no overlap.
      ────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">

        {/* TOP half: occupies top 0–50% */}
        <motion.div
          style={{ y: topY, opacity: topOp }}
          className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden"
        >
          <img
            src={openUpImg}
            alt=""
            className="w-full h-full object-cover object-bottom select-none block"
            draggable={false}
          />
        </motion.div>

        {/* BOTTOM half: occupies bottom 50–100% */}
        <motion.div
          style={{ y: bottomY, opacity: bottomOp }}
          className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden"
        >
          <img
            src={openDownImg}
            alt=""
            className="w-full h-full object-cover object-top select-none block"
            draggable={false}
          />
        </motion.div>

      </div>

      {/* Floating feather decorations */}
      <motion.div style={{ y: featherY1 }} className="absolute top-16 right-8 animate-feather-float">
        <FloatingFeather />
      </motion.div>
      <motion.div style={{ y: featherY2, animationDelay: '2s' }} className="absolute top-40 right-24 animate-feather-float-2">
        <FloatingFeather style={{ opacity: 0.18, transform: 'rotate(25deg)' }} />
      </motion.div>
      <motion.div className="absolute bottom-20 left-10 animate-feather-float-3">
        <FloatingFeather style={{ opacity: 0.15, transform: 'rotate(-15deg) scaleX(-1)' }} />
      </motion.div>
      <motion.div className="absolute top-1/2 left-4 animate-feather-float" style={{ animationDelay: '4s' }}>
        <FloatingFeather style={{ opacity: 0.1, transform: 'rotate(10deg)', width: '18px', height: '34px' }} />
      </motion.div>

      <SectionBirds />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: Rich Visual Showcase */}
        <Reveal type="scale" amount={0.1} delay={0.1} className="relative">
          {/* Main Image Frame */}
          <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-lg bg-ink/5 border border-gold/30 p-2 shadow-2xl">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <motion.div style={{ y }} className="absolute inset-[-10%]">
                <ImageWithFallback
                  src={philosophy.image}
                  alt="Inside a Chidiya Ghar nest"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />

              {/* Top-Left Sanctuary Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-goldSoft bg-ink/80 border border-gold/40 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Sanctuary Design · Est. 2021
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/60 z-10" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/60 z-10" />
            </div>
          </div>

          {/* Floating Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-ink/95 border border-gold/35 rounded-lg p-4 sm:p-5 shadow-2xl backdrop-blur-md max-w-[260px] sm:max-w-[280px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold text-sm font-semibold">
                ✦
              </div>
              <div>
                <p className="text-cream font-display text-sm">Peak Recovery</p>
                <p className="text-goldSoft text-xs">7 Private Sanctuary Nests</p>
              </div>
            </div>
            <div className="pt-2 border-t border-cream/10 flex items-center justify-between text-[11px] text-cream/70">
              <span>Sub-30dB Silence</span>
              <span className="text-gold">•</span>
              <span>North-Light Desks</span>
            </div>
          </motion.div>
        </Reveal>

        {/* Text content */}
        <div>
          <Reveal type="fade">
            <span className="section-label">{philosophy.label}</span>
          </Reveal>

          <TextMask delay={0.1} className="mt-4 mb-8">
            <h2 className="font-display text-display-lg text-ink max-w-lg">{philosophy.title}</h2>
          </TextMask>

          {philosophy.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.12 + i * 0.08}>
              <p className="text-ink/70 leading-relaxed mb-5 max-w-lg">{p}</p>
            </Reveal>
          ))}

          {/* Guest type tags */}
          <Reveal delay={0.3}>
            <div className="mt-6 mb-8 flex flex-wrap gap-2">
              {['Athletes', 'Families', 'Professionals', 'Nomads', 'Wellness seekers', 'Teams'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-ink/20 text-ink/60 hover:border-gold/60 hover:text-gold transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-6 space-y-6">
            {philosophy.points.map((point, i) => (
              <Reveal key={point.k} delay={0.18 + i * 0.1} type="rise" className="flex gap-5 border-t border-ink/10 pt-5">
                <span className="font-display text-3xl text-gold/40 w-8 shrink-0 leading-none">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="font-display text-lg text-gold block mb-1">{point.k}</span>
                  <span className="text-ink/65 text-sm leading-relaxed">{point.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
