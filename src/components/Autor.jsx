export default function Autor() {
  return (
    <section id="autor" className="bg-[#f2ede0] py-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[0.8fr,1.2fr] gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/assets/autor.jpg"
            alt="Tomás Mariotto, autor de Janjão e Alzira"
            className="w-64 h-64 object-cover rounded-full shadow-xl ring-8 ring-white"
          />
        </div>
        <div>
          <p className="font-display text-teal uppercase tracking-[0.2em] text-sm mb-2">O autor</p>
          <h2 className="font-display text-3xl md:text-4xl text-teal-deep mb-6">Tomás Mariotto</h2>
          <p className="text-lg leading-relaxed mb-4">
            Tomás Mariotto sempre quis ser um "inventor". Apaixonado por criações diversas — como
            histórias, músicas, jogos e pratos culinários —, é abundante em ideias, detalhista nas
            execuções e espiritualizado nas intenções. É também músico e compositor, com alguns
            álbuns independentes lançados. <em>Janjão e Alzira</em> é sua primeira obra literária.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Bacharel e mestre em Administração pela EAESP — Fundação Getulio Vargas, trabalhou por
            mais de vinte anos no mercado financeiro, tendo a criatividade e o design como
            companheiros fiéis. Nasceu em São Paulo-SP, é casado e pai de três filhos.
          </p>
        </div>
      </div>
    </section>
  )
}
