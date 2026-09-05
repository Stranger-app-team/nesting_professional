import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './common/Reveal'
import birdSvgImage from '../assets/image/Bird Svg.svg'

const whyUsData = [
  {
    title: "01 — Comfort That Feels Natural",
    content: "Thoughtfully designed rooms, cozy spaces, and everything you need for a relaxed stay."
  },
  {
    title: "02 — Right Where You Need to Be",
    content: "Conveniently located near Pune’s IT hubs, major destinations, and the stadium, so the city is never too far away."
  },
  {
    title: "03 — A Hotel With Personality",
    content: "From our playful identity to our interiors, Chidiya Ghar has a distinctive character without trying too hard."
  },
  {
    title: "04 — Hospitality, Made Personal",
    content: "Friendly, attentive service that makes you feel welcomed rather than simply checked in."
  },
  {
    title: "05 — Easy Stays, Good Memories",
    content: "Whether you're here for work, a match, a quick city visit, or a longer stay, we make coming back to your room the best part of the day."
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
      <img
        src={birdSvgImage}
        alt="Chidiya Ghar Birds"
        className="w-full min-w-[520px] max-w-none h-auto object-cover select-none pointer-events-none"
      />
    </div>
  )
}

export default function About() {
  const [openAccordion, setOpenAccordion] = useState(0)
  const cardShadow = '0 20px 45px -8px rgba(0, 0, 0, 0.14), 0 8px 18px -4px rgba(0, 0, 0, 0.06)'

  return (
    <section id="about" style={{ backgroundColor: '#FAF6F1' }} className="pt-8 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          
          {/* ─── About Us ─── */}
          <div
            className="rounded-[20px] pt-7 px-7 lg:pt-10 lg:px-10 pb-[3px] relative overflow-hidden flex flex-col justify-between h-full min-h-[520px] lg:min-h-[580px] scroll-mt-24"
            style={{ 
              backgroundColor: '#FDF8F4',
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <style>{`
              .about-scroll-container::-webkit-scrollbar {
                width: 4px;
              }
              .about-scroll-container::-webkit-scrollbar-track {
                background: rgba(123, 45, 22, 0.04);
                border-radius: 4px;
              }
              .about-scroll-container::-webkit-scrollbar-thumb {
                background: rgba(123, 45, 22, 0.25);
                border-radius: 4px;
              }
              .about-scroll-container::-webkit-scrollbar-thumb:hover {
                background: rgba(123, 45, 22, 0.5);
              }
            `}</style>

            <div className="shrink-0 mb-3">
              <Reveal type="fade">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-1">
                  About Us
                </p>
              </Reveal>
            </div>

            <div className="relative flex-1 min-h-0 my-2">
              <div className="about-scroll-container overflow-y-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[500px] pr-3 pb-12 space-y-4 text-[13.5px] sm:text-[14px] leading-relaxed text-[#555]">
                
                <div className="space-y-2.5">
                  <p className="font-display text-[18px] sm:text-[21px] lg:text-[23px] font-normal text-[#1a1a1a] leading-snug">
                    Chidiya Ghar is more than just a place to stay. It’s a thoughtfully crafted experience for those who value comfort, character, and a little something different.
                  </p>
                  <p className="text-[#666]">
                    Whether you're visiting Pune for work, catching a game, meeting friends, or simply taking a break from your everyday routine, Chidiya Ghar gives you a comfortable place to settle in.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#7B2D16]/10 space-y-2.5">
                  <h3 className="font-display text-[16px] sm:text-[18px] font-normal text-[#1a1a1a] leading-tight">
                    Made for Days That Don't Go According to Plan.
                  </h3>
                  <div className="space-y-1">
                    <span className="block font-medium text-[#1a1a1a]">Meeting ran late?</span>
                    <span className="block font-medium text-[#1a1a1a]">Traffic took its time?</span>
                    <span className="block font-medium text-[#1a1a1a]">Decided to stay the night?</span>
                    <p className="font-semibold text-[#7B2D16] pt-1">
                      That's exactly where we come in.
                    </p>
                  </div>
                  <p className="text-[#666]">
                    Chidiya Ghar combines thoughtful hospitality with modern comfort — so whether you're here for business or simply passing through, your stay feels effortless.
                  </p>
                </div>

              </div>
              
              <div 
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FDF8F4] via-[#FDF8F4]/80 to-transparent z-10" 
              />
            </div>
            
            <div className="shrink-0 w-full mb-[3px] z-20 relative">
              <BirdsOnWire />
            </div>
          </div>

          {/* ─── Why Chidiya Ghar ─── */}
          <div 
            className="bg-[#FDF8F4] rounded-[20px] p-7 lg:p-10 flex flex-col h-full"
            style={{ 
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div className="flex flex-col flex-1 h-full overflow-hidden relative">
              <Reveal type="fade">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-2.5">
                  Why Us
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-[24px] lg:text-[28px] font-normal text-[#1a1a1a] mb-2">
                  Why Chidiya Ghar?
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
                      Comfort Without the Complication
                    </h3>
                    <p className="text-[#666] text-[13.5px] leading-relaxed">
                      We keep things simple: a comfortable room, a welcoming atmosphere, thoughtful details, and service that feels personal.
                    </p>
                    <p className="text-[#666] text-[13.5px] leading-relaxed">
                      From the moment you arrive to the moment you check out, our goal is to make your stay smooth, relaxed, and memorable.
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
