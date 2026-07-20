import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Carousel({ imagens = [] }) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const proxima = () => setIndex((i) => (i + 1) % imagens.length)
  const anterior = () => setIndex((i) => (i - 1 + imagens.length) % imagens.length)

  const openModal = (i) => {
    setModalIndex(i)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const modalNext = () => setModalIndex((i) => (i + 1) % imagens.length)
  const modalPrev = () => setModalIndex((i) => (i - 1 + imagens.length) % imagens.length)

  if (!imagens.length) return null

  return (
    <>
      {/* Carrossel principal */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-card cursor-zoom-in"
           onClick={() => openModal(index)}>
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
            <button onClick={(e) => { e.stopPropagation(); anterior(); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-bgdark/70 hover:bg-accent text-white p-2 rounded-full transition">
              <ChevronLeft size={22} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); proxima(); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-bgdark/70 hover:bg-accent text-white p-2 rounded-full transition">
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {imagens.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setIndex(i); }} className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-accent' : 'bg-white/40'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={closeModal}>
            <button onClick={closeModal} className="absolute top-6 right-6 text-white z-50">
              <X size={40} />
            </button>

            <div className="relative w-full max-w-5xl px-4" onClick={e => e.stopPropagation()}>
              <motion.img
                key={imagens[modalIndex]}
                src={imagens[modalIndex]}
                alt="Imagem ampliada"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-h-[90vh] w-auto mx-auto object-contain rounded-xl"
              />

              {imagens.length > 1 && (
                <>
                  <button onClick={modalPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full">
                    <ChevronLeft size={28} />
                  </button>
                  <button onClick={modalNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full">
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}