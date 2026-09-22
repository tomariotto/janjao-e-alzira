export default function Escolas() {
  return (
    <section id="escolas" className="max-w-6xl mx-auto px-5 py-20">
      <div className="bg-gradient-to-br from-teal to-teal-deep text-white rounded-3xl p-8 md:p-14 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
        <div>
          <p className="font-display text-gold uppercase tracking-[0.2em] text-sm mb-2">
            Escolas e organizações
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Leve Janjão e Alzira para mais leitores
          </h2>
          <p className="text-teal-pale text-lg leading-relaxed">
            Escolas, bibliotecas e organizações interessadas em adotar ou comprar o livro para
            ações mais massivas podem conhecer a apresentação completa do universo de Janjão e
            Alzira, ou falar diretamente comigo para combinar os detalhes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="/assets/pitch-janjao-e-alzira.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-teal-deep font-bold text-center px-6 py-3 rounded-full transition-colors"
          >
            Baixar apresentação (PDF)
          </a>
          <a
            href="mailto:contato@janjaoealzira.com.br?subject=Janj%C3%A3o%20e%20Alzira%20-%20Contato%20institucional&body=Ol%C3%A1%2C%20Tom%C3%A1s!%20Gostaria%20de%20saber%20mais%20sobre%20levar%20Janj%C3%A3o%20e%20Alzira%20para%20a%20nossa%20institui%C3%A7%C3%A3o."
            className="border-2 border-white/70 hover:bg-white/10 font-bold text-center px-6 py-3 rounded-full transition-colors"
          >
            Falar com o autor
          </a>
        </div>
      </div>
    </section>
  )
}
