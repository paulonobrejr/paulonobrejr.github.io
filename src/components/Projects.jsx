import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/resume'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className="border border-zinc-200 p-6 flex flex-col gap-4 hover:border-zinc-400 transition-colors duration-200 group"
    >
      <div>
        <h3 className="font-semibold text-base text-[#0a0a0a] mb-2 group-hover:underline decoration-1 underline-offset-2">
          {project.name}
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-xs border border-zinc-200 px-2 py-0.5 text-zinc-500 group-hover:border-zinc-300 transition-colors duration-200"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.github || project.live) && (
        <div className="flex gap-3 pt-2 border-t border-zinc-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <Github size={13} />
              Código
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <ExternalLink size={13} />
              Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-2">Trabalho</p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-12 text-[#0a0a0a]">Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
