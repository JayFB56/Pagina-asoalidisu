import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, CalendarCheck, Users, ChefHat, Trophy } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicioInstituciones() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brown-500 hover:text-primary-600 transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center">
              <Building2 size={32} />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Área de atención
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brown-700">
                Instituciones Públicas y Privadas
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-brown-500 max-w-3xl leading-relaxed">
            Soluciones integrales de catering para empresas, colegios, centros gubernamentales y organizaciones privadas, adaptadas a las necesidades de cada institución.
          </p>
        </div>
      </section>

      {/* Detalles */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Col izquierda */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown-700 mb-6">
                Catering institucional de calidad
              </h2>
              <p className="text-brown-500 leading-relaxed mb-6">
                Ofrecemos soluciones alimenticias completas para todo tipo de instituciones, asegurando calidad, puntualidad y variedad en cada servicio. Nos adaptamos a los horarios, volúmenes y requerimientos específicos de cada entidad.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <ChefHat size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Menús corporativos</h3>
                    <p className="text-sm text-brown-500">Planes de alimentación para empleados con opciones variadas y nutritivas.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CalendarCheck size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Eventos institucionales</h3>
                    <p className="text-sm text-brown-500">Servicio de catering para reuniones, capacitaciones, celebraciones y eventos oficiales.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Colegios y centros educativos</h3>
                    <p className="text-sm text-brown-500">Alimentación balanceada para estudiantes, cumpliendo estándares nutricionales.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Gobierno y sector público</h3>
                    <p className="text-sm text-brown-500">Proveedores registrados en el catálogo electrónico de contratación pública.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col derecha */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80"
                alt="Catering institucional"
                className="w-full rounded-2xl shadow-xl mb-8"
                onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #E67E22, #5D4037)'
                  e.target.style.display = 'block'
                  e.target.style.height = '400px'
                  e.target.removeAttribute('src')
                }}
              />

              <div className="bg-brown-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Beneficios</h3>
                <ul className="space-y-2 text-sm text-primary-200">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Atención personalizada según el tipo de institución
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Flexibilidad en menús y horarios de entrega
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Proveedores habilitados para contratación pública
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Relación calidad-precio competitiva
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brown-700 mb-4">
            ¿Eres una institución interesada en nuestros servicios?
          </h2>
          <p className="text-brown-500 mb-8">
            Solicita una cotización sin compromiso y descubre todo lo que podemos ofrecerte.
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Contáctanos
          </Link>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  )
}
