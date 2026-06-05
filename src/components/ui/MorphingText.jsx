import { useEffect, useRef } from 'react'

const MORPH_TIME = 1.2   // seconds to morph between two texts
const COOLDOWN   = 2.5   // seconds to hold each text before morphing

/**
 * Cycles through an array of strings with a blur-morph liquid transition.
 * Uses requestAnimationFrame + SVG feColorMatrix threshold to create
 * the "melting" text effect.
 *
 * Props:
 *   texts     – string[] (min 2)
 *   className – applied to the outer wrapper
 */
export default function MorphingText({ texts, className = '' }) {
  const elA = useRef(null)   // leaving text
  const elB = useRef(null)   // entering text
  const idx  = useRef(0)
  const morph  = useRef(0)
  const cool   = useRef(COOLDOWN)
  const stamp  = useRef(Date.now())
  const raf    = useRef(null)

  useEffect(() => {
    const a = elA.current
    const b = elB.current
    if (!a || !b) return

    a.textContent = texts[0]
    b.textContent = texts[1 % texts.length]
    a.style.opacity = '100%'
    b.style.opacity = '0%'
    a.style.filter  = ''
    b.style.filter  = ''

    const tick = () => {
      const now = Date.now()
      const dt  = (now - stamp.current) / 1000
      stamp.current = now
      cool.current -= dt

      if (cool.current > 0) {
        // Hold state – A fully visible, B hidden
        a.style.filter  = ''
        a.style.opacity = '100%'
        b.style.filter  = ''
        b.style.opacity = '0%'
      } else {
        // Morphing – A fades out, B fades in
        morph.current += dt
        let f = morph.current / MORPH_TIME

        if (f >= 1) {
          // Snap complete, advance index, reset
          idx.current   = (idx.current + 1) % texts.length
          a.textContent = texts[idx.current]
          b.textContent = texts[(idx.current + 1) % texts.length]
          a.style.filter  = ''
          a.style.opacity = '100%'
          b.style.filter  = ''
          b.style.opacity = '0%'
          morph.current = 0
          cool.current  = COOLDOWN
        } else {
          // B enters (blur clears as f→1)
          b.style.filter  = `blur(${Math.min(8 / f - 8, 100)}px)`
          b.style.opacity = `${Math.pow(f, 0.4) * 100}%`
          // A exits (blur grows as f→1)
          const inv = 1 - f
          a.style.filter  = `blur(${Math.min(8 / inv - 8, 100)}px)`
          a.style.opacity = `${Math.pow(inv, 0.4) * 100}%`
        }
      }

      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [texts])

  // Use the longest string as invisible spacer so the container never resizes
  const longest = texts.reduce((a, b) => (a.length > b.length ? a : b), '')

  return (
    <>
      {/* SVG threshold filter — sharpens the blurred edges into a crisp morph */}
      <svg className="fixed w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="morph-threshold">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
            />
          </filter>
        </defs>
      </svg>

      <span
        className={`relative inline-flex items-center ${className}`}
        style={{ filter: 'url(#morph-threshold)' }}
      >
        {/* invisible spacer keeps container width stable */}
        <span className="invisible whitespace-nowrap" aria-hidden="true">{longest}</span>
        <span ref={elA} className="absolute left-0 whitespace-nowrap" aria-hidden="true" />
        <span ref={elB} className="absolute left-0 whitespace-nowrap" aria-hidden="true" />
      </span>
    </>
  )
}
