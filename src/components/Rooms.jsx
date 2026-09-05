import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageWithFallback from './common/ImageWithFallback'
import Reveal from './common/Reveal'
import acc1 from '../assets/image/acc-1.png'
import acc2 from '../assets/image/acc-2.png'
import acc3 from '../assets/image/acc-3.png'
import acc4 from '../assets/image/acc-4.png'
import acc5 from '../assets/image/acc-5.png'

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
  {
    id: 'studio',
    name: 'Studio Room',
    desc: 'Compact yet fully equipped for the solo traveler.',
    price: '₹3,500',
    image: acc4,
  },
  {
    id: 'family',
    name: 'Family Suite',
    desc: 'Plenty of space for everyone to relax and unwind together.',
    price: '₹10,500',
    image: acc5,
  },
]

function RoomCard({ room, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white overflow-hidden group p-4 flex flex-col justify-between w-[85vw] sm:w-[340px] lg:w-[380px] shrink-0 snap-start"
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
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

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

        {/* Horizontal scroll slider with Navigation Arrows */}
        <div className="relative group/slider">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 lg:-left-5 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C9A06A] hover:text-[#1a1a1a] transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-5 pb-8 hide-scrollbar scroll-smooth">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 lg:-right-5 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C9A06A] hover:text-[#1a1a1a] transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
