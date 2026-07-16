import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import fundo from '../assets/fundos/fundoprincipal.png'
import emblema from '../assets/logos/emblema.png'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden flex items-end">
      <img
        src={fundo}
        alt="Quadriciclo em trilha de montanha"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-base/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-base/60 via-transparent to-transparent" />

      <div className="relative container-app pb-20 flex flex-col items-start gap-6">
        <img src={emblema} alt="" className="h-20 w-auto opacity-95" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-2xl">
          Liberdade e potência em cada trilha
        </h1>
        <p className="text-secondary text-base sm:text-lg max-w-xl">
          Quadriciclos novos e seminovos, elétricos e a combustão, para todas as idades. Procedência garantida e atendimento especializado.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <WhatsAppButton mensagem="Olá! Vim pelo site e quero falar com um vendedor." />
          <Link to="/catalogo" className="btn-outline">
            Ver catálogo <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
