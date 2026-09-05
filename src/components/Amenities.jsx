import { motion } from 'framer-motion'
import { BedDouble, Sparkles, Wifi, ShieldCheck, Brush, CircleParking, Gamepad2, MapPin } from 'lucide-react'
import Reveal from './common/Reveal'

const amenities = [
  { icon: BedDouble,        name: 'Comfortable Rooms',   desc: 'Thoughtfully designed spaces for a restful stay.' },
  { icon: Sparkles,         name: 'Clean Common Areas',  desc: 'Hygienic and well-maintained shared spaces.' },
  { icon: Wifi,             name: 'High-Speed Wi-Fi',    desc: 'Complimentary internet access throughout the property.' },
  { icon: ShieldCheck,      name: '24×7 Security',       desc: 'Round the clock security and surveillance for your safety.' },
  { icon: Brush,            name: 'Housekeeping',        desc: 'Daily housekeeping to keep your space fresh and clean.' },
  { icon: CircleParking,    name: 'Secure Parking',      desc: 'Safe and convenient on-site parking available.' },
  { icon: Gamepad2,         name: 'Recreational Spaces', desc: 'Areas to unwind, relax and socialize.' },
  { icon: MapPin,           name: 'Prime Location',      desc: 'Centrally located with easy access to major hubs.' },
]

function AmenityItem({ icon: Icon, name, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="flex flex-col items-center text-center p-4 lg:p-5 relative group"
    >
      <div className="w-10 h-10 shrink-0 flex items-center justify-center text-[#7B2D16] mb-3 transition-transform group-hover:scale-110 duration-300">
        <Icon className="w-[28px] h-[28px]" strokeWidth={1.5} />
      </div>
      <div>
        <h4 className="font-bold text-[#7B2D16] text-[13px] lg:text-[14px] leading-tight mb-2">{name}</h4>
        <p className="text-[#666] text-[11px] lg:text-[12px] leading-relaxed max-w-[180px] mx-auto">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Amenities() {
  const cardShadow = '0 20px 45px -8px rgba(0, 0, 0, 0.14), 0 8px 18px -4px rgba(0, 0, 0, 0.06)'

  return (
    <section id="amenities" style={{ backgroundColor: '#FAF6F1' }} className="pt-8 pb-16 scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">
        
        <div className="mb-4 lg:mb-5">
          <div 
            className="bg-white rounded-[20px] p-7 lg:p-8 flex flex-col"
            style={{
              boxShadow: cardShadow,
              borderRadius: '20px'
            }}
          >
            <div className="flex flex-col">
              <div className="text-center mb-2">
                <Reveal type="fade">
                  <div className="flex items-center justify-center gap-3 mb-2.5">
                    <div className="w-10 h-[1px] bg-[#7B2D16]/30"></div>
                    <p className="text-[12px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase">
                      Our Amenities
                    </p>
                    <div className="w-10 h-[1px] bg-[#7B2D16]/30"></div>
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="font-display text-[26px] lg:text-[32px] font-normal text-[#1a1a1a]">
                    Everything You Need
                  </h2>
                </Reveal>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 mb-6 divide-x divide-y sm:divide-y-0 border-t border-b sm:border-b-0 sm:border-transparent border-[#7B2D16]/10 sm:divide-[#7B2D16]/10">
                {amenities.map((item, i) => (
                  <div key={item.name} className={`
                    ${i >= 4 ? 'sm:border-t sm:border-[#7B2D16]/10' : ''} 
                    ${i % 4 === 0 ? 'sm:border-l-0' : ''}
                  `}>
                    <AmenityItem {...item} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
