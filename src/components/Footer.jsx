export default function Footer() {
  return (
    <footer className="bg-teal-deep text-teal-pale py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-512.png" alt="" className="h-6 w-6 object-contain" />
          <span>Janjão e Alzira e os Mistérios de Cavendish — Tomás Mariotto</span>
        </div>
        <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
