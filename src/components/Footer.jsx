export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} Paulo Nobre Junior
        </p>
        <p className="font-mono text-xs text-zinc-400">
          Desenvolvido com React + Tailwind
        </p>
      </div>
    </footer>
  )
}
