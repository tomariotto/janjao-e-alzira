const pilares = [
  {
    emoji: '⭐',
    title: 'Virtudes',
    text: 'Ilhas enigmáticas que podem lhes ensinar virtudes importantes para a vida e o bem da humanidade. Janjão e Alzira terão que viver a aventura para descobri-las.',
  },
  {
    emoji: '🤝',
    title: 'Inclusão',
    text: 'Nossos heróis estão longe de ser perfeitos, mas estão dispostos a enfrentar desafios e transformar limitações em fortaleza!',
  },
  {
    emoji: '🧭',
    title: 'Colaboração',
    text: 'Ninguém é causa de si. O êxito desta aventura vai depender do espírito de equipe, da força da amizade e da união da família.',
  },
  {
    emoji: '🇧🇷',
    title: 'Brasil',
    text: 'Pode até lembrar roteiro de filme estrangeiro, mas é uma aventura vivida na costa brasileira, em meio à beleza da nossa mata atlântica.',
  },
  {
    emoji: '🙏',
    title: 'Fé',
    text: 'Uma jornada que também fala sobre acreditar em algo maior, capaz de transformar o medo em esperança.',
  },
]

export default function Pilares() {
  return (
    <section id="pilares" className="bg-teal-deep text-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="font-display text-gold uppercase tracking-[0.2em] text-sm mb-2 text-center">
          Temas da obra
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
          Mensagens que ficam depois da última página
        </h2>
        <p className="text-teal-pale text-center max-w-2xl mx-auto mb-12">
          Uma história pensada para transmitir mensagens proveitosas para a vida de toda a família.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-display text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-teal-pale leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
