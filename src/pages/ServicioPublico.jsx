import { Link } from 'react-router-dom'
import { ArrowLeft, Users, Coffee, PartyPopper, ShoppingBag, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicioPublico() {
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
              <Users size={32} />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Área de atención
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brown-700">
                Servicio Público en General
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-brown-500 max-w-3xl leading-relaxed">
            Atención al público con menús variados, nutritivos y accesibles para toda la comunidad. Llevamos alimentación de calidad a eventos, ferias y espacios públicos.
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
                Alimentación para la comunidad
              </h2>
              <p className="text-brown-500 leading-relaxed mb-6">
                Creemos que la buena alimentación debe estar al alcance de todos. Ofrecemos servicios de comida variada y nutritiva para el público en general, con precios accesibles y la misma calidad que nos distingue.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <Coffee size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Cafeterías y comedores</h3>
                    <p className="text-sm text-brown-500">Espacios de alimentación abiertos al público con menús diarios variados.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <PartyPopper size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Eventos públicos y ferias</h3>
                    <p className="text-sm text-brown-500">Servicio de alimentación para eventos comunitarios, ferias gastronómicas y celebraciones populares.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Comida para llevar</h3>
                    <p className="text-sm text-brown-500">Opción de menús empacados y listos para llevar, ideales para personas con poco tiempo.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <Star size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Menús accesibles</h3>
                    <p className="text-sm text-brown-500">Opciones económicas sin sacrificar calidad ni sabor, para toda la familia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col derecha */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1592861956120-e524fc5c0a36?w=800&q=80"
                alt="Servicio de alimentación al público"
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
                    Comida variada y nutritiva para toda la comunidad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Precios accesibles y menús para todos los gustos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Presencia en ferias y eventos comunitarios
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Misma calidad y estándares que en nuestros servicios institucionales
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
            ¿Quieres disfrutar de nuestros servicios?
          </h2>
          <p className="text-brown-500 mb-8">
            Contáctanos para conocer nuestros puntos de atención y menús disponibles.
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
