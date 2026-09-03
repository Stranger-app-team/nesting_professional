import { marquee } from '../data/content'

function Feather() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mx-6 shrink-0">
      <path
        d="M20 4c-7 0-13 5-13 13 0 1.5.3 2.7.8 3.5L20 8V4Z"
        stroke="#B8863B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M7.5 20.5 19 9" stroke="#B8863B" strokeWidth="1.4" />
    </svg>
  )
}

function BirdGlyph() {
  return (
    <svg width="24" height="12" viewBox="0 0 30 18" fill="none" className="mx-6 shrink-0 opacity-70">
      <path
        d="M0 9c5-8 10-9 15-4 5-5 10-4 15 4-4 1-9 0-12-2 1.5 3 1.5 5-1 7-1.5-3-1.5-5-2-6-1.5 4-5 6-8 6 1.5-1.5 2.5-3 2.5-4-3 1.5-6 1.5-9.5-1Z"
        fill="#D8B876"
      />
    </svg>
  )
}

function NestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-6 shrink-0 opacity-50">
      <ellipse cx="12" cy="16" rx="9" ry="4" stroke="#D8B876" strokeWidth="1.2" />
      <ellipse cx="12" cy="15" rx="7" ry="3" stroke="#D8B876" strokeWidth="0.8" />
      <circle cx="10" cy="14" r="1.5" fill="#F6F1E4" fillOpacity="0.6" />
      <circle cx="13" cy="13.5" r="1.2" fill="#F6F1E4" fillOpacity="0.5" />
    </svg>
  )
}

const SEPARATORS = [Feather, BirdGlyph, NestIcon, Feather, BirdGlyph, NestIcon, Feather, BirdGlyph, NestIcon, Feather]

export default function MarqueeStrip() {
  const items1 = [...marquee, ...marquee]
  const items2 = [...marquee, ...marquee]

  return (
    <div className="relative bg-[#29180b] overflow-hidden border-y border-cream/10">
      {/* Row 1 — left to right */}
      <div className="py-4 flex w-max animate-marquee border-b border-cream/5">
        {items1.map((item, i) => {
          const Sep = SEPARATORS[i % SEPARATORS.length]
          return (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-display text-xl text-cream/80 whitespace-nowrap">{item}</span>
              <Sep />
            </div>
          )
        })}
      </div>
    </div>
  )
}
