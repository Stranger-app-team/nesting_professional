import { motion } from 'framer-motion'
import highlightLogo from '../assets/logo/001-CHIDIYA GHAR LOGO final.png'

// Decorative bird background
function FooterBirds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute top-4 right-0 opacity-[0.04]" width="320" height="130" viewBox="0 0 320 130" fill="none">
        <path d="M20 75 C50 15, 100 5, 160 45 C220 5, 270 18, 300 75 C240 90, 185 50, 160 60 C135 50, 80 90, 20 75Z" fill="#F6F1E4"/>
        <path d="M160 60 C155 90, 148 110, 145 122" stroke="#F6F1E4" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <motion.svg className="absolute bottom-16 right-12 opacity-[0.06]" width="90" height="40" viewBox="0 0 140 55" fill="none" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <path d="M5 28 C25 2, 50 0, 70 18 C90 0, 115 4, 135 28 C110 35, 85 20, 70 24 C55 20, 30 35, 5 28Z" fill="#D8B876"/>
      </motion.svg>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden pt-12 pb-6" style={{ backgroundColor: '#2A1205' }}>
      <FooterBirds />

      <div className="max-w-[1700px] mx-auto px-4 lg:px-12 xl:px-16 relative z-10">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Col 1: Logo + description + social icons */}
          <div>
            <a href="#top" className="inline-block mb-5">
              <img 
                src={highlightLogo} 
                alt="Chidiya Ghar Logo" 
                className="h-14 lg:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 origin-left" 
              />
            </a>
            <p className="text-white/45 text-[12px] leading-relaxed mb-6">
              At Chidiya Ghar, find your nest, make yourself comfortable, and enjoy a stay that feels just right.
            </p>
            {/* Social icons row */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7B2D16] transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7B2D16] transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none"/>
                </svg>
              </a>
              {/* Globe/TripAdvisor */}
              {/* <a href="#" aria-label="Website"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7B2D16] transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                </svg>
              </a> */}
              {/* TripAdvisor owl/circle */}
              {/* <a href="#" aria-label="TripAdvisor"
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7B2D16] transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"/>
                  <circle cx="8" cy="12" r="2.5"/>
                  <circle cx="16" cy="12" r="2.5"/>
                  <path d="M5 8C6 5 9 4 12 4C15 4 18 5 19 8" strokeLinecap="round"/>
                </svg>
              </a> */}
            </div>
          </div>

          {/* Col 2: Quick Links (2-column layout) */}
          <div>
            <h4 className="text-white text-[11px] font-bold mb-4 uppercase tracking-[0.18em]">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {[
                { name: 'Home', href: '#top' },
                { name: 'About Us', href: '#about' },
                { name: 'Rooms & Suites', href: '#rooms' },
                { name: 'Amenities', href: '#amenities' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Location', href: '#location' },
                // { name: 'Offers', href: '#contact' },
                // { name: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <a key={item.name} href={item.href} className="text-white/50 text-[12px] hover:text-[#C9A06A] transition-colors duration-200">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Us with icons */}
          <div>
            <h4 className="text-white text-[11px] font-bold mb-4 uppercase tracking-[0.18em]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A06A" strokeWidth="1.8" className="mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                <span className="text-white/55 text-[12px]">+91 7080901275</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A06A" strokeWidth="1.8" className="mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-white/55 text-[12px]">info@chidiyagharhotel.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A06A" strokeWidth="1.8" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-white/55 text-[12px]">
                  Flat - 202, 2nd Floor, Anjaneya Apartments,<br />
                  Landmark - In front of ASIA House,<br />
                  Near Mamta Chowk, Balewadi High Street,<br />
                  Pune 411045
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          {/* <div>
            <h4 className="text-white text-[11px] font-bold mb-4 uppercase tracking-[0.18em]">Newsletter</h4>
            <p className="text-white/45 text-[12px] mb-4 leading-relaxed">
              Subscribe to get the latest offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/15 text-white text-[12px] px-3 py-2.5 rounded-l-md outline-none placeholder-white/25 focus:border-[#C9A06A] transition-colors"
              />
              <button
                className="bg-[#7B2D16] text-white px-3 py-2.5 rounded-r-md hover:bg-[#6a2513] transition-colors"
                aria-label="Subscribe"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <polyline points="12 5 19 12 12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom copyright */}
        <div className="pt-5 text-center">
          <span className="text-white/25 text-[11px]">© 2026 Chidiya Ghar. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
