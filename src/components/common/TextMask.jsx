import { useEffect, useRef, useState } from 'react'

/**
 * TextMask — clip-path wipe reveal on scroll.
 * Wraps any text content with an ink-to-transparent wipe as it enters the viewport.
 * Usage: <TextMask><h2>...</h2></TextMask>
 */
export default function TextMask({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`overflow-hidden pb-4 -mb-4 ${className}`}
      aria-hidden={!visible}
    >
      <div
        style={{
          clipPath: visible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          transition: `clip-path 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
