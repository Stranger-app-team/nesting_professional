import { motion } from 'framer-motion'
import Reveal from './common/Reveal'
import puneMap from '../assets/image/pune-location.png'

const highlights = [
  { icon: '🏢', title: 'Major IT & Tech Hubs', desc: 'Minutes away from prime tech parks' },
  { icon: '✈️', title: 'Pune Airport & Transit', desc: 'Seamless connectivity across the city' },
  { icon: '🛍️', title: 'Dining & Entertainment', desc: 'Surrounded by top restaurants & retail' },
]

export default function LocationMap() {
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
              <p className="text-[#666] text-[14px] sm:text-[15px] leading-relaxed mb-8">
                Located within effortless reach of Pune's leading business districts, IT corridors, and city attractions. Less time commuting means more time for what truly counts.
              </p>
            </Reveal>

            {/* Highlight Badges / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
                  className="p-3.5 rounded-[14px] bg-[#FAF6F1]/85 border border-black/[0.03] flex flex-col justify-between"
                >
                  <span className="text-xl mb-1.5">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] text-[13px] leading-snug">{item.title}</h4>
                    <p className="text-[#777] text-[11px] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.25}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[#7B2D16] text-white font-semibold text-[13px] px-8 py-3 rounded-md transition-colors duration-200 tracking-wide"
              >
                Get Directions
              </motion.a>
            </Reveal>
          </div>

          {/* Right Pune Map Visual with Pulse Marker */}
          <div className="flex-1 w-full max-w-[500px] flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative p-6 rounded-[18px] bg-[#FAF6F1]/60 w-full flex items-center justify-center border border-[#7B2D16]/10"
            >
              <img
                src={puneMap}
                alt="Pune City Location Map"
                className="w-full max-h-[340px] object-contain drop-shadow-sm transition-transform duration-700 hover:scale-105"
              />

              {/* Pin Marker overlay for Chidiya Ghar */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B2D16] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#7B2D16] border-2 border-white shadow-md" />
                </span>
                <span className="bg-[#7B2D16] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap mt-1 tracking-wide">
                  Chidiya Ghar
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
