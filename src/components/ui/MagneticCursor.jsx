import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const SPRING_CFG   = { stiffness: 650, damping: 42, mass: 0.55 }
const MAG_STRENGTH = 0.30   // how far elements shift toward cursor (0–1)
const MAG_RADIUS   = 80     // px — only elements within this radius pull

/**
 * Global custom cursor with:
 *   • Spring-smoothed tracking
 *   • Grows on hovering <a> / <button> elements
 *   • Magnetically attracts elements tagged with data-magnetic
 *   • mix-blend-mode: difference → white on dark, dark on light
 *
 * Mount once in App.jsx. Only renders on pointer-fine devices.
 */
export default function MagneticCursor() {
  const rawX = useMotionValue(-120)
  const rawY = useMotionValue(-120)
  const x = useSpring(rawX, SPRING_CFG)
  const y = useSpring(rawY, SPRING_CFG)

  const [hovered, setHovered]   = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.style.cursor = 'none'

    // --- Magnetic element handling ---
    const attached = new Set()

    const bindMagnetic = (el) => {
      if (attached.has(el)) return
      attached.add(el)

      const handleMove = (e) => {
        const r   = el.getBoundingClientRect()
        const cx  = r.left + r.width  / 2
        const cy  = r.top  + r.height / 2
        const dx  = e.clientX - cx
        const dy  = e.clientY - cy
        const dist = Math.hypot(dx, dy)

        if (dist < MAG_RADIUS) {
          const pull = (1 - dist / MAG_RADIUS) * MAG_STRENGTH
          el.style.transition = 'transform 0.25s cubic-bezier(0.16,1,0.3,1)'
          el.style.transform  = `translate(${dx * pull}px, ${dy * pull}px)`
        }
      }

      const handleLeave = () => {
        el.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)'
        el.style.transform  = ''
      }

      el.addEventListener('mousemove',  handleMove)
      el.addEventListener('mouseleave', handleLeave)
    }

    const refreshMagnetic = () => {
      document.querySelectorAll('[data-magnetic]').forEach(bindMagnetic)
    }

    // --- Cursor tracking ---
    const onMove = (e) => {
      rawX.set(e.clientX - 8)
      rawY.set(e.clientY - 8)
      setVisible(true)

      const over = document.elementFromPoint(e.clientX, e.clientY)
      setHovered(!!over?.closest('a, button, [role="button"]'))
    }

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseleave', () => setVisible(false))
    document.addEventListener('mouseenter', () => setVisible(true))

    refreshMagnetic()

    const mo = new MutationObserver(refreshMagnetic)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', () => setVisible(false))
      document.removeEventListener('mouseenter', () => setVisible(true))
      attached.forEach((el) => { el.style.transform = '' })
      mo.disconnect()
    }
  }, [rawX, rawY])

  // Don't render the DOM node on touch devices at all
  if (typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full bg-white"
        style={{ mixBlendMode: 'difference' }}
        animate={{
          width:   hovered ? 46 : 16,
          height:  hovered ? 46 : 16,
          x:       hovered ? -15 : 0,
          y:       hovered ? -15 : 0,
          opacity: visible  ? 1   : 0,
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  )
}
