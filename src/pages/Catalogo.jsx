import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import produtos from '../data/produtos.json'

// Extrai valores únicos de um campo do array de produtos (remove nulos/undefineds)
const valoresUnicos = (campo) => 
  [...new Set(produtos.map((p) => p[campo]).filter(Boolean))].sort()

// Helper para converter a string "R$ 15.900,00" em número (15900)
const converterPrecoParaNumero = (precoString) => {
  if (!precoString) return 0
  return parseFloat(
    precoString
      .replace('R$', '')
      .replace(/\./g, '')
      .replace(',', '.')
      .trim()
  )
}

export default function Catalogo() {
  const [busca, setBusca] = useState('')
  const [cilindrada, setCilindrada] = useState('')
  const [estado, setEstado] = useState('')
  const [faixaPreco, setFaixaPreco] = useState('')

  // Filtra os produtos com base na busca + todos os filtros
  const produtosFiltrados = useMemo(() => {
    return produtos.filter((p) => {
      // 1. Busca por nome
      const nomeCombina = p.nome.toLowerCase().includes(busca.toLowerCase())

      // 2. Filtro por Cilindrada
      const cilindradaCombina = cilindrada ? p.cilindrada === cilindrada : true

      // 3. Filtro por Condição (Estado: Novo/Usado)
      const estadoCombina = estado ? p.estado === estado : true

      // 4. Filtro por Faixa de Preço
      let precoCombina = true
      const precoNum = converterPrecoParaNumero(p.preco)

      if (faixaPreco === 'ate-10k') {
        precoCombina = precoNum <= 10000
      } else if (faixaPreco === '10k-20k') {
        precoCombina = precoNum > 10000 && precoNum <= 20000
      } else if (faixaPreco === 'acima-20k') {
        precoCombina = precoNum > 20000
      }

      return nomeCombina && cilindradaCombina && estadoCombina && precoCombina
    })
  }, [busca, cilindrada, estado, faixaPreco])

  return (
    <section className="container-app pt-32 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Catálogo</h1>
      <p className="text-secondary mb-8">Confira todos os quadriciclos disponíveis.</p>

      {/* Busca */}
      <SearchBar value={busca} onChange={setBusca} />

      {/* Grid de Filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {/* Filtro de Cilindrada */}
        <Select 
          label="Cilindrada" 
          value={cilindrada} 
          onChange={setCilindrada} 
          opcoes={valoresUnicos('cilindrada')} 
        />

        {/* Filtro de Condição (Estado: Novo / Usado) */}
        <Select 
          label="Condição" 
          value={estado} 
          onChange={setEstado} 
          opcoes={valoresUnicos('estado')} 
        />

        {/* Filtro de Faixa de Preço (Select customizado com faixas) */}
        <select
          value={faixaPreco}
          onChange={(e) => setFaixaPreco(e.target.value)}
          className="bg-card border border-white/10 rounded-2xl py-4 px-4 text-white
                     focus:outline-none focus:border-accent transition duration-300"
        >
          <option value="">Faixa de Preço (todas)</option>
          <option value="ate-10k">Até R$ 10.000</option>
          <option value="10k-20k">De R$ 10.000 a R$ 20.000</option>
          <option value="acima-20k">Acima de R$ 20.000</option>
        </select>
      </div>

      {/* Grade de produtos */}
      {produtosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      ) : (
        <p className="text-secondary text-center mt-16">
          Nenhum quadriciclo encontrado com esses filtros.
        </p>
      )}
    </section>
  )
}

// Select reutilizável para os filtros dinâmicos
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