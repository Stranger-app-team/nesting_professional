import { motion } from 'framer-motion'
import Reveal from './common/Reveal'

// Bed Icon matching brand stroke color
const BedSparkleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 72 68" fill="none" stroke="#7B2D16" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
    {/* Sparkles on top */}
    <path d="M22 11l1.5-3 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5z" fill="#7B2D16" stroke="none" />
    <path d="M36 7l2-4 2 4 4 2-4 2-2 4-2-4-4-2z" fill="#7B2D16" stroke="none" />
    <path d="M48 12l1.2-2.4 1.2 2.4 2.4 1.2-2.4 1.2-1.2 2.4-1.2-2.4-2.4-1.2z" fill="#7B2D16" stroke="none" />
    
    {/* Bed pillows */}
    <rect x="15" y="24" width="18" height="10" rx="3" />
    <rect x="39" y="24" width="18" height="10" rx="3" />
    
    {/* Headboard */}
    <path d="M10 20v14" />
    <path d="M62 20v14" />
    <path d="M10 24h52" />
    
    {/* Bed Mattress & Base */}
    <rect x="8" y="34" width="56" height="8" rx="2" />
    <path d="M8 42h56v8H8z" />
    <path d="M14 50v8 M58 50v8" />
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="#65A30D" />
    <path d="M7 12.5L10.5 16L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="#DC2626" />
    <path d="M8 8L16 16M16 8L8 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PRICING_PLANS = [
  {
    id: 'standard',
    title: 'Standard Room',
    price: '₹ 3,057.65',
    unit: '/Night',
    isPopular: false,
    features: [
      { text: 'Spacious Double Bed', included: true },
      { text: 'Natural Light & Fresh Air', included: true },
      { text: 'Work-Friendly Space', included: true },
      { text: 'Private Balcony', included: false },
    ],
    buttonText: 'BOOK NOW →',
    buttonStyle: 'outlined',
  },
  {
    id: 'balcony',
    title: 'Standard Room with Balcony',
    price: '₹ 3,292.94',
    unit: '/Night',
    isPopular: true,
    badgeText: 'MOST POPULAR',
    features: [
      { text: 'Spacious Double Bed', included: true },
      { text: 'Natural Light & Fresh Air', included: true },
      { text: 'Work-Friendly Space', included: true },
      { text: 'Private Balcony', included: true },
    ],
    buttonText: 'BOOK NOW →',
    buttonStyle: 'filled',
  },
]

export default function PricingSection() {
  const cardShadow = '0 20px 45px -8px rgba(0, 0, 0, 0.14), 0 8px 18px -4px rgba(0, 0, 0, 0.06)'

  const handleBookNow = (planTitle) => {
    const event = new CustomEvent('openInquiry', {
      detail: { roomType: planTitle }
    })
    window.dispatchEvent(event)
  }

  return (
    <section id="pricing" style={{ backgroundColor: '#FAF6F1' }} className="pt-6 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        
        {/* Section Header matching Amenities & Rooms */}
        <div className="text-center mb-8 lg:mb-8">
          <Reveal type="fade">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="w-10 h-[1px] bg-[#7B2D16]/30"></div>
              <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase">
                Room Tariff & Packages
              </p>
              <div className="w-10 h-[1px] bg-[#7B2D16]/30"></div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display text-[26px] lg:text-[32px] font-normal text-[#1a1a1a]">
              Simple & Transparent Pricing
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[#666] text-[13px] sm:text-[14px] max-w-[720px] mx-auto leading-relaxed mt-2">
              All-inclusive rates crafted for business travelers, IT professionals, students, and guests seeking comfortable stays in Balewadi, Pune.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Pricing Cards Container */}
        <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-[20px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'border-2 border-[#7B2D16]/30'
                  : 'border border-[#7B2D16]/10'
              }`}
              style={{
                boxShadow: cardShadow,
                borderRadius: '20px',
              }}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 right-6 bg-[#7B2D16] text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {plan.badgeText}
                </div>
              )}

              <div>
                {/* Icon */}
                <BedSparkleIcon />

                {/* Title */}
                <h3 className="font-bold text-[#7B2D16] text-[20px] lg:text-[22px] mb-6 leading-tight">
                  {plan.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? <CheckIcon /> : <CrossIcon />}
                      <span className="text-[13px] sm:text-[14px] font-medium text-[#444]">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price & CTA */}
              <div className="pt-5 border-t border-[#7B2D16]/10">
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[26px] lg:text-[30px] font-extrabold text-[#7B2D16]">
                    {plan.price}
                  </span>
                  <span className="text-[12px] font-semibold text-[#666] tracking-wider uppercase">
                    {plan.unit}
                  </span>
                </div>

                {/* Book Now Button */}
                <motion.button
                  onClick={() => handleBookNow(plan.title)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2.5 rounded-full font-semibold text-[13px] tracking-wider uppercase transition-all duration-200 ${
                    plan.buttonStyle === 'filled'
                      ? 'bg-[#7B2D16] text-white hover:bg-[#6a2513] shadow-sm'
                      : 'border border-[#7B2D16] text-[#7B2D16] hover:bg-[#7B2D16] hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
