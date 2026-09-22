export default function Contato() {
  return (
    <section id="contato" className="max-w-6xl mx-auto px-5 py-20 text-center">
      <p className="font-display text-teal uppercase tracking-[0.2em] text-sm mb-2">Contato</p>
      <h2 className="font-display text-3xl md:text-4xl text-teal-deep mb-4">
        Gostou do livro? Ideias para a história?
      </h2>
      <p className="text-lg text-teal-deep/80 mb-2 max-w-xl mx-auto">
        Dúvidas, convites para eventos, entrevistas ou parcerias.
      </p>
      <p className="font-display text-xl text-teal-deep mb-6">Vamos conversar!</p>
      <a
        href="mailto:tomariotto@gmail.com"
        className="inline-block bg-teal-deep hover:bg-teal text-white font-bold px-8 py-3 rounded-full transition-colors"
      >
        tomariotto@gmail.com
      </a>
    </section>
  )
}
