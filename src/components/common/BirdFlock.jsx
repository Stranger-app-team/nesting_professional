import { motion } from 'framer-motion'

// Realistic soaring & flapping bird component
function RealisticBird({ scale = 1, delay = 0, duration = 18, startY = 20, endY = 25, midY = [15, 35, 10], opacity = 0.75 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-[5]"
      initial={{ x: '-15vw', y: `${startY}vh`, opacity: 0 }}
      animate={{
        x: ['-10vw', '25vw', '60vw', '115vw'],
        y: [`${startY}vh`, `${midY[0]}vh`, `${midY[1]}vh`, `${endY}vh`],
        opacity: [0, opacity, opacity, 0],
        rotate: [-3, 4, -2, 3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transformOrigin: 'center center' }}
    >
      {/* Bird Flapping Animation container */}
      <motion.div
        animate={{
          scaleY: [1, 0.25, -0.6, 0.25, 1, 1, 0.3, -0.5, 0.2, 1], // flap flap glide flap
          y: [0, -3, 2, -1, 0, 0, -2, 2, -1, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: 'center 45%' }}
      >
        <svg
          width={48 * scale}
          height={32 * scale}
          viewBox="0 0 100 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Detailed realistic bird silhouette (wings spread, tail, head) */}
          <path
            d="M50 32 C42 22 28 8 5 12 C18 20 32 26 44 33 C38 42 26 52 14 56 C28 53 42 46 48 38 C49 46 48 58 50 62 C52 58 51 46 52 38 C58 46 72 53 86 56 C74 52 62 42 56 33 C68 26 82 20 95 12 C72 8 58 22 50 32 Z"
            fill="rgba(246, 241, 228, 0.9)"
          />
          {/* Bird Head & Beak */}
          <path
            d="M50 30 C49 26 48 20 50 16 C52 20 51 26 50 30 Z"
            fill="rgba(246, 241, 228, 0.95)"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

// Right to left soaring bird with swoop trajectory
function SwoopingBird({ scale = 0.8, delay = 6, duration = 22, startY = 35, endY = 15, opacity = 0.6 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-[5]"
      initial={{ x: '115vw', y: `${startY}vh`, opacity: 0 }}
      animate={{
        x: ['115vw', '80vw', '40vw', '-15vw'],
        y: [`${startY}vh`, `${startY + 15}vh`, `${startY - 10}vh`, `${endY}vh`],
        opacity: [0, opacity, opacity, 0],
        rotate: [5, -8, 6, -3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transformOrigin: 'center center' }}
    >
      <motion.div
        animate={{
          scaleY: [1, 0.3, -0.5, 0.3, 1, 1, 1, 0.25, -0.6, 1], // long glide into flapping
          y: [0, -2, 2, -1, 0, 0, 0, -3, 2, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: 'center 45%', transform: 'scaleX(-1)' }}
      >
        <svg
          width={48 * scale}
          height={32 * scale}
          viewBox="0 0 100 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 32 C42 22 28 8 5 12 C18 20 32 26 44 33 C38 42 26 52 14 56 C28 53 42 46 48 38 C49 46 48 58 50 62 C52 58 51 46 52 38 C58 46 72 53 86 56 C74 52 62 42 56 33 C68 26 82 20 95 12 C72 8 58 22 50 32 Z"
            fill="rgba(216, 184, 118, 0.85)"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function BirdFlock() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bird 1: High soaring swallow across left to right */}
      <RealisticBird
        scale={0.9}
        delay={0}
        duration={20}
        startY={12}
        endY={18}
        midY={[8, 22]}
        opacity={0.8}
      />

      {/* Bird 2: Lower swooping bird gliding through center with organic arc */}
      <RealisticBird
        scale={0.65}
        delay={7}
        duration={26}
        startY={28}
        endY={14}
        midY={[38, 18]}
        opacity={0.55}
      />

      {/* Bird 3: Distant bird soaring right-to-left */}
      <SwoopingBird
        scale={0.5}
        delay={3}
        duration={30}
        startY={16}
        endY={28}
        opacity={0.45}
      />

      {/* Bird 4: Playful bird drifting at top right */}
      <SwoopingBird
        scale={0.75}
        delay={14}
        duration={24}
        startY={24}
        endY={10}
        opacity={0.7}
      />
    </div>
  )
}
