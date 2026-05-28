import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicioHospitales from './pages/ServicioHospitales'
import ServicioInstituciones from './pages/ServicioInstituciones'
import ServicioPublico from './pages/ServicioPublico'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicio/hospitales" element={<ServicioHospitales />} />
        <Route path="/servicio/instituciones" element={<ServicioInstituciones />} />
        <Route path="/servicio/publico" element={<ServicioPublico />} />
      </Routes>
      </HashRouter>
  )
}
