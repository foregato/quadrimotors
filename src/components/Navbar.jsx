import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/fundonovoatualizado.png'

// Itens do menu - para adicionar uma nova página, basta incluir aqui
const links = [
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bgdark/90 backdrop-blur-md border-b border-white/5">
      <nav className="container-app flex items-center justify-between h-20">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Quadrimotors & Cia" className="h-16" />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botão hambúrguer - mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu mobile (dropdown) */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 bg-bgdark border-b border-white/5">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium ${isActive ? 'text-accent' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
