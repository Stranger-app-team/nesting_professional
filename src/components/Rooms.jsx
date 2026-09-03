import { motion } from 'framer-motion'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'
import acc1 from '../assets/image/acc-1.png'
import acc2 from '../assets/image/acc-2.png'
import acc3 from '../assets/image/acc-3.png'

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    desc: 'Cozy and comfortable room with all the essentials for a relaxing stay.',
    price: '₹4,500',
    image: acc1,
  },
  {
    id: 'premium',
    name: 'Premium Room',
    desc: 'More space, more comfort. Perfect for business or leisure travelers.',
    price: '₹6,000',
    image: acc2,
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    desc: 'Luxury and spacious suite with a separate living area and premium amenities.',
    price: '₹8,500',
    image: acc3,
  },
]

function RoomCard({ room, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white overflow-hidden group"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
    >
      {/* Room image — no border radius, square crop */}
      <div className="relative h-[200px] overflow-hidden">
        <ImageWithFallback
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="font-bold text-[#1a1a1a] text-[16px] mb-1.5" style={{ fontWeight: 700 }}>{room.name}</h3>
        <p className="text-[#666] text-[13px] leading-relaxed mb-4">{room.desc}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[#555] text-[13px]">From </span>
            <span className="text-[#7B2D16] font-bold text-[15px]">{room.price}</span>
            <span className="text-[#999] text-[12px]"> / night</span>
          </div>
          {/* Circle arrow button */}
          <motion.button
            whileHover={{ backgroundColor: '#7B2D16', borderColor: '#7B2D16' }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full border border-[#bbb] flex items-center justify-center transition-all duration-200 group/btn"
            style={{ color: '#1a1a1a' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="group-hover/btn:stroke-white transition-colors duration-200">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Rooms() {
  return (
    <section id="rooms" style={{ backgroundColor: '#FAF6F1' }} className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Section heading */}
        <div className="text-center mb-10">
          <Reveal type="fade">
            <p className="text-[11px] font-bold tracking-[0.22em] text-[#7B2D16] uppercase mb-3">
              Our Rooms & Suites
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-[28px] lg:text-[34px] font-normal text-[#1a1a1a] mb-3" style={{ fontFamily: '"Fraunces", serif' }}>
              Stay Comfortable, Stay Inspired
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-[#666] text-[13px] max-w-[420px] mx-auto leading-relaxed">
              Thoughtfully designed rooms with elegant interiors and modern amenities<br />
              to make your stay truly relaxing.
            </p>
          </Reveal>
        </div>

        {/* 3-column room grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* View All Rooms button — centered */}
        <div className="flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: '#6a2513' }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#7B2D16] text-white font-semibold text-[13px] px-8 py-[11px] rounded-md transition-colors duration-200 tracking-wide"
          >
            View All Rooms
          </motion.a>
        </div>
      </div>
    </section>
  )
}
