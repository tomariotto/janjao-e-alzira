export default function Trailer() {
  return (
    <section id="trailer" className="max-w-6xl mx-auto px-5 py-20">
      <div className="text-center mb-10">
        <p className="font-display text-teal uppercase tracking-[0.2em] text-sm mb-2">Trailer</p>
        <h2 className="font-display text-3xl md:text-4xl text-teal-deep">
          Conheça o universo de Janjão e Alzira
        </h2>
      </div>
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-teal-deep/10">
        <video
          className="w-full h-auto bg-black"
          controls
          playsInline
          preload="metadata"
        >
          <source src="/assets/teaser.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo em HTML5.
        </video>
      </div>
    </section>
  )
}
