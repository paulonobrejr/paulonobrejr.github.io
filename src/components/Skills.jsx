import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { skills } from '../data/resume'

function SkillRow({ group, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-b border-zinc-200 last:border-b-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left accent line — draws down on hover */}
      <motion.div
        className="absolute left-0 top-0 w-px bg-zinc-900"
        animate={{ height: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="py-6 pl-5 pr-2">
        {/* Row header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">
            {group.category}
          </span>
          <motion.span
            className="font-mono text-xs text-zinc-400"
            animate={{ color: hovered ? '#52525b' : '#a1a1aa' }}
          >
            {group.items.length}
          </motion.span>
        </div>

        {/* Skill tags — stagger-reveal on hover */}
        <div className="flex flex-wrap gap-2">
          {group.items.map((skill, i) => (
            <motion.span
              key={skill}
              className="font-mono text-xs border px-3 py-1.5 cursor-default"
              animate={{
                borderColor: hovered ? 'rgba(0,0,0,0.5)' : 'rgba(228,228,231,1)',
                color:        hovered ? '#0a0a0a'          : '#71717a',
                y:            hovered ? 0                       : 0,
                opacity:      hovered ? 1                       : 0.7,
              }}
              transition={{
                duration: 0.22,
                delay: hovered ? i * 0.025 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Animated progress bar — draws on hover */}
        <div className="mt-4 h-px w-full bg-zinc-200 overflow-hidden">
          <motion.div
            className="h-px bg-zinc-400 origin-left"
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-2">Stack</p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-12 text-[#0a0a0a]">Habilidades</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-zinc-200">
          {skills.map((group, i) => (
            <SkillRow key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
