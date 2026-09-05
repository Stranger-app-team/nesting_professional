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
    desc: 'Comfortable, practical, and perfect for a quick city stay.',
    price: '₹4,500',
    image: acc1,
  },
  {
    id: 'premium',
    name: 'Premium Room',
    desc: 'More space to stretch out after a long day of meetings.',
    price: '₹6,000',
    image: acc2,
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    desc: 'Extra room when your stay calls for a little more.',
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
      className="bg-white overflow-hidden group p-4 flex flex-col justify-between"
      style={{ 
        boxShadow: '0 20px 45px -8px rgba(0, 0, 0, 0.14), 0 8px 18px -4px rgba(0, 0, 0, 0.06)', 
        borderRadius: '20px' 
      }}
    >
      {/* Room image — 12px radius inside the 20px card */}
      <div className="relative h-[250px] overflow-hidden rounded-[12px]">
        <ImageWithFallback
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[12px]"
        />
      </div>

      {/* Card content */}
      <div className="px-2 pt-5 pb-2">
        <h3 className="font-bold text-[#1a1a1a] text-[17px] mb-2" style={{ fontWeight: 700 }}>{room.name}</h3>
        <p className="text-[#666] text-[14px] leading-relaxed mb-5">{room.desc}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[#555] text-[14px]">From </span>
            <span className="text-[#7B2D16] font-bold text-[16px]">{room.price}</span>
            <span className="text-[#999] text-[13px]"> / night</span>
          </div>
          {/* Circle arrow button */}
          <motion.button
            whileHover={{ backgroundColor: '#7B2D16', borderColor: '#7B2D16' }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-[#bbb] flex items-center justify-center transition-all duration-200 group/btn"
            style={{ color: '#1a1a1a' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover/btn:stroke-white transition-colors duration-200">
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
    <section id="rooms" style={{ backgroundColor: '#2A1205' }} className="pt-16 pb-12 scroll-mt-24">
      
      {/* ── INTRO SECTION ── */}
      <div className="max-w-[1000px] mx-auto px-6 text-center mb-16">
        <Reveal delay={0.1}>
          <h2 className="font-display text-[28px] lg:text-[40px] font-normal text-white mb-6">
            A Little Escape. Right in Your City.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-white/70 text-[16px] leading-relaxed mb-4">
            Step away from the usual routine and spend your day somewhere a little more interesting.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/70 text-[16px] leading-relaxed mb-8">
            Chidiya Ghar is a refreshing city experience designed for families, friends, kids and anyone looking for a fun day out without going far.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="text-[#C9A06A] font-bold text-[14px] uppercase tracking-[0.2em]">
            Explore. Relax. Discover. Make Memories.
          </p>
        </Reveal>
      </div>

      <div className="max-w-[1480px] mx-auto px-4 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-10">
          <Reveal type="fade">
            <p className="text-[12px] font-bold tracking-[0.22em] text-[#C9A06A] uppercase mb-3">
              Rooms & Suites
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-[28px] lg:text-[36px] font-normal text-white mb-3">
              Your Day Was Busy. Your Room Doesn't Have to Be.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-white/70 text-[14px] max-w-[520px] mx-auto leading-relaxed">
              Thoughtfully designed rooms with everything you need to switch off after a productive day.
            </p>
          </Reveal>
        </div>

        {/* 3-column room grid with tighter gaps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-10">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* View All Rooms button — centered */}
        <div className="flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ backgroundColor: '#C9A06A', color: '#1a1a1a' }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#C9A06A] text-[#C9A06A] font-semibold text-[14px] px-9 py-3 rounded-md transition-colors duration-200 tracking-wide uppercase"
          >
            View All Rooms
          </motion.a>
        </div>
      </div>
    </section>
  )
}
