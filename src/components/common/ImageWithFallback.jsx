import { useState } from 'react'

// Swap the `src` values in src/data/content.js for your own renders.
// This wrapper just keeps a broken/placeholder link from breaking the layout.
export default function ImageWithFallback({ src, alt = '', className = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gradient-to-br from-moss to-skyDeep text-cream/60`}
        role="img"
        aria-label={alt}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12c3-6 7-8 12-6 2 3 5 3 6 1-1 4-4 6-7 5-1 3-4 5-8 4 2-1 3-2 3-3-3 1-5 0-6-1Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
