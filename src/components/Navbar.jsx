import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { path: '/',         label: 'Home' },
  { path: '/about',    label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black font-body">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-display text-2xl tracking-widest text-navy hover:text-red transition-colors">
          ALWIN.DEV
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ path, label }) => {
            const active = pathname === path
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`
                    block px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 transition-all duration-100
                    ${active
                      ? 'bg-black text-yellow border-black'
                      : 'bg-white text-black border-transparent hover:border-black hover:shadow-brutal-sm'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-black/10
                ${pathname === path ? 'bg-yellow text-black' : 'hover:bg-cream'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}