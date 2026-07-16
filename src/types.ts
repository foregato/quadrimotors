export interface Produto {
  id: number
  nome: string
  categoria: string
  marca: string
  modelo: string
  ano: number
  motor: string
  cilindrada: string
  tracao: string
  combustivel: string
  cor: string
  quilometragem: string
  estado: string
  preco: string
  preco_parcelado?: string
  descricao: string
  imagens: string[]
}

// Chaves que não são especificações técnicas (usadas para renderizar
// a tabela de especificações dinamicamente, sem hardcode de campos).
export const CAMPOS_NAO_ESPECIFICACAO = [
  'id',
  'nome',
  'categoria',
  'preco',
  'preco_parcelado',
  'descricao',
  'imagens',
]

export function extrairEspecificacoes(produto: Produto): Record<string, string> {
  const specs: Record<string, string> = {}
  Object.entries(produto).forEach(([chave, valor]) => {
    if (!CAMPOS_NAO_ESPECIFICACAO.includes(chave) && valor !== undefined && valor !== null && valor !== '') {
      specs[chave] = String(valor)
    }
  })
  return specs
}

export const ROTULOS_ESPECIFICACAO: Record<string, string> = {
  marca: 'Marca',
  modelo: 'Modelo',
  ano: 'Ano',
  motor: 'Motor',
  cilindrada: 'Cilindrada',
  tracao: 'Tração',
  combustivel: 'Combustível',
  cor: 'Cor',
  quilometragem: 'Quilometragem',
  estado: 'Estado',
}
