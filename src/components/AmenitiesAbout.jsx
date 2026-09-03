import { motion } from 'framer-motion'
import Reveal from './common/Reveal'
import wifiIcon from '../assets/image/wifi.svg'
import roomIcon from '../assets/image/room.svg'
import carIcon from '../assets/image/car.svg'
import securityIcon from '../assets/image/security.svg'
import housekeepingIcon from '../assets/image/housekeeping.svg'
import locationIcon from '../assets/image/location.svg'

const amenities = [
  { icon: wifiIcon,        name: 'Complimentary Wi-Fi',      desc: 'High speed internet access throughout the property.' },
  { icon: locationIcon,    name: 'Travel Desk',               desc: 'Assistance with travel, sightseeing & more.' },
  { icon: roomIcon,        name: 'Multi-cuisine Restaurant',  desc: 'Delicious meals crafted by expert chefs.' },
  { icon: housekeepingIcon,name: 'Laundry Service',           desc: 'Quick and efficient laundry service.' },
  { icon: securityIcon,    name: '24/7 Room Service',         desc: 'Round the clock service for your comfort.' },
  { icon: carIcon,         name: 'Secure Parking',            desc: 'Safe and convenient parking space.' },
]

// Birds on wire — exactly matching reference image (5 birds sitting on a thin wire)
function BirdsOnWire() {
  return (
    <div className="mt-8 overflow-hidden">
      <svg viewBox="0 0 500 110" className="w-full h-auto" fill="none">
        {/* Wire */}
        <line x1="0" y1="76" x2="500" y2="76" stroke="#7B2D16" strokeWidth="1.2" opacity="0.6" />

        {/* Bird 1 — small sitting */}
        <g transform="translate(55,40)" fill="#7B2D16">
          <ellipse cx="11" cy="8" rx="7" ry="5" />
          <path d="M0 20C4 10 10 7 16 12C22 7 27 10 30 18C27 22 21 17 16 19C10 17 4 22 0 18Z"/>
          <path d="M16 19L15 28" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M15 28L11 32" stroke="#7B2D16" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M15 28L18 32" stroke="#7B2D16" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M16 10L20 7" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
        </g>

        {/* Bird 2 — medium sitting */}
        <g transform="translate(120,34)" fill="#7B2D16">
          <ellipse cx="13" cy="9" rx="8" ry="5.5" />
          <path d="M0 22C5 10 12 7 19 13C26 7 31 10 34 20C31 25 24 18 19 21C12 18 5 25 0 21Z"/>
          <path d="M19 21L18 31" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M18 31L13 36" stroke="#7B2D16" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M18 31L22 36" stroke="#7B2D16" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M19 11L23 8" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
        </g>

        {/* Bird 3 — large, center */}
        <g transform="translate(205,26)" fill="#7B2D16">
          <ellipse cx="17" cy="10" rx="10" ry="7" />
          <path d="M0 26C6 10 16 6 24 14C32 6 40 10 44 24C40 30 30 21 24 24C16 21 6 30 0 24Z"/>
          <path d="M24 24L23 36" stroke="#7B2D16" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M23 36L17 42" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M23 36L28 42" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M24 12L29 9" stroke="#7B2D16" strokeWidth="1.2" strokeLinecap="round"/>
        </g>

        {/* Bird 4 — medium */}
        <g transform="translate(315,34)" fill="#7B2D16">
          <ellipse cx="13" cy="9" rx="8" ry="5.5" />
          <path d="M0 22C5 10 12 7 19 13C26 7 31 10 34 20C31 25 24 18 19 21C12 18 5 25 0 21Z"/>
          <path d="M19 21L18 31" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M18 31L13 36" stroke="#7B2D16" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M18 31L22 36" stroke="#7B2D16" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M19 11L23 8" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
        </g>

        {/* Bird 5 — taking off, wings up */}
        <g transform="translate(400,18)" fill="#7B2D16">
          <ellipse cx="13" cy="8" rx="8" ry="5" />
          {/* Body */}
          <path d="M0 22C4 8 13 3 20 10C28 3 36 7 38 20C35 26 28 18 20 21C13 18 5 27 0 22Z" transform="rotate(-25 20 16)"/>
          {/* Wing left raised */}
          <path d="M0 14C-8 5 -12 -2 -6 -4C0 -6 6 4 8 14" transform="translate(8,14)"/>
          {/* Wing right raised */}
          <path d="M0 14C8 5 12 -2 6 -4C0 -6 -6 4 -8 14" transform="translate(28,14)"/>
          <path d="M20 22L19 32" stroke="#7B2D16" strokeWidth="1" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  )
}

// SVG amenity icon wrapper
function AmenityItem({ icon, name, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="flex items-start gap-3"
    >
      {/* Icon circle */}
      <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#F5EDE8] rounded-full mt-0.5">
        <img
          src={icon}
          alt=""
          className="w-5 h-5"
          style={{ filter: 'sepia(100%) saturate(500%) hue-rotate(-25deg) brightness(0.45)' }}
        />
      </div>
      <div>
        <h4 className="font-bold text-[#1a1a1a] text-[13px] mb-0.5">{name}</h4>
        <p className="text-[#777] text-[12px] leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function AmenitiesAbout() {
  return (
    <section id="amenities" style={{ backgroundColor: '#FAF6F1' }} className="py-14">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ─── Left: Amenities ─── */}
          <div>
            <Reveal type="fade">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-3">
                Amenities
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-[28px] lg:text-[34px] font-normal text-[#1a1a1a] mb-8"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Everything You Need
              </h2>
            </Reveal>

            {/* 2-column amenity grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 mb-9">
              {amenities.map((item, i) => (
                <AmenityItem key={item.name} {...item} index={i} />
              ))}
            </div>

            <Reveal delay={0.35}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[#7B2D16] text-white font-semibold text-[13px] px-7 py-[11px] rounded-md transition-colors duration-200 tracking-wide"
              >
                View All Amenities
              </motion.a>
            </Reveal>
          </div>

          {/* ─── Right: About Us ─── */}
          <div
            className="rounded-xl p-8 lg:p-10 relative overflow-hidden"
            style={{ backgroundColor: '#FDF8F4' }}
          >
            <Reveal type="fade">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-3">
                About Us
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-[24px] lg:text-[30px] font-normal text-[#1a1a1a] mb-5 relative inline-block"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                A Home Away From Home
                {/* Decorative dot */}
                <span className="text-[#7B2D16] text-[32px] absolute -right-4 -bottom-2 leading-none">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-[#666] text-[13px] leading-relaxed mb-7">
                At Chidiya Ghar, we believe hospitality is about creating memories. Our boutique hotel offers a perfect blend of warmth, comfort and personalized service.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <motion.a
                href="#philosophy"
                whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[#7B2D16] text-white font-semibold text-[13px] px-7 py-[11px] rounded-md transition-colors duration-200 tracking-wide"
              >
                Read More
              </motion.a>
            </Reveal>

            {/* Birds on wire illustration */}
            <BirdsOnWire />
          </div>

        </div>
      </div>
    </section>
  )
}
