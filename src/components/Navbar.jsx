import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { personal } from '../data/resume'
import DockNav from './ui/DockNav'

const links = [
  { label: 'Início', href: '#home' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' },
]

const pillGlass = {
  borderRadius: '9999px',
  background: 'rgba(250, 250, 250, 0.75)',
  backdropFilter: 'blur(28px) saturate(180%) brightness(108%)',
  WebkitBackdropFilter: 'blur(28px) saturate(180%) brightness(108%)',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.80), 0 8px 40px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.04)',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      {/* ── Transparent top bar (at-rest state) ────────────────────────── */}
      <header
        className="fixed inset-x-0 top-0 z-50 transition-opacity duration-300"
        style={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? 'none' : 'auto' }}
      >
        <div className="h-16 flex items-center justify-center relative max-w-5xl mx-auto px-6">
          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                {l.label}
              </a>
            ))}
            <span className="w-px h-4 bg-zinc-300" />
            <a href={personal.cv} download
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
              <Download size={13} /> CV
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden absolute right-6 p-1 text-zinc-500 hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown for top-bar state */}
        {open && !scrolled && (
          <div style={{
            background: 'rgba(250,250,250,0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(0,0,0,0.06)',
          }}>
            <nav className="flex flex-col px-6 py-5 gap-5 max-w-5xl mx-auto">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={close}
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{l.label}</a>
              ))}
              <div className="border-t border-zinc-200 pt-4">
                <a href={personal.cv} download onClick={close}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  <Download size={13} /> Baixar CV
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── Floating glass pill (scrolled state) ───────────────────────── */}
      <div
        className="fixed z-50 left-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          ...pillGlass,
          top: '16px',
          transform: scrolled
            ? 'translateX(-50%) translateY(0px)'
            : 'translateX(-50%) translateY(-16px)',
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? 'auto' : 'none',
        }}
      >
        {/* Specular rim highlight */}
        <div
          className="absolute inset-x-4 top-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
            borderRadius: '9999px',
          }}
        />

        <div className="flex items-center h-12 px-6">
          {/* Desktop nav — magnifying DockNav */}
          <div className="hidden md:flex items-center gap-6">
            <DockNav items={links} gap="gap-7" />
            <span className="w-px h-4 bg-zinc-300" />
            <a
              href={personal.cv}
              download
              data-magnetic
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
            >
              <Download size={13} /> CV
            </a>
          </div>

          {/* Mobile toggle inside pill */}
          <button
            className="md:hidden p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown attached below pill */}
        {open && scrolled && (
          <div
            className="md:hidden absolute left-1/2 -translate-x-1/2 mt-3 w-52 overflow-hidden"
            style={{
              top: '100%',
              borderRadius: '16px',
              background: 'rgba(250, 250, 250, 0.92)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={close}
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{l.label}</a>
              ))}
              <div className="border-t border-zinc-200 pt-3">
                <a href={personal.cv} download onClick={close}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  <Download size={13} /> Baixar CV
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}
