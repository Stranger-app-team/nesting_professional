import { motion } from 'framer-motion'
import Reveal from './common/Reveal'
import ImageWithFallback from './common/ImageWithFallback'

// Placeholders for the dining images based on the screenshot
import dining1 from '../assets/image/gal-3.png'
import dining2 from '../assets/image/gal-4.png'
import dining3 from '../assets/image/gal-5.png'

export default function Dining() {
  return (
    <section id="dining" style={{ backgroundColor: '#2A1205' }} className="pt-16 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Content ── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <Reveal type="fade">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#C9A06A] uppercase">
                  Dining
                </p>
                {/* Simple bird icon / decorative element */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C9A06A]">
                  <path d="M5 14C8 11 12 11 16 13C17 11 19 9 21 11C20 14 16 17 12 16C8 15 6 18 3 17C2 16 3 15 5 14Z" fill="currentColor"/>
                </svg>
                <div className="flex-1 h-[1px] bg-[#C9A06A]/30"></div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-[32px] lg:text-[42px] font-normal text-white mb-6 leading-tight">
                Savor Every Moment
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-[340px]">
                From local flavors to global cuisines, we serve delicious experiences that stay with you.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <motion.a
                href="#contact"
                whileHover={{ backgroundColor: '#C9A06A', color: '#1a1a1a' }}
                whileTap={{ scale: 0.97 }}
                className="inline-block border border-[#C9A06A] text-[#C9A06A] font-semibold text-[13px] px-8 py-3 rounded-md transition-colors duration-300 tracking-wider uppercase text-center"
              >
                Explore Dining
              </motion.a>
            </Reveal>
          </div>

          {/* ── Right Images Grid ── */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-3 lg:gap-5">
            <Reveal delay={0.2} className="h-full">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-[16px]">
                <ImageWithFallback
                  src={dining1}
                  alt="Dining Hall"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.25} className="h-full">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-[16px]">
                <ImageWithFallback
                  src={dining2}
                  alt="Delicious Food"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="h-full">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-[16px]">
                <ImageWithFallback
                  src={dining3}
                  alt="Outdoor Dining"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
