import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Splits text into words and reveals each with a staggered upward entrance.
 * Triggers once when the element enters the viewport.
 *
 * Props:
 *   text       – string to animate
 *   el         – wrapper element tag (default 'div')
 *   className  – applied to the wrapper
 *   stagger    – seconds between each word (default 0.055)
 *   delay      – initial delay before first word (default 0)
 *   direction  – 'bottom' | 'top' | 'z' (default 'bottom')
 */
export default function StaggerText({
  text,
  el: El = 'div',
  className = '',
  stagger = 0.055,
  delay = 0,
  direction = 'bottom',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  const hidden = {
    opacity: 0,
    ...(direction === 'bottom' && { y: 28 }),
    ...(direction === 'top'   && { y: -28 }),
    ...(direction === 'z'     && { scale: 0.6, filter: 'blur(6px)' }),
  }

  const visible = { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }

  const words = text.split(' ')

  return (
    <El
      ref={ref}
      className={`flex flex-wrap ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={hidden}
            animate={inView ? visible : hidden}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && (
            <span className="inline-block" style={{ width: '0.3em' }} />
          )}
        </span>
      ))}
    </El>
  )
}
