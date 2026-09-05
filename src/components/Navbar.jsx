import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Home, BedDouble, Leaf, Utensils, User, Image as ImageIcon, Tag, Mail } from 'lucide-react'
import logoSvg from '../assets/image/chidiya_ghar_logo_animated.gif'
import whiteLogo from '../assets/image/chidiya_ghar_logo_animated.gif'

const navLinks = [
  { label: 'Home', href: '#top', icon: Home },
  { label: 'Rooms & Suites', href: '#rooms', icon: BedDouble },
  { label: 'Amenities', href: '#amenities', icon: Leaf },
  { label: 'Dining', href: '#dining', icon: Utensils },
  { label: 'About', href: '#about', icon: User },
  { label: 'Gallery', href: '#gallery', icon: ImageIcon },
  // { label: 'Offers', href: '#offers', icon: Tag },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      // For mobile top header
      setScrolled(window.scrollY > 60)
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      let currentSection = 'Home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200) {
            const link = navLinks.find(l => l.href === `#${section}`)
            if (link) currentSection = link.label
          }
        }
      }
      setActiveLink(currentSection)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ---------------- MOBILE HEADER (lg:hidden) ---------------- */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="px-4 py-2 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center shrink-0">
            <motion.img
              src={logoSvg}
              alt="Chidiya Ghar Logo"
              className="h-[48px] w-auto object-contain origin-left"
              initial={{ scale: 2 }}
              animate={{ scale: 2 }}
            />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1.5 p-2 text-[#333]"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-current" />
            <span className="w-4 h-0.5 bg-current" />
            <span className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </header>

      {/* ---------------- DESKTOP SIDEBAR (lg:flex) ---------------- */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[160px] bg-white shadow-[2px_0_15px_-3px_rgba(0,0,0,0.05)] z-50 flex-col items-center py-4 border-r border-[#7B2D16]/10">
        
        {/* Logo at the top */}
        <div className="mb-6 px-4 w-full">
          <a href="#top" className="block outline-none">
            <motion.img
              src={logoSvg}
              alt="Chidiya Ghar Logo"
              className="w-full h-auto object-contain"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1.5 }}
              whileHover={{ scale: 1.55 }}
            />
          </a>
        </div>
        
        {/* Vertical Navigation Links */}
        <nav className="flex flex-col items-center w-full relative flex-1">
          {navLinks.map((item, index) => {
            const isActive = activeLink === item.label
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col items-center w-full group">
                
                {/* Connecting Line & Dot (skip for first item) */}
                {index > 0 && (
                  <div className="flex flex-col items-center my-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-[1px] h-3 bg-[#8c5d4e]"></div>
                    <div className="w-1 h-1 rounded-full bg-[#8c5d4e] my-0.5"></div>
                    <div className="w-[1px] h-3 bg-[#8c5d4e]"></div>
                  </div>
                )}
                
                <a 
                  href={item.href} 
                  onClick={() => setActiveLink(item.label)}
                  className="flex flex-col items-center gap-1 p-1 w-full transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon 
                    strokeWidth={2}
                    className={`w-5 h-5 transition-opacity duration-300 text-[#8c5d4e] ${
                      isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                    }`} 
                  />
                  <span 
                    className={`text-[9.5px] font-bold tracking-[0.15em] uppercase text-center transition-opacity duration-300 text-[#8c5d4e] ${
                      isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </div>
            )
          })}
        </nav>
      </aside>

      {/* ---------------- MOBILE FULLSCREEN MENU ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white text-[#1a1a1a] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-[#7B2D16]/10">
              <a href="#top" onClick={() => setOpen(false)} className="block outline-none">
                <img src={logoSvg} alt="Chidiya Ghar" className="h-10 w-auto scale-[1.6] origin-left" />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-2xl hover:text-[#7B2D16] transition-colors">
                ✕
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-10">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false)
                    setActiveLink(item.label)
                  }}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="font-display text-4xl text-[#333] hover:text-[#7B2D16] transition-colors flex items-center gap-4"
                >
                  <item.icon className="w-8 h-8 opacity-50" />
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 bg-[#7B2D16] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#6a2513] transition-colors shadow-sm"
              >
                Book Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
