import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { personal } from '../data/resume'

const methods = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/paulonobrejr', href: personal.linkedin, Icon: Linkedin, external: true },
  { label: 'GitHub', value: 'github.com/paulonobrejr', href: personal.github, Icon: Github, external: true },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, Icon: Phone },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-2">Entre em contato</p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-[#0a0a0a]">Contato</h2>
        <p className="text-zinc-500 text-sm mb-12 max-w-lg">
          Aberto a novas oportunidades e projetos interessantes. Fique à vontade para entrar em contato.
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {methods.map(({ label, value, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-4 border border-zinc-200 p-5 hover:border-zinc-400 transition-colors duration-150 group"
            >
              <div className="w-9 h-9 border border-zinc-300 flex items-center justify-center shrink-0 text-zinc-500 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-150">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wide">{label}</p>
                <p className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
