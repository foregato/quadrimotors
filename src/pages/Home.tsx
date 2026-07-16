import { ShieldCheck, Headset, Lock } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import WhatsAppButton from '../components/WhatsAppButton'
import produtos from '../data/produtos.json'
import { Produto } from '../types'

const diferenciais = [
  { icon: ShieldCheck, titulo: 'Procedência garantida', texto: 'Todos os quadriciclos passam por vistoria completa antes da venda.' },
  { icon: Headset, titulo: 'Atendimento especializado', texto: 'Equipe pronta para te ajudar a escolher o modelo certo.' },
  { icon: Lock, titulo: 'Compra segura', texto: 'Documentação transparente e negociação sem burocracia.' },
]

export default function Home() {
  const destaques = (produtos as Produto[]).slice(-3).reverse()

  return (
    <>
      <Hero />

      <section className="container-app mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Quadrimotors?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {diferenciais.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="card p-8 text-center flex flex-col items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-2xl">
                <Icon size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg normal-case">{titulo}</h3>
              <p className="text-secondary text-sm">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-app mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Últimos cadastrados</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destaques.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      <section className="container-app mt-24 mb-20">
        <div className="card text-center py-16 px-6 flex flex-col items-center gap-5">
          <h2 className="text-2xl md:text-3xl font-bold max-w-lg normal-case">
            Pronto para encontrar o seu quadriciclo?
          </h2>
          <p className="text-secondary max-w-md">
            Fale agora com nossa equipe pelo WhatsApp e tire todas as suas dúvidas.
          </p>
          <WhatsAppButton mensagem="Olá! Vim pelo site e quero saber mais sobre os quadriciclos disponíveis." />
        </div>
      </section>
    </>
  )
}
