import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logoSvg from '../assets/image/Group 1171275868 (1).svg'
import whiteLogo from '../assets/image/chidiya-ghar-white-logo-fixed-counters.svg'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Offers', href: '#offers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]' : 'bg-transparent'}`}>
        {/* Adjusted padding and sizing to match reference: logo larger, nav center, button right */}
        <div className="max-w-[1800px] w-full mx-auto px-4 lg:px-12 xl:px-16 py-2 flex items-center justify-between gap-4">

          {/* Logo — using requested SVG, much larger now */}
          <a href="#top" className="flex items-center shrink-0">
            <motion.img
              src={logoSvg}
              alt="Chidiya Ghar Logo"
              className="h-[75px] sm:h-[90px] w-auto object-contain"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            />
          </a>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
                className={`relative text-[13px] font-normal tracking-wide transition-colors group ${
                  activeLink === item.label
                    ? 'text-[#1a1a1a]'
                    : 'text-[#333] hover:text-[#7B2D16]'
                }`}
              >
                {item.label}
                {/* Red/brown underline on active */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#C0392B] transition-all duration-300 ${
                    activeLink === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Book Now button — dark brown, rounded */}
          <div className="hidden lg:block shrink-0">
            <a
              href="#contact"
              className="inline-block bg-[#7B2D16] text-white text-[13px] font-semibold px-6 py-3 rounded-md hover:bg-[#6a2513] transition-colors duration-200 tracking-wide"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-[#333]"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-current" />
            <span className="w-4 h-0.5 bg-current" />
            <span className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#7B2D16] text-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6">
              <a href="#top" onClick={() => setOpen(false)}>
                <img src={whiteLogo} alt="Chidiya Ghar" className="h-10 w-auto" />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-2xl hover:opacity-70 transition-opacity">
                ✕
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-10">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="font-display text-4xl hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4 bg-white text-[#7B2D16] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Book Now
              </motion.a>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-10 pb-10 text-white/50 text-xs space-y-1"
            >
              <p>info@chidiyagharhotel.com</p>
              <p>+91 12345 67890</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
