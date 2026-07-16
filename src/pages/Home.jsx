import { ShieldCheck, Headset, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import produtos from '../data/produtos.json'

// Diferenciais exibidos em cards na Home - edite textos/ícones aqui
const diferenciais = [
  { icon: ShieldCheck, titulo: 'Procedência garantida', texto: 'Todos os quadriciclos passam por vistoria completa antes da venda.' },
  { icon: Headset, titulo: 'Atendimento especializado', texto: 'Equipe pronta para te ajudar a escolher o modelo certo.' },
  { icon: Lock, titulo: 'Compra segura', texto: 'Documentação transparente e negociação sem burocracia.' },
]

export default function Home() {
  // Mostra os 3 últimos quadriciclos cadastrados (últimos itens do JSON)
  const ultimos = [...produtos].slice(-3).reverse()

  return (
    <>
      <Hero />

      {/* Seção "Por que escolher a Quadrimotors?" */}
      <section className="container-app mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Quadrimotors?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {diferenciais.map(({ icon: Icon, titulo, texto }) => (
            <motion.div
              key={titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="card p-8 text-center flex flex-col items-center gap-4"
            >
              <div className="bg-accent/10 p-4 rounded-2xl">
                <Icon size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg">{titulo}</h3>
              <p className="text-secondary text-sm">{texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Últimos quadriciclos cadastrados */}
      <section className="container-app mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Últimos cadastrados</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultimos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      {/* CTA final para WhatsApp */}
      <section className="container-app mt-24 mb-20">
        <div className="card text-center py-16 px-6 flex flex-col items-center gap-5">
          <h2 className="text-2xl md:text-3xl font-bold max-w-lg">
            Pronto para encontrar o seu quadriciclo?
          </h2>
          <p className="text-secondary max-w-md">
            Fale agora com nossa equipe pelo WhatsApp e tire todas as suas dúvidas.
          </p>
          <ButtonWhatsapp />
        </div>
      </section>
    </>
  )
}
