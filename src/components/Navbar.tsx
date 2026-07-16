import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logos/letra.png'

const links = [
  { to: '/', label: 'Início' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [aberto, setAberto] = useState(false)
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        rolado ? 'bg-base/90 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container-app flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Quadrimotors & Cia" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide uppercase transition-colors ${
                  isActive ? 'text-accent' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          aria-label="Abrir menu"
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {aberto && (
        <nav className="md:hidden bg-base border-t border-white/5 px-5 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setAberto(false)}
              className={({ isActive }) =>
                `text-base font-semibold uppercase pt-4 ${isActive ? 'text-accent' : 'text-white/80'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
