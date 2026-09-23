const lojas = [
  {
    nome: 'Amazon',
    desc: 'Compre com entrega rápida e frete Amazon Prime.',
    href: 'https://www.amazon.com.br/dp/6589141495',
    cta: 'Comprar na Amazon',
  },
  {
    nome: 'Editora TantaTinta',
    desc: 'Compre direto com a editora responsável pela publicação.',
    href: 'https://tantatinta.com.br/livro/janjao-e-alzira-e-os-misterios-de-cavendish/',
    cta: 'Comprar na TantaTinta',
  },
]

export default function Comprar() {
  return (
    <section id="comprar" className="bg-[#f2ede0] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-display text-teal uppercase tracking-[0.2em] text-sm mb-2">
            Onde comprar
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-teal-deep">
            Garanta o seu exemplar
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {lojas.map((l) => (
            <div
              key={l.nome}
              className="bg-white rounded-2xl p-8 shadow-md border border-teal-deep/10 flex flex-col"
            >
              <h3 className="font-display text-xl text-teal-deep mb-2">{l.nome}</h3>
              <p className="text-sm text-teal-deep/70 mb-6 flex-1">{l.desc}</p>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-teal-deep font-bold text-center px-6 py-3 rounded-full transition-colors"
              >
                {l.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
