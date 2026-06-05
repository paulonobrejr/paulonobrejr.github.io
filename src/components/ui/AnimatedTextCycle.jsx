import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Cycles through an array of words with a vertical slide-in / slide-out transition.
 * Designed for inline use inside body text.
 *
 * Props:
 *   words     – string[]
 *   interval  – ms between cycles (default 2800)
 *   className – applied to the outer span
 */
export default function AnimatedTextCycle({ words, interval = 2800, className = '' }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span
      className={`relative inline-block overflow-hidden align-bottom ${className}`}
      style={{ minWidth: `${Math.max(...words.map((w) => w.length)) * 0.6}em` }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%',   opacity: 1 }}
          exit={{    y: '-110%', opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
