import { Building2, Hospital, Users, ClipboardCheck } from 'lucide-react'

const SERVICES = [
  {
    title: 'Servicio a Hospitales',
    description:
      'Alimentación balanceada y de alta calidad para pacientes, personal médico y administrativo, cumpliendo con estrictos protocolos sanitarios.',
    icon: Hospital,
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    alt: 'Servicio de alimentación hospitalaria',
  },
  {
    title: 'Instituciones Públicas y Privadas',
    description:
      'Soluciones integrales de catering para empresas, colegios, centros gubernamentales y organizaciones privadas.',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80',
    alt: 'Catering institucional',
  },
  {
    title: 'Servicio Público en General',
    description:
      'Atención al público con menús variados, nutritivos y accesibles para toda la comunidad.',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1592861956120-e524fc5c0a36?w=600&q=80',
    alt: 'Servicio de alimentación al público',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
            <ClipboardCheck size={28} />
          </div>
          <h2 className="section-title">Áreas de atención</h2>
          <p className="text-brown-500 text-lg max-w-2xl mx-auto">
            Soluciones especializadas para cada necesidad alimenticia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.background = `linear-gradient(135deg, #E67E22, #5D4037)`
                    e.target.style.display = 'block'
                    e.target.removeAttribute('src')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm text-primary-600 flex items-center justify-center shadow-lg group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <service.icon size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-brown-700 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-brown-500 leading-relaxed text-sm flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
