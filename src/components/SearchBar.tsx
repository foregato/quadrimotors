import { Search } from 'lucide-react'

interface Props {
  valor: string
  onChange: (v: string) => void
}

export default function SearchBar({ valor, onChange }: Props) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar quadriciclo..."
        aria-label="Buscar quadriciclo"
        className="w-full bg-card border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-secondary focus:border-accent outline-none transition-colors"
      />
    </div>
  )
}
