import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  imagens: string[]
  alt: string
}

export default function Gallery({ imagens, alt }: Props) {
  const [ativa, setAtiva] = useState(0)

  const anterior = () => setAtiva((v) => (v === 0 ? imagens.length - 1 : v - 1))
  const proxima = () => setAtiva((v) => (v === imagens.length - 1 ? 0 : v + 1))

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface card">
        <img src={imagens[ativa]} alt={`${alt} - imagem ${ativa + 1}`} className="w-full h-full object-cover" />
        {imagens.length > 1 && (
          <>
            <button
              onClick={anterior}
              aria-label="Imagem anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-base/70 p-2 rounded-full hover:bg-accent hover:text-base transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={proxima}
              aria-label="Próxima imagem"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-base/70 p-2 rounded-full hover:bg-accent hover:text-base transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {imagens.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {imagens.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setAtiva(i)}
              className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === ativa ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
