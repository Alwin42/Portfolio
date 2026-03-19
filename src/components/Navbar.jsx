import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleAboutClick = (e) => {
    e.preventDefault()
    if (pathname === '/') {
      // Already on home — just scroll
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to home, then scroll after page loads
      navigate('/')
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const links = [
    { path: '/',         label: 'Home',     onClick: null },
    { path: '/#about',   label: 'About',    onClick: handleAboutClick },
    { path: '/projects', label: 'Projects', onClick: null },
    { path: '/contact',  label: 'Contact',  onClick: null },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black font-body">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-widest text-navy hover:text-red transition-colors">
          ALWIN.DEV
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ path, label, onClick }) => {
            const active = pathname === path || (label === 'About' && pathname === '/')
            return (
              <li key={path}>
                <Link
                  to={path}
                  onClick={onClick}
                  className={`
                    block px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 transition-all duration-100
                    ${active
                      ? 'bg-black text-[#F1C40F] border-black'
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
      </div>
    </nav>
  )
}