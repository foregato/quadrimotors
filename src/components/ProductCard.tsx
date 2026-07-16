import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Produto } from '../types'

interface Props {
  produto: Produto
}

export default function ProductCard({ produto }: Props) {
  return (
    <Link
      to={`/produto/${produto.id}`}
      className="card group overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={produto.imagens[0]}
          alt={produto.nome}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-base/80 backdrop-blur text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full text-accent">
          {produto.estado}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-xs text-secondary uppercase tracking-wide">{produto.categoria}</span>
        <h3 className="font-display text-lg leading-snug">{produto.nome}</h3>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-accent font-semibold text-lg">{produto.preco}</span>
          <ArrowUpRight size={20} className="text-secondary group-hover:text-accent transition-colors" />
        </div>
      </div>
    </Link>
  )
}
