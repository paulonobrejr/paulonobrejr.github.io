import { useEffect, useRef } from 'react'

const H_LINES = [
  { top: '20%', delay: 150 },
  { top: '50%', delay: 280 },
  { top: '80%', delay: 410 },
]

const V_LINES = [
  { left: '20%', delay: 520 },
  { left: '50%', delay: 640 },
  { left: '80%', delay: 760 },
]

function AccentLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {H_LINES.map((l, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-zinc-200 hero-line-h"
          style={{
            top: l.top,
            animationDelay: `${l.delay}ms`,
            transform: 'scaleX(0)',
            transformOrigin: '50% 50%',
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="absolute inset-0 hero-shimmer"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(10,10,10,.10), transparent)',
              animationDelay: `${l.delay}ms`,
            }}
          />
        </div>
      ))}

      {V_LINES.map((l, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-zinc-200 hero-line-v"
          style={{
            left: l.left,
            animationDelay: `${l.delay}ms`,
            transform: 'scaleY(0)',
            transformOrigin: '50% 0%',
            willChange: 'transform, opacity',
          }}
        >
          <div
            className="absolute inset-0 hero-shimmer"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(10,10,10,.10), transparent)',
              animationDelay: `${l.delay}ms`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default function HeroBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setSize()

    let particles = []
    let raf = 0

    const count = () => Math.floor((canvas.width * canvas.height) / 7000)

    const make = () => {
      const fadeDelay = Math.random() * 600 + 100
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      }
    }

    const reset = (p) => {
      p.x = Math.random() * canvas.width
      p.y = Math.random() * canvas.height
      p.speed = Math.random() / 5 + 0.1
      p.opacity = 0.7
      p.fadeDelay = Math.random() * 600 + 100
      p.fadeStart = Date.now() + p.fadeDelay
      p.fadingOut = false
    }

    const init = () => {
      particles = []
      for (let i = 0; i < count(); i++) particles.push(make())
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y -= p.speed
        if (p.y < 0) reset(p)
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true
        if (p.fadingOut) {
          p.opacity -= 0.008
          if (p.opacity <= 0) reset(p)
        }
        ctx.fillStyle = `rgba(10, 10, 10, ${p.opacity})`
        ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1)
      })
      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => {
      setSize()
      init()
    })
    ro.observe(canvas)

    init()
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
        .hero-line-h {
          opacity: 0;
          animation: heroDrawX 800ms cubic-bezier(.22,.61,.36,1) forwards;
        }
        .hero-line-v {
          opacity: 0;
          animation: heroDrawY 900ms cubic-bezier(.22,.61,.36,1) forwards;
        }
        .hero-shimmer {
          opacity: 0;
          animation: heroShimmer 900ms ease-out forwards;
        }
        @keyframes heroDrawX {
          0%   { transform: scaleX(0); opacity: 0; }
          60%  { opacity: 0.9; }
          100% { transform: scaleX(1); opacity: 0.75; }
        }
        @keyframes heroDrawY {
          0%   { transform: scaleY(0); opacity: 0; }
          60%  { opacity: 0.9; }
          100% { transform: scaleY(1); opacity: 0.75; }
        }
        @keyframes heroShimmer {
          0%   { opacity: 0; }
          30%  { opacity: 0.25; }
          100% { opacity: 0; }
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'multiply', opacity: 0.4 }}
      />

      <AccentLines />
    </>
  )
}
