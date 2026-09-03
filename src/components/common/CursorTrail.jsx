import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const particles = []
    let frame

    const featherPaths = [
      // tiny feather shape
      'M6 1 C9 2, 11 5, 9 9 C7 12, 4 11, 3 8 C2 5, 3 2, 6 1Z M6 1 L6 13',
      // dot
      'M5 5 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0',
      // v-glyph bird
      'M0 5 C3 0, 6 -1, 8 2 C10 -1, 13 0, 16 5 C12 6, 9 3, 8 4 C7 3, 4 6, 0 5Z',
    ]

    const spawn = (x, y) => {
      const p = document.createElement('div')
      p.className = 'cursor-trail-particle'

      const idx = Math.floor(Math.random() * featherPaths.length)
      const size = 8 + Math.random() * 10
      const hue = Math.random() > 0.5 ? '#D8B876' : '#F6F1E4'
      const angle = -30 + Math.random() * 60

      p.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 16 16" fill="${hue}" opacity="0.85"
          style="transform: rotate(${angle}deg)">
          <path d="${featherPaths[idx]}" stroke="${hue}" strokeWidth="0.5"/>
        </svg>
      `
      p.style.left = `${x}px`
      p.style.top = `${y}px`
      container.appendChild(p)
      particles.push(p)

      setTimeout(() => {
        p.remove()
        const idx2 = particles.indexOf(p)
        if (idx2 > -1) particles.splice(idx2, 1)
      }, 800)
    }

    let last = 0
    const onMove = (e) => {
      const now = Date.now()
      if (now - last < 80) return   // throttle
      last = now
      spawn(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
    />
  )
}
