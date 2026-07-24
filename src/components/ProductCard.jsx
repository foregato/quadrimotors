import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Card vertical de um quadriciclo - usado no Catálogo e na Home
export default function ProductCard({ produto }) {
  const isVendido = produto.vendido === true || produto.vendido === "true"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="card overflow-hidden flex flex-col relative"
    >
      {/* Badge de VENDIDO - prioridade máxima */}
      {isVendido ? (
        <div className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-5 py-2 rounded-md shadow-md z-20">
          VENDIDO
        </div>
      ) : produto.badge && (
        /* Badge original (Oportunidade, etc) */
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-md shadow-md z-10">
          {produto.badge}
        </div>
      )}

      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.imagens[0]}
          alt={produto.nome}
          className={`w-full aspect-[4/3] object-cover transition-all duration-300 ${
            isVendido ? 'opacity-75' : ''
          }`}
        />
      </Link>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-lg leading-snug">{produto.nome}</h3>

        <div className="flex items-center gap-3 text-sm text-secondary">
          <span>{produto.ano}</span>
          <span className="w-1 h-1 rounded-full bg-secondary/50" />
          <span>{produto.cilindrada}</span>
        </div>

        <p className="text-accent font-bold text-xl mt-1">{produto.preco}</p>

        <Link
          to={`/produto/${produto.id}`}
          className="btn-primary mt-3 w-full text-sm py-3"
        >
          Ver detalhes
        </Link>

        {isVendido && (
          <p className="text-red-400 text-xs text-center mt-1">
            Produto vendido • Sob encomenda
          </p>
        )}
      </div>
    </motion.div>
  )
}