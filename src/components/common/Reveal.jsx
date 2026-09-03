import { motion } from 'framer-motion'

// A small library of distinct reveal styles so sections don't all
// perform the same "fade + slide up" trick. Pass `type` to pick one.
const variants = {
  rise: {
    hidden: { opacity: 0, y: 42 },
    show: { opacity: 1, y: 0 },
  },
  mask: {
    hidden: { opacity: 0, y: '100%' },
    show: { opacity: 1, y: '0%' },
  },
  wipe: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    show: { clipPath: 'inset(0 0% 0 0)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export default function Reveal({
  children,
  type = 'rise',
  delay = 0,
  duration = 0.8,
  className = '',
  as = 'div',
  once = true,
  amount = 0.3,
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[type]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
