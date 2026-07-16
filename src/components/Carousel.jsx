import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// Carrossel simples de imagens - usado no topo da página do produto
export default function Carousel({ imagens = [] }) {
  const [index, setIndex] = useState(0)

  const proxima = () => setIndex((i) => (i + 1) % imagens.length)
  const anterior = () => setIndex((i) => (i - 1 + imagens.length) % imagens.length)

  if (!imagens.length) return null

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-card">
      <AnimatePresence mode="wait">
        <motion.img
          key={imagens[index]}
          src={imagens[index]}
          alt={`Foto ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {imagens.length > 1 && (
        <>
          <button
            onClick={anterior}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-bgdark/70 hover:bg-accent
                       text-white p-2 rounded-full transition duration-300"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={proxima}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-bgdark/70 hover:bg-accent
                       text-white p-2 rounded-full transition duration-300"
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicadores (bolinhas) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imagens.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para foto ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition duration-300 ${
                  i === index ? 'bg-accent' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
