export default function Hero() {
  return (
    <section
      id="topo"
      className="relative bg-gradient-to-b from-teal-deep via-teal-deep to-[#0c2f2e] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#8fd0c4_0,transparent_45%),radial-gradient(circle_at_80%_0%,#f0c419_0,transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display text-gold text-sm md:text-base tracking-[0.2em] uppercase mb-3">
            Uma aventura brasileira
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
            Janjão e Alzira
            <span className="block text-2xl md:text-3xl text-teal-light mt-1">
              e os Mistérios de Cavendish
            </span>
          </h1>
          <p className="text-teal-pale text-lg leading-relaxed mb-8 max-w-xl">
            Dois adolescentes, uma excursão escolar a Paraty e um tesouro perdido há séculos.
            Uma jornada por ilhas enigmáticas onde a verdadeira força não vem de poderes mágicos —
            vem das virtudes que cada um carrega dentro de si.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#comprar"
              className="bg-gold hover:bg-gold-dark text-teal-deep font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              Quero comprar o livro
            </a>
            <a
              href="#trailer"
              className="border-2 border-teal-light hover:bg-teal-light/10 font-bold px-6 py-3 rounded-full transition-colors"
            >
              Ver o trailer
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/capa-frente.jpg"
            alt="Capa do livro Janjão e Alzira e os Mistérios de Cavendish"
            className="w-64 md:w-80 rounded-lg shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
