export default function Sobre() {
  return (
    <section id="livro" className="max-w-6xl mx-auto px-5 py-20">
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
        <div>
          <p className="font-display text-teal uppercase tracking-[0.2em] text-sm mb-2">O livro</p>
          <h2 className="font-display text-3xl md:text-4xl text-teal-deep mb-6">
            Uma história intrigante e envolvente!
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Janjão e Alzira são dois adolescentes que, durante uma excursão escolar a Paraty,
            acabam envolvidos em uma aventura por ilhas enigmáticas, ligada ao tesouro perdido
            do corsário inglês Thomas Cavendish. Cada ilha lhes revelará segredos e, principalmente,
            uma virtude nela escondida.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Ambos possuem deficiências físicas — que, no final, são fatores que acabam alavancando
            seus potenciais durante a jornada. Ao lado deles estarão o sisudo navegador Olavo e o
            fiel amigo Beto, embarcando juntos numa viagem transformadora e emocionante.
          </p>
          <p className="text-lg leading-relaxed">
            Nesta história não há poderes sobrenaturais ou feitiços mágicos: o poder de que os
            heróis dispõem vem das próprias virtudes que precisam encontrar dentro de si mesmos.
          </p>
        </div>
        <div className="bg-teal-deep/5 border border-teal-deep/10 rounded-2xl p-8">
          <h3 className="font-display text-xl text-teal-deep mb-4">Uma ficção que se mistura com fatos reais</h3>
          <p className="leading-relaxed">
            É uma história brasileira intrigante que mistura ficção com fatos que de fato
            ocorreram há séculos na costa do Brasil: o corsário inglês{' '}
            <strong>Thomas Cavendish</strong>, com seus tesouros, e o tripulante{' '}
            <strong>Anthony Knivet</strong> realmente existiram.
          </p>
          <div className="mt-6 pt-6 border-t border-teal-deep/10">
            <p className="text-sm font-display text-teal-deep mb-3">Saiba mais</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a
                  href="https://pt.wikipedia.org/wiki/Thomas_Cavendish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal-deep underline underline-offset-2"
                >
                  Thomas Cavendish — Wikipédia
                </a>
              </li>
              <li>EDSON, Paulo. <em>Thomas Cavendish: O Corsário de Ilhabela.</em></li>
              <li>
                HUE, Sheila; KNIVET, Anthony. <em>As incríveis aventuras e estranhos infortúnios de Anthony Knivet.</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
