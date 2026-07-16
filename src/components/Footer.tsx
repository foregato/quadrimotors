import { Link } from 'react-router-dom'
import { Instagram, Facebook, MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/logos/letra.png'
import { linkWhatsapp } from './WhatsAppButton'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 mt-24">
      <div className="container-app py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Quadrimotors & Cia" className="h-7 w-auto mb-4" />
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Quadriciclos novos e seminovos, elétricos e a combustão, com procedência garantida.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white/90">Navegação</h3>
          <Link to="/catalogo" className="text-secondary text-sm hover:text-accent">Catálogo</Link>
          <Link to="/sobre" className="text-secondary text-sm hover:text-accent">Sobre</Link>
          <Link to="/contato" className="text-secondary text-sm hover:text-accent">Contato</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white/90">Contato</h3>
          <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary text-sm hover:text-accent">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <span className="flex items-center gap-2 text-secondary text-sm">
            <MapPin size={16} /> Atendimento em toda a região
          </span>
          <div className="flex gap-4 mt-1">
            <a href="#" aria-label="Instagram" className="text-secondary hover:text-accent"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-secondary hover:text-accent"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-secondary">
        © {new Date().getFullYear()} Quadrimotors & Cia. Todos os direitos reservados.
      </div>
    </footer>
  )
}
