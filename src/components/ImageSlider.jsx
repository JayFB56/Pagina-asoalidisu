import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PLATES = [
  {
    src: 'https://images.unsplash.com/photo-1748659118761-44a30b82478c?w=800&q=80',
    alt: 'Ceviche de camarón ecuatoriano',
  },
  {
    src: 'https://images.unsplash.com/photo-1562707774-553917f561df?w=800&q=80',
    alt: 'Ceviche de pescado',
  },
  {
    src: 'https://images.unsplash.com/photo-1761314036615-f1a9e69514d3?w=800&q=80',
    alt: 'Ceviche con calamares y chifles',
  },
  {
    src: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?w=800&q=80',
    alt: 'Mariscos tropicales en hoja de plátano',
  },
  {
    src: 'https://images.unsplash.com/photo-1768885149216-ea51e07e3940?w=800&q=80',
    alt: 'Fritura de mariscos costeña',
  },
  {
    src: 'https://images.unsplash.com/photo-1718942899999-b3da4177ee2a?w=800&q=80',
    alt: 'Pescado a la parrilla con acompañantes',
  },
  {
    src: 'https://images.unsplash.com/photo-1716816211582-ef70b1cd2e70?w=800&q=80',
    alt: 'Pescado horneado con vegetales',
  },
  {
    src: 'https://images.unsplash.com/photo-1761314036779-84078bec535c?w=800&q=80',
    alt: 'Arroz marinero con mariscos',
  },
]

export default function ImageSlider({ autoPlayInterval = 4000 }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % PLATES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + PLATES.length) % PLATES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval)
    return () => clearInterval(timer)
  }, [next, autoPlayInterval])

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {PLATES.map((plate, i) => (
          <div key={i} className="min-w-full">
            <img
              src={plate.src}
              alt={plate.alt}
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #E67E22, #5D4037)'
                e.target.style.display = 'block'
                e.target.removeAttribute('src')
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {PLATES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-brown-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-brown-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg z-10"
        aria-label="Siguiente"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
