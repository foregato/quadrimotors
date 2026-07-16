import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import produtos from '../data/produtos.json'

// Extrai valores únicos de um campo do array de produtos (usado para popular os selects de filtro)
const valoresUnicos = (campo) => [...new Set(produtos.map((p) => p[campo]))].sort()

export default function Catalogo() {
  const [busca, setBusca] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState('')
  const [cilindrada, setCilindrada] = useState('')

  // Filtra os produtos com base na busca + filtros selecionados
  const produtosFiltrados = useMemo(() => {
    return produtos.filter((p) => {
      const nomeCombina = p.nome.toLowerCase().includes(busca.toLowerCase())
      const marcaCombina = marca ? p.marca === marca : true
      const anoCombina = ano ? String(p.ano) === ano : true
      const cilindradaCombina = cilindrada ? p.cilindrada === cilindrada : true
      return nomeCombina && marcaCombina && anoCombina && cilindradaCombina
    })
  }, [busca, marca, ano, cilindrada])

  return (
    <section className="container-app pt-32 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Catálogo</h1>
      <p className="text-secondary mb-8">Confira todos os quadriciclos disponíveis.</p>

      {/* Busca */}
      <SearchBar value={busca} onChange={setBusca} />

      {/* Filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <Select label="Cilindrada" value={cilindrada} onChange={setCilindrada} opcoes={valoresUnicos('cilindrada')} />
      </div>

      {/* Grade de produtos - 1 col mobile / 2 tablet / 3-4 desktop */}
      {produtosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      ) : (
        <p className="text-secondary text-center mt-16">Nenhum quadriciclo encontrado com esses filtros.</p>
      )}
    </section>
  )
}

// Select reutilizável para os filtros
function Select({ label, value, onChange, opcoes }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-card border border-white/10 rounded-2xl py-4 px-4 text-white
                 focus:outline-none focus:border-accent transition duration-300"
    >
      <option value="">{label} (todos)</option>
      {opcoes.map((op) => (
        <option key={op} value={op}>{op}</option>
      ))}
    </select>
  )
}
