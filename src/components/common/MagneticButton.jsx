import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = 'solid', // solid | ghost
  className = '',
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.35, y: y * 0.35 })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  const base =
    'relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-colors duration-300'
  const styles =
    variant === 'solid'
      ? 'bg-ink text-cream hover:bg-moss'
      : 'bg-transparent text-ink border border-ink/30 hover:border-ink'

  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Tag>
  )
}
