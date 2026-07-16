import { useParams, Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import produtos from '../data/produtos.json'

// Campos da tabela de especificações (rótulo + chave correspondente no JSON)
const especificacoes = [
  { label: 'Marca', chave: 'marca' },
  { label: 'Modelo', chave: 'modelo' },
  { label: 'Ano', chave: 'ano' },
  { label: 'Motor', chave: 'motor' },
  { label: 'Cilindrada', chave: 'cilindrada' },
  { label: 'Tração', chave: 'tracao' },
  { label: 'Combustível', chave: 'combustivel' },
  { label: 'Cor', chave: 'cor' },
  { label: 'Quilometragem', chave: 'quilometragem' },
  { label: 'Estado', chave: 'estado' },
]

export default function Produto() {
  const { id } = useParams()
  const produto = produtos.find((p) => String(p.id) === id)

  if (!produto) {
    return (
      <section className="container-app pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Quadriciclo não encontrado</h1>
        <Link to="/catalogo" className="btn-primary inline-flex">Voltar ao catálogo</Link>
      </section>
    )
  }

  return (
    <section className="container-app pt-28 pb-20">
      <Carousel imagens={produto.imagens} />

      <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{produto.nome}</h1>
          <span className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full
            ${produto.estado === 'Novo' ? 'bg-accent/20 text-accent' : 'bg-white/10 text-secondary'}`}>
            {produto.estado}
          </span>
        </div>
        <p className="text-accent font-extrabold text-3xl">{produto.preco}</p>
      </div>

      {/* Tabela de especificações */}
      <div className="card mt-8 p-6 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-4">
        {especificacoes.map(({ label, chave }) => (
          <div key={chave}>
            <p className="text-secondary text-xs uppercase tracking-wide">{label}</p>
            <p className="font-medium mt-1">{produto[chave]}</p>
          </div>
        ))}
      </div>

      {/* Descrição completa */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Descrição</h2>
        <p className="text-secondary leading-relaxed">{produto.descricao}</p>
      </div>

      {/* Botão de interesse - abre o WhatsApp com mensagem contendo o nome do produto */}
      <div className="mt-10">
        <ButtonWhatsapp
          mensagem={`Olá, tenho interesse no ${produto.nome}`}
          texto="Tenho Interesse"
          className="btn-primary w-full sm:w-auto text-lg py-5 px-10"
        />
      </div>
    </section>
  )
}
