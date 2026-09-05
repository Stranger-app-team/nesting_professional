import { motion } from 'framer-motion'
import Reveal from './common/Reveal'
import meetingImg from '../assets/image/meeting-banner.jpg'

export default function MeetingBanner() {
  return (
    <section className="relative overflow-hidden w-full bg-[#EDE5DA] border-t border-[#7B2D16]/12">
      {/* ── Background Image Layer with seamless left gradient fade (Hero-inspired) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src={meetingImg}
          alt="Hotel workspace with city view"
          className="w-full h-full object-cover object-right md:object-center"
        />

        {/* Seamless bilateral gradient: solid warm cream on left & right, transparent in the middle for workspace photo */}
        <div 
          className="absolute inset-0 bg-[#EDE5DA]/90 md:bg-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, #EDE5DA 0%, #EDE5DA 22%, rgba(237,229,218,0.75) 32%, transparent 44%, transparent 60%, rgba(237,229,218,0.8) 72%, #EDE5DA 82%, #EDE5DA 100%)`
          }}
        />
      </div>

      {/* ── Content Layer ── */}
      <div className="relative z-10 max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 py-9 sm:py-11 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left text block */}
        <div className="max-w-[480px] z-10">
          <Reveal delay={0.1}>
            <h2
              className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#1a1a1a] leading-[1.15] mb-2"
             
            >
              Got a Meeting Tomorrow?
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-[#666] text-[14px] sm:text-[15px] leading-relaxed mb-5 font-normal">
              You might as well make tonight comfortable.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-[#7B2D16] text-white font-semibold text-[13px] px-7 py-2.5 rounded-lg transition-colors duration-200 tracking-wide shadow-md"
            >
              Book Your Stay
            </motion.a>
          </Reveal>
        </div>

        {/* Right cursive script words (Meet / Work / Explore / Relax / Repeat) */}
        <div className="flex flex-col items-center sm:items-end justify-center z-10 pr-2 lg:pr-8 select-none">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col items-center sm:items-end text-[#7B2D16] text-[22px] sm:text-[27px] leading-[1.22] tracking-wide"
            style={{ fontStyle: 'italic', fontWeight: 500 }}
          >
            <span className="transform rotate-[-3deg]">Meet </span>
            <span className="transform rotate-[2deg] sm:mr-2">Work</span>
            <span className="transform rotate-[-2deg] sm:mr-4">Explore</span>
            <span className="transform rotate-[2deg] sm:mr-1">Relax</span>
            <span className="transform rotate-[-1deg] font-semibold text-[#6a2513]">Repeat</span>
            
            {/* Subtle brush underline underneath Repeat */}
            <div className="w-10 h-0.5 bg-[#7B2D16]/50 rounded-full mt-1.5 sm:mr-1" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
