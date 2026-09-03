import { useState } from 'react'
import { motion } from 'framer-motion'
import { contact } from '../data/content'
import Reveal from './common/Reveal'
import MagneticButton from './common/MagneticButton'
import TextMask from './common/TextMask'

const guestTypes = [
  { label: "I'm an athlete", icon: '🏃' },
  { label: "We're a family", icon: '👨‍👩‍👧' },
  { label: "I'm here for work", icon: '💼' },
  { label: "Solo wanderer", icon: '🌿' },
  { label: "Wellness retreat", icon: '🧘' },
  { label: "Team offsite", icon: '🤝' },
]

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-xs text-cream/50 tracking-wide">{label}</span>
      <input
        {...props}
        className="w-full bg-transparent border-b border-cream/25 focus:border-gold outline-none py-2.5 text-cream font-body placeholder:text-cream/30 transition-colors"
      />
    </label>
  )
}

export default function ContactCTA() {
  const [sent, setSent] = useState(false)
  const [guest, setGuest] = useState(guestTypes[0].label)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-[#29180b] py-16 lg:py-20 overflow-hidden">
      <div className="grain-overlay" />
      {/* Dot grid in background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Large faint bird silhouette background */}
      <motion.div
        className="absolute right-0 bottom-0 opacity-5 pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="400" height="160" viewBox="0 0 400 160" fill="none">
          <path d="M10 90 C80 10, 160 0, 200 55 C240 0, 320 12, 390 90 C300 115, 230 60, 200 72 C170 60, 100 115, 10 90Z" fill="#F6F1E4" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <Reveal type="fade">
            <span className="section-label">{contact.label}</span>
          </Reveal>
          <TextMask delay={0.1} className="mt-4 mb-4">
            <h2 className="font-display text-display-lg text-cream max-w-md">{contact.title}</h2>
          </TextMask>
          <Reveal delay={0.18}>
            <p className="text-cream/60 max-w-sm leading-relaxed mb-8">{contact.sub}</p>
          </Reveal>

          <Reveal delay={0.22} className="space-y-4 text-sm">
            {[
              { icon: '📍', text: contact.address },
              { icon: '✉️', text: contact.email },
              { icon: '📞', text: contact.phone },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3 text-cream/60 hover:text-gold transition-colors">
                <span className="text-base">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Form */}
        <Reveal type="rise" delay={0.1}>
          {sent ? (
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center border border-cream/15 rounded-sm p-12 relative overflow-hidden"
            >
              {/* Success bird animation */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <svg width="60" height="30" viewBox="0 0 70 35" fill="none">
                  <path d="M4 18 C14 3, 24 2, 35 10 C42 3, 52 6, 60 18 C52 24, 42 16, 35 18 C28 16, 20 24, 4 18Z" fill="#B8863B" />
                </svg>
              </motion.div>
              <span className="font-display text-3xl text-goldSoft mb-3">On its way ✓</span>
              <p className="text-cream/60 text-sm max-w-xs">
                We'll write back within a day with the nest that fits — usually faster.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 border border-cream/15 rounded-sm p-8 lg:p-10">
              <Field label="Full name" placeholder="Your name" required />
              <Field label="Email" type="email" placeholder="you@email.com" required />
              <div className="grid grid-cols-2 gap-6">
                <Field label="Arriving" type="date" required />
                <Field label="Leaving" type="date" required />
              </div>
              <Field label="Number of guests" type="number" placeholder="2" min="1" max="20" />



              <MagneticButton className="w-full justify-center !bg-gold !text-[#29180b] hover:!bg-goldSoft">
                Send reservation request →
              </MagneticButton>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
