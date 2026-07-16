import { Search } from 'lucide-react'

// Campo de busca controlado - o estado fica na página Catálogo (componente pai)
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nome do modelo..."
        className="w-full bg-card border border-white/10 rounded-2xl py-4 pl-12 pr-4
                   text-white placeholder:text-secondary/70 focus:outline-none focus:border-accent
                   transition duration-300"
      />
    </div>
  )
}
