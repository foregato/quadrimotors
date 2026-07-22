import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ButtonWhatsapp from './ButtonWhatsapp'

// Seção de abertura da Home - foto grande + overlay + título + CTAs
export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full flex items-end overflow-hidden">
      {/* Foto de fundo do quadriciclo (substitua a URL por uma imagem própria em /src/assets) */}
      <img
        src="/fundos/fundoprincipal.png"
        alt="Quadriciclo em trilha de aventura"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay escuro para dar contraste ao texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-bgdark via-bgdark/60 to-bgdark/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative container-app pb-16 md:pb-24"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Encontre o quadriciclo ideal para qualquer aventura.
        </h1>
        <p className="text-secondary text-lg mt-4 max-w-xl">
          Modelos novos e seminovos, com procedência garantida e atendimento especializado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="/catalogo" className="btn-primary">
            Ver Catálogo <ArrowRight size={20} />
          </Link>
          <ButtonWhatsapp className="btn-outline" />
        </div>
      </motion.div>
    </section>
  )
}