import { Target, Eye, UtensilsCrossed } from 'lucide-react'

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
            <UtensilsCrossed size={28} />
          </div>
          <h2 className="section-title">Misión y Visión</h2>
          <p className="text-brown-500 text-lg max-w-2xl mx-auto">
            Nuestra razón de ser y el futuro que construimos cada día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Misión */}
          <div className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500 rounded-t-2xl" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-bold text-brown-700">Misión</h3>
            </div>
            <p className="text-brown-600 text-lg leading-relaxed">
              Prestar servicios de alimentación con todas las normativas de calidad y distinción.
            </p>
          </div>

          {/* Visión */}
          <div className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500 rounded-t-2xl" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <Eye size={26} />
              </div>
              <h3 className="text-2xl font-bold text-brown-700">Visión</h3>
            </div>
            <p className="text-brown-600 text-lg leading-relaxed">
              Fomentar el empleo y crear una empresa competitiva en el mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
