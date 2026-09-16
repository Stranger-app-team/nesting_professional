import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './common/Reveal'
import birdSvgImage from '../assets/image/Bird Svg.svg'
import birdVideo from '../assets/logo/1000253046.mp4'

const whyUsData = [
  {
    title: "01 — Hotel Comfort, Home Warmth",
    content: "Enjoy the cleanliness, privacy, and amenities of a quality hotel with the relaxed, welcoming atmosphere of home."
  },
  {
    title: "02 — Truly Flexible Duration",
    content: "Stay for a day, a week, a month, or as long as your assignment lasts — with zero long-term lease lock-ins or brokerage."
  },
  {
    title: "03 — Affordable Professional Living",
    content: "A practical alternative designed to bridge the gap between high-cost hotels, serviced apartments, and restrictive PGs."
  },
  {
    title: "04 — Community & Networking",
    content: "Connect with like-minded corporate employees, tech talent, startup teams, athletes, and visiting professionals."
  },
  {
    title: "05 — Responsible Living & Decorum",
    content: "A peaceful, disciplined, and courteous environment where everyone enjoys flexibility while respecting society decorum and privacy."
  }
]

function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-[#7B2D16]/10 last:border-b-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-bold text-[#7B2D16] text-[13px] lg:text-[14px] group-hover:text-[#6a2513] transition-colors">
          {item.title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#7B2D16] ml-4 shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-[#666] text-[13px] leading-relaxed pr-8">
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function BirdsOnWire() {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center h-[48px] sm:h-[56px] relative">
      <video
        src={birdVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full min-w-[520px] max-w-none h-auto object-cover select-none pointer-events-none mix-blend-multiply"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect'
        }}
      />
    </div>
  )
}

export default function About() {
  const [openAccordion, setOpenAccordion] = useState(0)
  const cardShadow = '0 20px 45px -8px rgba(0, 0, 0, 0.14), 0 8px 18px -4px rgba(0, 0, 0, 0.06)'

  return (
    <section id="about" style={{ backgroundColor: '#2A1205' }} className="pt-20 lg:pt-24 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          
          {/* ─── The Concept & Philosophy ─── */}
          <div
            className="rounded-[20px] pt-7 px-7 lg:pt-10 lg:px-10 pb-[3px] relative overflow-hidden flex flex-col justify-between h-full min-h-[520px] lg:min-h-[580px] scroll-mt-24"
            style={{ 
              backgroundColor: '#FDF8F4',
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div className="shrink-0 mb-3">
              <Reveal type="fade">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase whitespace-nowrap">
                    About Us
                  </p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#7B2D16] shrink-0">
                    <path d="M5 14C8 11 12 11 16 13C17 11 19 9 21 11C20 14 16 17 12 16C8 15 6 18 3 17C2 16 3 15 5 14Z" fill="currentColor"/>
                  </svg>
                  <div className="w-20 sm:w-32 h-[1px] bg-[#7B2D16]/30"></div>
                </div>
              </Reveal>
            </div>

            <div className="relative flex-1 min-h-0 my-2">
              <div className="pr-1 pb-4 flex flex-col justify-center h-full">
                
                <div className="space-y-6">
                  {/* Headline */}
                  <h3 className="font-display text-[20px] sm:text-[24px] lg:text-[26px] font-normal text-[#1a1a1a] leading-snug">
                    A modern, professionally managed home-away-from-home for nesting professionals.
                  </h3>
                  
                  {/* Summary Concept Paragraph */}
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    Nest comfortably while pursuing your work. We provide a practical living community that bridges the gap between <strong className="font-medium text-[#7B2D16]">expensive hotels and traditional PGs</strong>—free from high costs and rigid limitations.
                  </p>

                  <div className="w-12 h-[1px] bg-[#7B2D16]/20"></div>

                  {/* Summary Philosophy Paragraph */}
                  <div className="space-y-2">
                    <h4 className="font-display text-[16px] sm:text-[18px] font-normal text-[#1a1a1a]">
                      The Philosophy
                    </h4>
                    <p className="text-[#555] text-[14.5px] leading-relaxed">
                      Like birds in a nest, we bring together professionals from diverse industries. It's more than accommodation—it's <strong className="font-medium text-[#7B2D16]">the comfort of home with total flexibility</strong>.
                    </p>
                  </div>
                  
                  {/* Quote */}
                  <div className="p-4 rounded-[12px] bg-[#7B2D16]/5 border border-[#7B2D16]/10">
                    <p className="font-medium text-[#7B2D16] text-[13px] italic leading-relaxed text-center">
                      "Everyone has somewhere to go and a journey to pursue—for the duration of your stay, Chidiya Ghar becomes your nest."
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#7B2D16]/10 flex flex-col gap-2.5 items-center justify-center">
                  <p className="text-[#7B2D16] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-center">
                    Freedom of living comes with responsibility.
                  </p>
                  <p className="text-[#7B2D16] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-center opacity-70">
                    A preferred partner for corporate tie-ups & sports delegations.
                  </p>
                </div>

              </div>
            </div>
            
            <div className="shrink-0 w-full mb-[3px] z-20 relative">
              <BirdsOnWire />
            </div>
          </div>

          {/* ─── The Chidiya Ghar Advantage ─── */}
          <div 
            className="bg-[#FDF8F4] rounded-[20px] p-7 lg:p-10 flex flex-col h-full"
            style={{ 
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div className="flex flex-col flex-1 h-full overflow-hidden relative">
              <Reveal type="fade">
                <div className="flex items-center gap-3 mb-2.5">
                  <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase whitespace-nowrap">
                    The Advantage
                  </p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#7B2D16] shrink-0">
                    <path d="M5 14C8 11 12 11 16 13C17 11 19 9 21 11C20 14 16 17 12 16C8 15 6 18 3 17C2 16 3 15 5 14Z" fill="currentColor"/>
                  </svg>
                  <div className="w-20 sm:w-32 h-[1px] bg-[#7B2D16]/30"></div>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-[24px] lg:text-[28px] font-normal text-[#1a1a1a] mb-2">
                  A Home Without Long-Term Commitments
                </h2>
              </Reveal>
              
              <div className="flex-1 overflow-y-auto pr-2 pb-10 custom-scrollbar max-h-[500px]">
                <Reveal delay={0.12}>
                  <div className="flex flex-col">
                    {whyUsData.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        item={item} 
                        isOpen={openAccordion === index}
                        onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                      />
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="mt-2 pt-4 border-t border-[#7B2D16]/10 space-y-2">
                    <h3 className="font-display text-[16px] sm:text-[18px] font-normal text-[#1a1a1a]">
                      Bridging the Living Gap
                    </h3>
                    <p className="text-[#666] text-[13.5px] leading-relaxed">
                      Chidiya Ghar bridges the gap between hotels, serviced apartments, rentals, and PGs — offering professionals a flexible place to stay that fits their work, timeline, and lifestyle.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div 
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FDF8F4] via-[#FDF8F4]/80 to-transparent z-10" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
