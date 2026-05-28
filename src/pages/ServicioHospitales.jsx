import { Link } from 'react-router-dom'
import { ArrowLeft, Hospital, HeartPulse, UtensilsCrossed, ClipboardCheck, Users } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicioHospitales() {
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
              <Hospital size={32} />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Área de atención
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brown-700">
                Servicio a Hospitales
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-brown-500 max-w-3xl leading-relaxed">
            Brindamos alimentación balanceada y de alta calidad para pacientes, personal médico y administrativo, cumpliendo con estrictos protocolos sanitarios y nutricionales.
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
                Alimentación con propósito clínico
              </h2>
              <p className="text-brown-500 leading-relaxed mb-6">
                Entendemos que la alimentación en un entorno hospitalario es parte fundamental del tratamiento. Por eso trabajamos con nutricionistas y personal calificado para ofrecer menús adaptados a cada necesidad médica.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <UtensilsCrossed size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Dietas personalizadas</h3>
                    <p className="text-sm text-brown-500">Menús para diabéticos, hipertensos, celíacos, renales y postquirúrgicos.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <HeartPulse size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Control nutricional</h3>
                    <p className="text-sm text-brown-500">Supervisión de ingesta calórica y balance de macronutrientes por paciente.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <ClipboardCheck size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Protocolos sanitarios</h3>
                    <p className="text-sm text-brown-500">Cumplimiento estricto de normas HACCP y bioseguridad hospitalaria.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-700">Personal médico y administrativo</h3>
                    <p className="text-sm text-brown-500">Servicio de cafetería y comedor para colaboradores del hospital.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col derecha */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="Servicio de alimentación hospitalaria"
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
                    Mejora la recuperación de los pacientes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Reduce riesgos de desnutrición intrahospitalaria
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Personal especializado en nutrición clínica
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                    Flexibilidad en horarios y volúmenes de producción
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
            ¿Necesitas un servicio de alimentación hospitalaria?
          </h2>
          <p className="text-brown-500 mb-8">
            Contáctanos y descubre cómo podemos ayudarte a brindar una alimentación de calidad.
          </p>
          <Link
            to="/"
            onClick={() => setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100)}
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
