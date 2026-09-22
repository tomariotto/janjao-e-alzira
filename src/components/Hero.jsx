export default function Hero() {
  return (
    <section
      id="topo"
      className="relative text-white overflow-hidden bg-teal-deep"
    >
      <img
        src="/assets/hero-fundo.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/90 via-teal-deep/60 to-teal-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2f2e]/70 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display text-gold text-sm md:text-base tracking-[0.2em] uppercase mb-3">
            Uma aventura brasileira!
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4 text-white">
            Janjão e Alzira
            <span className="block text-2xl md:text-3xl mt-1">
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
