import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experience, education } from '../data/resume'

function TimelineCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 pb-14 last:pb-0"
    >
      {/* Animated dot */}
      <motion.span
        className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-zinc-50"
        initial={{ scale: 0, backgroundColor: '#d4d4d8' }}
        animate={inView ? { scale: 1, backgroundColor: '#71717a' } : {}}
        transition={{ duration: 0.4, delay: index * 0.07 + 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Card */}
      <div className="group border border-zinc-200 hover:border-zinc-400 transition-colors duration-300">
        {/* Top accent bar that draws in on hover */}
        <div className="h-px w-full overflow-hidden">
          <motion.div
            className="h-px bg-zinc-900 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="font-semibold text-lg text-[#0a0a0a] leading-tight">{item.role}</h3>
              <p className="text-sm font-medium text-zinc-500 mt-0.5">{item.company}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 shrink-0">
              <span className="font-mono text-xs text-zinc-400 flex items-center gap-1">
                <Calendar size={10} />
                {item.period}
              </span>
              <span className="font-mono text-xs text-zinc-400 flex items-center gap-1">
                <MapPin size={10} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-2.5 mb-5">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                <span className="text-zinc-400 mt-0.5 shrink-0 font-mono">›</span>
                {b}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-xs border border-zinc-200 px-2 py-0.5 text-zinc-400 group-hover:text-zinc-600 group-hover:border-zinc-300 transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)

  // The vertical timeline line draws down as you scroll through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.3'],
  })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-2">Carreira</p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-14 text-[#0a0a0a]">Experiência</h2>

        {/* Timeline */}
        <div className="relative ml-1.5">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 overflow-hidden">
            <motion.div
              className="w-full bg-zinc-400 origin-top"
              style={{ scaleY: lineScaleY, height: '100%' }}
            />
          </div>

          {experience.map((item, i) => (
            <TimelineCard key={item.company} item={item} index={i} />
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 pt-12 border-t border-zinc-200">
          <p className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-4">Educação</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border border-zinc-200 p-5">
            <div>
              <h3 className="font-semibold text-[#0a0a0a]">{education.school}</h3>
              <p className="text-sm text-zinc-500 mt-0.5">{education.degree}</p>
            </div>
            <span className="font-mono text-xs text-zinc-400">{education.period}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
