import { Instagram, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logopebsf.png'

// Rodapé exibido em todas as páginas - edite os dados de contato aqui
export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 mt-20">
      <div className="container-app py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Quadrimotors & Cia" className="h-24 opacity-90" />

        <div className="flex items-center gap-6 text-secondary text-sm">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition duration-300">
            <Instagram size={18} /> @quadrimotors
          </a>
          <a href="tel:+5519994075246" className="flex items-center gap-2 hover:text-accent transition duration-300">
            <Phone size={18} /> (19) 99407-5246
          </a>
          <span className="hidden sm:flex items-center gap-2">
            <MapPin size={18} /> São Paulo, SP
          </span>
        </div>
      </div>
      <p className="text-center text-xs text-secondary/60 pb-6">
        © {new Date().getFullYear()} Quadrimotors & Cia. Todos os direitos reservados.
      </p>
    </footer>
  )
}
