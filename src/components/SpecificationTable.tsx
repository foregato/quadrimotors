import { Produto, extrairEspecificacoes, ROTULOS_ESPECIFICACAO } from '../types'

interface Props {
  produto: Produto
}

// Renderiza dinamicamente qualquer especificação presente no produto,
// sem depender de campos fixos no código.
export default function SpecificationTable({ produto }: Props) {
  const specs = extrairEspecificacoes(produto)
  const entradas = Object.entries(specs)

  if (entradas.length === 0) return null

  return (
    <div className="card overflow-hidden">
      <h2 className="font-display text-lg px-5 pt-5 pb-3">Especificações</h2>
      <dl>
        {entradas.map(([chave, valor], i) => (
          <div
            key={chave}
            className={`flex justify-between gap-4 px-5 py-3 text-sm ${
              i % 2 === 0 ? 'bg-white/[0.02]' : ''
            }`}
          >
            <dt className="text-secondary">{ROTULOS_ESPECIFICACAO[chave] ?? chave}</dt>
            <dd className="text-white font-medium text-right">{valor}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
