interface Props {
  categorias: string[]
  ativa: string
  onChange: (c: string) => void
}

export default function FilterBar({ categorias, ativa, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {['Todos', ...categorias].map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            ativa === c
              ? 'bg-accent text-base border-accent'
              : 'border-white/15 text-secondary hover:border-accent hover:text-accent'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
