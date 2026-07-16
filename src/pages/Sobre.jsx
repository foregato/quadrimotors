import { Compass, Target, Heart } from 'lucide-react'

// Textos institucionais - edite os parágrafos e a lista de valores aqui
const valores = [
  { icon: Compass, texto: 'Só entregamos máquinas em que nós mesmos confiaríamos para colocar nossa família na trilha.' },
  { icon: Target, texto: 'Compromisso com a transparência em cada negociação.' },
  { icon: Heart, texto: 'Respeito e cuidado no relacionamento com cada cliente.' },
]

export default function Sobre() {
  return (
    <section className="container-app pt-28 pb-20">
      <img
        src="/fundos/fundoprincipal.png"
        alt="Fachada da Quadrimotors & Cia"
        className="w-full aspect-video object-cover rounded-2xl"
      />

      <div className="mt-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossa história</h1>
        <p className="text-secondary leading-relaxed">
          A Quadrimotors & Cia nasceu de uma paixão de pai para filho pelo mundo dos quadriciclos. O que começou lá atrás, como um pequeno ponto de venda, cresceu e se transformou em uma grande referência no mercado de novos e seminovos, sempre batendo na tecla da qualidade e da confiança.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="card p-8">
          <h2 className="text-xl font-semibold mb-2">Missão</h2>
          <p className="text-secondary leading-relaxed">
            Conectar gerações e pessoas à liberdade e à emoção do off-road, oferecendo quadriciclos de alta qualidade com o atendimento próximo, confiável e parceiro que só uma empresa que nasceu de uma paixão de família pode proporcionar.
          </p>
        </div>
        <div className="card p-8">
          <h2 className="text-xl font-semibold mb-2">Valores</h2>
          <ul className="flex flex-col gap-3 mt-2">
            {valores.map(({ icon: Icon, texto }, i) => (
              <li key={i} className="flex items-start gap-3 text-secondary">
                <Icon size={20} className="text-accent shrink-0 mt-0.5" />
                {texto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
