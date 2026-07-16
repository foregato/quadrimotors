import { useParams, Link, Navigate } from 'react-router-dom'
import Gallery from '../components/Gallery'
import SpecificationTable from '../components/SpecificationTable'
import WhatsAppButton from '../components/WhatsAppButton'
import ProductCard from '../components/ProductCard'
import produtos from '../data/produtos.json'
import { Produto as ProdutoTipo } from '../types'

export default function Produto() {
  const { id } = useParams()
  const lista = produtos as ProdutoTipo[]
  const produto = lista.find((p) => String(p.id) === id)

  if (!produto) return <Navigate to="/catalogo" replace />

  const relacionados = lista
    .filter((p) => p.id !== produto.id && p.categoria === produto.categoria)
    .slice(0, 3)

  const mensagem = `Olá! Tenho interesse no quadriciclo ${produto.nome}.`

  return (
    <section className="container-app pt-28 pb-20">
      <Link to="/catalogo" className="text-secondary text-sm hover:text-accent">← Voltar ao catálogo</Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <Gallery imagens={produto.imagens} alt={produto.nome} />

        <div className="flex flex-col gap-5">
          <span className="text-xs uppercase tracking-wide text-secondary">{produto.categoria}</span>
          <h1 className="text-3xl md:text-4xl font-bold">{produto.nome}</h1>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-accent">{produto.preco}</span>
            {produto.preco_parcelado && (
              <span className="text-secondary text-sm">ou {produto.preco_parcelado}</span>
            )}
          </div>
          <p className="text-secondary leading-relaxed">{produto.descricao}</p>

          <div className="flex flex-wrap gap-4 pt-2">
            <WhatsAppButton mensagem={mensagem} texto="Tenho Interesse" />
            <WhatsAppButton mensagem={mensagem} texto="Falar no WhatsApp" className="btn-outline" />
          </div>

          <SpecificationTable produto={produto} />
        </div>
      </div>

      {relacionados.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8">Produtos relacionados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relacionados.map((p) => (
              <ProductCard key={p.id} produto={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
