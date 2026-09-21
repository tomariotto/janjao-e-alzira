const links = [
  { href: '#livro', label: 'O Livro' },
  { href: '#pilares', label: 'Temas' },
  { href: '#trailer', label: 'Trailer' },
  { href: '#autor', label: 'Autor' },
  { href: '#escolas', label: 'Escolas' },
  { href: '#comprar', label: 'Comprar' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-teal-deep/95 backdrop-blur text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <a href="#topo" className="flex items-center gap-2">
          <img src="/assets/logo-512.png" alt="Janjão e Alzira" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg tracking-wide hidden sm:block">Janjão &amp; Alzira</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#comprar"
          className="bg-gold hover:bg-gold-dark text-teal-deep font-bold text-sm px-4 py-2 rounded-full transition-colors"
        >
          Comprar o livro
        </a>
      </div>
    </header>
  )
}
