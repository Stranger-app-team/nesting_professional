// ────────────────────────────────────────────────────────────────
// All copy + data lives here so the site can be edited without
// touching a single component. Replace image URLs with your own
// renders — see README "Swapping in your own images".
// ────────────────────────────────────────────────────────────────

import acc1 from '../assets/image/acc-1.png';
import acc2 from '../assets/image/acc-2.png';
import acc3 from '../assets/image/acc-3.png';
import acc4 from '../assets/image/acc-4.png';
import acc5 from '../assets/image/acc-5.png';
import gal1 from '../assets/image/gal-1.png';
import gal2 from '../assets/image/gal-2.png';
import gal3 from '../assets/image/gal-3.png';
import gal4 from '../assets/image/gal-4.png';
import gal5 from '../assets/image/gal-5.png';
import test1 from '../assets/image/testimonial-1.jpg';
import test2 from '../assets/image/testimonial-2.jpg';
import test3 from '../assets/image/testimonial-3.jpg';
import sectionBg from '../assets/image/section-bg.png';
import philosophyNew from '../assets/image/philosophy-new.jpg';

export const nav = [
  { label: 'The nests', href: '#nests' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Journal', href: '#gallery' },
  { label: 'Arrive', href: '#contact' },
]

export const hero = {
  eyebrow: 'Nesting Professionals · Families · Athletes · Wanderers',
  headline: ['A quieter kind of', 'high performance.'],
  sub: 'Chidiya Ghar is a small nest of private residences built for people whose bodies and calendars work hard — ',
  personas: ['athletes between seasons', 'families who travel together', 'professionals who need real rest', 'wellness seekers on retreat', 'digital nomads mid-project', 'teams who actually work'],
  primaryCta: 'Reserve a nest',
  secondaryCta: 'Take the flight path ↓',
  stat: { value: '7', label: 'private nests, never more' },
}

export const marquee = [
  'Recovery-first rooms',
  'Private training deck',
  'Family aviary suites',
  'Quiet-hours by design',
  'Five minutes from the trailhead',
  'Kitchens built for macros, not minibars',
  'Cold plunge & cedar sauna',
  'North-light work desks',
  'Blackout sleep systems',
  'Sub-30dB room acoustics',
]

export const philosophy = {
  label: 'Why Chidiya Ghar',
  title: 'We built this for the people who fly home tired.',
  paragraphs: [
    'Chidiya Ghar started with a simple observation: the people who need rest the most — athletes mid-circuit, parents mid-trip, professionals mid-quarter — are usually handed the same generic hotel room as everyone else.',
    'So we built something smaller and more deliberate. Seven nests, each tuned to how its guest actually recovers: blackout sleep systems, a shared training deck, kitchens stocked for real meals, and enough quiet that your nervous system can finally stand down.',
    'Whether you arrive with a kit bag, a stroller, a laptop, or just yourself — this place was designed to hold you without getting in the way.',
  ],
  points: [
    { k: 'Sleep architecture', v: 'Blackout glass, sub-30dB rooms, and mattresses chosen by a sports-recovery physio.' },
    { k: 'Built-in movement', v: 'A private training deck and cold-plunge open before the front desk does.' },
    { k: 'Room to actually land', v: 'Family aviary suites with real kitchens, not a kettle and two mugs.' },
    { k: 'Work without friction', v: 'North-light desks, call-safe acoustics, and a quiet library for actual focus.' },
  ],
  image: philosophyNew,
}

export const nests = [
  {
    id: 'roost',
    name: "Athlete's Roost",
    tag: 'For competition & off-season',
    desc: 'Ground-floor rooms opening straight onto the training deck, with compression-friendly bedding and a stocked recovery fridge.',
    image: acc1,
  },
  {
    id: 'aviary',
    name: 'Family Aviary',
    tag: 'For travelling together',
    desc: 'Two-room suites with a real kitchen, a second sleep zone for kids, and door hinges quiet enough for early bedtimes.',
    image: acc2,
  },
  {
    id: 'skyline',
    name: 'Skyline Nest',
    tag: 'For working professionals',
    desc: 'A proper desk with north light, call-safe acoustics, and a balcony for the five minutes between meetings you actually get outside.',
    image: acc3,
  },
  {
    id: 'perch',
    name: 'The Perch',
    tag: 'For one night, done right',
    desc: 'Our smallest nest — compact, precise, and built for the guest who is only here to sleep well and leave early.',
    image: acc4,
  },
  {
    id: 'canopy',
    name: 'The Canopy Suite',
    tag: 'For the long stay',
    desc: 'Our largest nest with a private terrace, standing desk, full kitchen and a bathtub deep enough to actually soak in.',
    image: acc5,
  },
]

export const facilities = [
  { name: 'Comfortable Rooms', icon: 'room', desc: 'Thoughtfully appointed spaces built for everyday living.' },
  { name: 'Clean Common Areas', icon: 'commonarea', desc: 'Maintained to the highest standard, every single day.' },
  { name: 'High-Speed Wi-Fi', icon: 'wifi', desc: 'Reliable connectivity throughout the entire building.' },
  { name: '24x7 Security', icon: 'security', desc: 'Round-the-clock safety so you can truly relax.' },
  { name: 'Housekeeping', icon: 'housekeeping', desc: 'Regular cleaning service included in your stay.' },
  { name: 'Secure Parking', icon: 'car', desc: 'Dedicated parking for residents and guests.' },
  { name: 'Recreational Spaces', icon: 'recreation', desc: 'Lounge and social areas designed for connection.' },
  { name: 'Prime Location', icon: 'location', desc: 'Convenient access to transport, markets and more.' },
]

export const guestStories = [
  {
    id: 'gs1',
    tag: 'The Athlete',
    name: 'R. Malhotra',
    quote: 'First hotel that understood I needed to be asleep by 8:30 and training by 6.',
    detail: 'Middle-distance runner, 3rd consecutive stay',
    image: test1,
    color: '#3E4A36',
  },
  {
    id: 'gs2',
    tag: 'The Family',
    name: 'Fernandes Family',
    quote: 'The first time a hotel room felt like it was designed for us — not around us.',
    detail: 'Parents of 2, returning for the 4th time',
    image: test2,
    color: '#2C3E44',
  },
  {
    id: 'gs3',
    tag: 'The Professional',
    name: 'A. Sen',
    quote: 'Four back-to-back calls from the Skyline balcony. Nobody knew I was on holiday.',
    detail: 'Product lead, quarterly retreat stays',
    image: test3,
    color: '#8C5A3C',
  },
  {
    id: 'gs4',
    tag: 'The Nomad',
    name: 'P. Krishnamurthy',
    quote: 'Checked in for 3 days. Stayed for 12. The Canopy Suite made "work from anywhere" feel real.',
    detail: 'UX consultant, long-stay guest',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    color: '#B8863B',
  },
  {
    id: 'gs5',
    tag: 'The Wellness Seeker',
    name: 'M. Iyer',
    quote: 'The plunge and sauna after a long hike. The quiet library. I finally slept 9 hours.',
    detail: 'Yoga practitioner, weekend retreats',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    color: '#7C9CAA',
  },
  {
    id: 'gs6',
    tag: 'The Team',
    name: 'Orbit Design Studio',
    quote: 'We booked all 7 nests for a team retreat. Finished a product sprint in 3 days.',
    detail: '8-person remote team, annual offsite',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    color: '#3E4A36',
  },
]

export const testimonials = [
  {
    quote: 'First hotel that understood I needed to be asleep by 8:30 and training by 6. Nobody blinked.',
    name: 'R. Malhotra',
    role: 'Middle-distance runner',
    avatar: test1,
  },
  {
    quote: 'We travel with two kids under six. The Aviary suite was the first time a hotel room felt like it was designed for us, not around us.',
    name: 'The Fernandes family',
    role: 'Returning guests, 4 stays',
    avatar: test2,
  },
  {
    quote: 'I took four calls from the Skyline balcony and nobody on the other end knew I was on holiday. That\'s the whole point.',
    name: 'A. Sen',
    role: 'Product lead, frequent guest',
    avatar: test3,
  },
  {
    quote: 'Checked in for 3 days, stayed for 12. Nowhere has ever made "work from anywhere" feel this good.',
    name: 'P. Krishnamurthy',
    role: 'UX consultant, long-stay guest',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
  },
  {
    quote: 'We booked all 7 nests for a team offsite. Shipped a full product sprint in 3 days. Best working retreat I have ever been to.',
    name: 'Orbit Design Studio',
    role: '8-person remote team',
    avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=80&q=80',
  },
]

export const gallery = [
  { src: gal1, alt: 'Chidiya Ghar exterior at dusk', likes: 42 },
  { src: gal2, alt: 'Bird in flight over the property', likes: 38 },
  { src: gal3, alt: 'Training deck at sunrise', likes: 55 },
  { src: gal4, alt: 'Trailhead near the property', likes: 29 },
  { src: gal5, alt: 'Family suite living area', likes: 61 },
  { src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80', alt: 'The Perch, compact nest room', likes: 33 },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80', alt: 'Canopy suite terrace', likes: 47 },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80', alt: 'Quiet library workspace', likes: 24 },
]

export const contact = {
  label: 'Arrive',
  title: 'Come land somewhere quieter.',
  sub: 'Seven nests, one at a time. Tell us who\'s arriving and we\'ll tell you which nest fits.',
  address: 'Chidiya Ghar, Aarey Colony Road, Mumbai',
  email: 'stay@chidiyaghar.com',
  phone: '+91 98200 00000',
}

export const footer = {
  tagline: 'Nesting Professionals · Families · Athletes · Wanderers',
  columns: [
    {
      title: 'Stay',
      links: [
        { label: 'The nests', href: '#nests' },
        { label: 'Facilities', href: '#facilities' },
        { label: 'Rates & Booking', href: '#contact' },
        { label: 'Gift a stay', href: '#contact' },
      ],
    },
    {
      title: 'Chidiya Ghar',
      links: [
        { label: 'Philosophy', href: '#philosophy' },
        { label: 'Journal', href: '#gallery' },
        { label: 'Guest Stories', href: '#guest-stories' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      title: 'Reach us',
      links: [
        { label: 'stay@chidiyaghar.com', href: 'mailto:stay@chidiyaghar.com' },
        { label: '+91 98200 00000', href: 'tel:+919820000000' },
        { label: 'Aarey Colony Road, Mumbai', href: 'https://maps.google.com/?q=Aarey+Colony+Road+Mumbai' },
      ],
    },
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}
