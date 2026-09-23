import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Pilares from './components/Pilares.jsx'
import Trailer from './components/Trailer.jsx'
import Autor from './components/Autor.jsx'
import Escolas from './components/Escolas.jsx'
import Comprar from './components/Comprar.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Hero />
      <Sobre />
      <Pilares />
      <Trailer />
      <Autor />
      <Escolas />
      <Comprar />
      <Contato />
      <Footer />
    </div>
  )
}
