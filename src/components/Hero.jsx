import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, Download, ArrowDown } from 'lucide-react'
import { personal } from '../data/resume'
import HeroBackground from './HeroBackground'
import StaggerText from './ui/StaggerText'
import MorphingText from './ui/MorphingText'
import AnimatedTextCycle from './ui/AnimatedTextCycle'

const ROLES = [
  'Engenheiro de Software',
  'Desenvolvedor Backend',
  'PHP & Laravel',
  'Node.js & React',
  'Disponível para Oportunidades',
]

const AVAILABILITY = ['vagas full-time', 'contratos', 'posições remotas', 'consultoria']

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden bg-[#fafafa]"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full py-24">

        {/* Morphing role kicker */}
        <div className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-5 h-4 flex items-center">
          <MorphingText
            texts={ROLES}
            className="text-zinc-500"
          />
        </div>

        {/* Name — per-word stagger reveal */}
        <StaggerText
          text={personal.name}
          el="h1"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 text-[#0a0a0a]"
          stagger={0.07}
          delay={0.1}
          direction="bottom"
        />

        {/* Summary */}
        <motion.p
          {...fade(0.55)}
          className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed mb-6"
        >
          {personal.summary}
        </motion.p>

        {/* Availability badge with cycling text */}
        <motion.div {...fade(0.7)} className="flex items-center gap-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-zinc-500">
            Disponível para{' '}
            <AnimatedTextCycle
              words={AVAILABILITY}
              interval={2600}
              className="text-zinc-700"
            />
          </span>
        </motion.div>

        {/* Contact row */}
        <motion.div
          {...fade(0.8)}
          className="flex flex-wrap gap-4 text-sm text-zinc-500 mb-10"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {personal.location}
          </span>
          <a
            href={`mailto:${personal.email}`}
            data-magnetic
            className="flex items-center gap-1.5 hover:text-zinc-800 transition-colors"
          >
            <Mail size={14} />
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone}`}
            data-magnetic
            className="flex items-center gap-1.5 hover:text-zinc-800 transition-colors"
          >
            <Phone size={14} />
            {personal.phone}
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...fade(0.9)} className="flex flex-wrap gap-3 mb-10">
          <a
            href="#experience"
            data-magnetic
            className="flex items-center gap-2 bg-[#0a0a0a] text-[#fafafa] text-sm font-medium px-5 py-2.5 hover:bg-zinc-800 transition-colors duration-150"
          >
            Ver Experiência
            <ArrowDown size={14} />
          </a>
          <a
            href={personal.cv}
            download
            data-magnetic
            className="flex items-center gap-2 border border-zinc-300 text-zinc-900 text-sm font-medium px-5 py-2.5 hover:border-zinc-600 hover:text-zinc-900 transition-colors duration-150"
          >
            Baixar Currículo
            <Download size={14} />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fade(1.0)} className="flex gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
