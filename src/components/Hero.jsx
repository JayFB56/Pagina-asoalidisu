import { ChevronRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Servicio de catering profesional"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #5D4037 0%, #E67E22 100%)'
            e.target.style.display = 'block'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/85 via-brown-900/70 to-brown-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6 border border-white/10">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            ASOALIDISU — Asociación de Alimentación
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Asociación de Servicios de
            <span className="block text-primary-300">Alimentación Dirigentes del Sur</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed animate-fade-in-up animate-fade-in-up-delay-1">
            Brindamos servicios de alimentación y catering institucional con los más altos
            estándares de calidad, distinción y compromiso. Confianza que alimenta.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-fade-in-up-delay-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Contáctanos
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl text-base font-semibold transition-all"
            >
              Ver servicios
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
