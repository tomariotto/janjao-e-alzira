const pilares = [
  {
    emoji: '🤝',
    title: 'Inclusão',
    text: 'Janjão e Alzira enfrentam deficiências físicas que, na jornada, se tornam fonte de força — não de limitação.',
  },
  {
    emoji: '⭐',
    title: 'Virtudes',
    text: 'Cada ilha guarda uma virtude a ser descoberta. O verdadeiro tesouro está no caráter, não na magia.',
  },
  {
    emoji: '🙏',
    title: 'Fé',
    text: 'Uma jornada que também fala sobre acreditar em algo maior nos momentos de dúvida e medo.',
  },
  {
    emoji: '🧭',
    title: 'Colaboração',
    text: 'Ninguém chega sozinho ao tesouro. Olavo e Beto mostram que a jornada se faz em equipe.',
  },
  {
    emoji: '🌱',
    title: 'Imperfeição',
    text: 'Heróis que erram, duvidam e aprendem — porque ninguém precisa ser perfeito para ser extraordinário.',
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
