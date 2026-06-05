import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const BASE_SCALE   = 1
const PEAK_SCALE   = 1.45
const RANGE_PX     = 110    // px from item centre that magnification falls off
const SPRING_CFG   = { stiffness: 380, damping: 26, mass: 0.6 }

/**
 * A single magnifiable nav link.
 * mouseX is a shared MotionValue representing cursor X on the screen.
 */
function DockLink({ href, label, mouseX }) {
  const ref = useRef(null)

  // Distance between cursor and item centre
  const distance = useTransform(mouseX, (mx) => {
    if (!ref.current || mx === Infinity) return RANGE_PX
    const { left, width } = ref.current.getBoundingClientRect()
    return Math.abs(mx - (left + width / 2))
  })

  // Map distance → scale, spring-smoothed
  const rawScale  = useTransform(distance, [0, RANGE_PX], [PEAK_SCALE, BASE_SCALE])
  const scale     = useSpring(rawScale, SPRING_CFG)

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ scale }}
      className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 origin-bottom inline-block"
    >
      {label}
    </motion.a>
  )
}

/**
 * Drop-in nav that adds macOS-style magnification to a list of links.
 *
 * Props:
 *   items – [{ href, label }]
 *   gap   – Tailwind gap class (default 'gap-7')
 */
export default function DockNav({ items, gap = 'gap-7' }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <nav
      className={`flex items-center ${gap}`}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {items.map((item) => (
        <DockLink
          key={item.href}
          href={item.href}
          label={item.label}
          mouseX={mouseX}
        />
      ))}
    </nav>
  )
}
