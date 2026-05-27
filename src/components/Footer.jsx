import { Phone, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brown-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.svg"
              alt="ASOALIDISU Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div>
              <p className="text-lg font-bold text-white">ASOALIDISU</p>
              <p className="text-sm text-primary-200/70">
                Asociación de Servicios de Alimentación Dirigentes del Sur
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3 text-primary-200">
            <Phone size={16} />
            <span className="text-sm">0986230263 - 0982021433</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-200/60">
            &copy; {year} ASOALIDISU. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-200/60 flex items-center gap-1.5">
            Hecho con <Heart size={14} className="text-red-400" /> para la comunidad
          </p>
        </div>
      </div>
    </footer>
  )
}
