import { motion } from 'framer-motion'
import Reveal from './common/Reveal'
import roomIcon from '../assets/image/room.svg'
import commonareaIcon from '../assets/image/commonarea.svg'
import securityIcon from '../assets/image/security.svg'
import housekeepingIcon from '../assets/image/housekeeping.svg'
import carIcon from '../assets/image/car.svg'
import recreationIcon from '../assets/image/recreation.svg'
import locationIcon from '../assets/image/location.svg'
import birdSvgImage from '../assets/image/Bird Svg.svg'

const amenities = [
  { icon: roomIcon,        name: 'Comfortable Rooms' },
  { icon: commonareaIcon,  name: 'Clean Common Areas' },
  { isWifi: true,          name: 'High-Speed Wi-Fi' },
  { icon: securityIcon,    name: '24×7 Security' },
  { icon: housekeepingIcon,name: 'Housekeeping' },
  { icon: carIcon,         name: 'Secure Parking' },
  { icon: recreationIcon,  name: 'Recreational Spaces' },
  { icon: locationIcon,    name: 'Prime Location' },
]

// Simple, clean Wi-Fi icon
function SimpleWifiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B2D16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="#7B2D16" stroke="none" />
    </svg>
  )
}

// Birds illustration — imported Bird Svg.svg covering almost full card width
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

// Amenity item component: bold title, clean icon badge, expanded tile layout
function AmenityItem({ icon, isWifi, name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="flex items-center gap-4 p-4 lg:p-5 rounded-[16px] bg-[#FAF6F1]/85 hover:bg-[#FAF6F1] transition-all duration-200 border border-black/[0.03] shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
    >
      {/* Icon badge — 12px radius */}
      <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white rounded-[12px] shadow-sm">
        {isWifi ? (
          <SimpleWifiIcon />
        ) : (
          <img
            src={icon}
            alt=""
            className="w-5 h-5"
            style={{ filter: 'sepia(100%) saturate(500%) hue-rotate(-25deg) brightness(0.45)' }}
          />
        )}
      </div>
      <div>
        <h4 className="font-bold text-[#1a1a1a] text-[15px] lg:text-[16px] leading-snug">{name}</h4>
      </div>
    </motion.div>
  )
}

export default function AmenitiesAbout() {
  const cardShadow = '0 20px 45px -8px rgba(0, 0, 0, 0.14), 0 8px 18px -4px rgba(0, 0, 0, 0.06)'

  return (
    <section id="amenities" style={{ backgroundColor: '#FAF6F1' }} className="pt-8 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">

          {/* ─── Left: Amenities ─── */}
          <div 
            className="bg-white rounded-[20px] p-7 lg:p-10 flex flex-col justify-between h-full"
            style={{
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div className="flex flex-col flex-1">
              <Reveal type="fade">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-2.5">
                  Amenities
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="font-display text-[26px] lg:text-[32px] font-normal text-[#1a1a1a] mb-6"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
                  Everything You Need
                </h2>
              </Reveal>

              {/* 2-column amenity grid filling available space */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:gap-4 flex-1 mb-8 content-between">
                {amenities.map((item, i) => (
                  <AmenityItem key={item.name} {...item} index={i} />
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Reveal delay={0.35}>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block bg-[#7B2D16] text-white font-semibold text-[13px] px-8 py-3 rounded-md transition-colors duration-200 tracking-wide"
                >
                  View All Amenities
                </motion.a>
              </Reveal>
            </div>
          </div>

          {/* ─── Right: About Us ─── */}
          <div
            id="about"
            className="rounded-[20px] pt-7 px-7 lg:pt-10 lg:px-10 pb-[3px] relative overflow-hidden flex flex-col justify-between h-full min-h-[520px] lg:min-h-[580px] scroll-mt-24"
            style={{ 
              backgroundColor: '#FDF8F4',
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            {/* Custom scrollbar styles */}
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

            {/* Top Fixed Header */}
            <div className="shrink-0 mb-3">
              <Reveal type="fade">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-1">
                  About Us
                </p>
              </Reveal>
            </div>

            {/* Scrollable Content Container with Bottom Fade */}
            <div className="relative flex-1 min-h-0 my-2">
              <div className="about-scroll-container overflow-y-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[500px] pr-3 pb-12 space-y-4 text-[13.5px] sm:text-[14px] leading-relaxed text-[#555]">
                
                {/* 1. Direct Content after About Us (no "Stay Somewhere With a Story" line) */}
                <div className="space-y-2.5">
                  <p className="font-display text-[18px] sm:text-[21px] lg:text-[23px] font-normal text-[#1a1a1a] leading-snug" style={{ fontFamily: '"Fraunces", serif' }}>
                    Chidiya Ghar is more than just a place to stay. It’s a boutique hotel created for people who appreciate comfort, character, and a little something different.
                  </p>
                  <p className="text-[#666]">
                    Whether you're visiting Pune for work, catching a game, meeting friends, or simply taking a break from your everyday routine, Chidiya Ghar gives you a comfortable place to settle in.
                  </p>
                </div>

                {/* 2. Made for Days That Don't Go According to Plan */}
                <div className="pt-3 border-t border-[#7B2D16]/10 space-y-2.5">
                  <h3 className="font-display text-[16px] sm:text-[18px] font-normal text-[#1a1a1a] leading-tight" style={{ fontFamily: '"Fraunces", serif' }}>
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

                {/* 3. Why Chidiya Ghar? */}
                <div className="pt-3 border-t border-[#7B2D16]/10 space-y-3">
                  <h3 className="font-display text-[16px] sm:text-[18px] font-normal text-[#1a1a1a]" style={{ fontFamily: '"Fraunces", serif' }}>
                    Why Chidiya Ghar?
                  </h3>

                  <div className="space-y-2.5">
                    <div>
                      <p className="font-bold text-[#7B2D16] text-[13px]">01 — Comfort That Feels Natural</p>
                      <p className="text-[#666] text-[12.5px] leading-snug">Thoughtfully designed rooms, cozy spaces, and everything you need for a relaxed stay.</p>
                    </div>

                    <div>
                      <p className="font-bold text-[#7B2D16] text-[13px]">02 — Right Where You Need to Be</p>
                      <p className="text-[#666] text-[12.5px] leading-snug">Conveniently located near Pune’s IT hubs, major destinations, and the stadium, so the city is never too far away.</p>
                    </div>

                    <div>
                      <p className="font-bold text-[#7B2D16] text-[13px]">03 — A Hotel With Personality</p>
                      <p className="text-[#666] text-[12.5px] leading-snug">From our playful identity to our interiors, Chidiya Ghar has a distinctive character without trying too hard.</p>
                    </div>

                    <div>
                      <p className="font-bold text-[#7B2D16] text-[13px]">04 — Hospitality, Made Personal</p>
                      <p className="text-[#666] text-[12.5px] leading-snug">Friendly, attentive service that makes you feel welcomed rather than simply checked in.</p>
                    </div>

                    <div>
                      <p className="font-bold text-[#7B2D16] text-[13px]">05 — Easy Stays, Good Memories</p>
                      <p className="text-[#666] text-[12.5px] leading-snug">Whether you're here for work, a match, a quick city visit, or a longer stay, we make coming back to your room the best part of the day.</p>
                    </div>
                  </div>
                </div>

                {/* 4. Comfort Without the Complication */}
                <div className="pt-3 border-t border-[#7B2D16]/10 space-y-2">
                  <h3 className="font-display text-[16px] sm:text-[18px] font-normal text-[#1a1a1a]" style={{ fontFamily: '"Fraunces", serif' }}>
                    Comfort Without the Complication
                  </h3>
                  <p className="text-[#666]">
                    We keep things simple: a comfortable room, a welcoming atmosphere, thoughtful details, and service that feels personal.
                  </p>
                  <p className="text-[#666]">
                    From the moment you arrive to the moment you check out, our goal is to make your stay smooth, relaxed, and memorable.
                  </p>
                </div>

              </div>

              {/* Bottom Fade Gradient Mask over the scroll container */}
              <div 
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FDF8F4] via-[#FDF8F4]/80 to-transparent z-10" 
              />
            </div>
            
            {/* Bottom Image container positioned with exactly 3px margin-bottom */}
            <div className="shrink-0 w-full mb-[3px] z-20 relative">
              <BirdsOnWire />
            </div>
          </div>

        </div>

        {/* ─── Location & Dining Grid ─── */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-stretch mt-4 lg:mt-5">
          {/* Location */}
          <div 
            className="bg-[#FDF8F4] rounded-[20px] p-7 lg:p-10 flex flex-col justify-between"
            style={{ 
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div>
              <Reveal type="fade">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-2.5">
                  Location
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-[24px] lg:text-[28px] font-normal text-[#1a1a1a] mb-4" style={{ fontFamily: '"Fraunces", serif' }}>
                  A Short Commute Can Make a Long Day Better
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="text-[#666] text-[14px] leading-relaxed space-y-2.5">
                  <p>Located close to major IT parks and city attractions, Chidiya Ghar keeps your work, meetings, and evening plans within easy reach.</p>
                  <p className="font-semibold text-[#1a1a1a]">Less time commuting. More time for yourself.</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Dining */}
          <div 
            className="bg-[#FDF8F4] rounded-[20px] p-7 lg:p-10 flex flex-col justify-between"
            style={{ 
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div>
              <Reveal type="fade">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-2.5">
                  Dining
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-[24px] lg:text-[28px] font-normal text-[#1a1a1a] mb-4" style={{ fontFamily: '"Fraunces", serif' }}>
                  One Less Thing to Plan
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="text-[#666] text-[14px] leading-relaxed space-y-2.5">
                  <p>When the day is packed, finding dinner shouldn't become another meeting.</p>
                  <p>Enjoy convenient dining options and take a well-deserved break without going too far.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
