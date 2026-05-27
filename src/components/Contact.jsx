import { Phone, FileText, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
            <Send size={28} />
          </div>
          <h2 className="section-title">Contacto y Registro</h2>
          <p className="text-brown-500 text-lg max-w-2xl mx-auto">
            Estamos listos para atenderte. Contáctanos por cualquiera de nuestros canales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-primary-100 overflow-hidden">
            {/* Top bar */}
            <div className="bg-primary-500 p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Hablemos
              </h3>
              <p className="text-primary-100 text-base">
                Agenda una consulta sin compromiso
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
              {/* Left: contact info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brown-500 uppercase tracking-wider mb-1">
                      Teléfonos
                    </p>
                    <p className="text-lg font-bold text-brown-700">
                      0986230263 - 0982021433
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brown-500 uppercase tracking-wider mb-1">
                      Registro
                    </p>
                    <p className="text-base text-brown-600 leading-relaxed">
                      Portal de contratación pública - Catálogo electrónico
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brown-500 uppercase tracking-wider mb-1">
                      Ubicación
                    </p>
                    <p className="text-base text-brown-600">
                      Sur del Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brown-500 uppercase tracking-wider mb-1">
                      Horario
                    </p>
                    <p className="text-base text-brown-600">
                      Lun - Sáb: 8:00 am - 6:00 pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: image / decoration */}
              <div className="relative rounded-2xl overflow-hidden min-h-[250px]">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                  alt="Servicio de catering"
                  className="w-full h-full object-cover absolute inset-0"
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #E67E22, #5D4037)'
                    e.target.style.display = 'block'
                    e.target.removeAttribute('src')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold">
                    Calidad y distinción en cada servicio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
