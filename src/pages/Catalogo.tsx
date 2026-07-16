import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'
import produtos from '../data/produtos.json'
import { Produto } from '../types'

export default function Catalogo() {
  const lista = produtos as Produto[]
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todos')

  const categorias = useMemo(
    () => Array.from(new Set(lista.map((p) => p.categoria))),
    [lista],
  )

  const filtrados = useMemo(() => {
    return lista.filter((p) => {
      const bateCategoria = categoria === 'Todos' || p.categoria === categoria
      const bateBusca = p.nome.toLowerCase().includes(busca.trim().toLowerCase())
      return bateCategoria && bateBusca
    })
  }, [lista, busca, categoria])

  return (
    <section className="container-app pt-28 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Catálogo</h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        <SearchBar valor={busca} onChange={setBusca} />
        <FilterBar categorias={categorias} ativa={categoria} onChange={setCategoria} />
      </div>

      {filtrados.length === 0 ? (
        <p className="text-secondary text-center py-20">Nenhum quadriciclo encontrado para essa busca.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </section>
  )
}
